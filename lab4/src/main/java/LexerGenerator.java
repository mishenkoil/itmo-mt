package main.java;

import main.generator.Grammar;
import main.generator.help.TokensHolder;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class LexerGenerator {
    private Grammar grammar;

    LexerGenerator(Grammar grammar) throws IOException {
        this.grammar = grammar;
        Path pathDir = Paths.get(System.getProperty("user.dir"));
        pathDir = pathDir.resolve("gen").resolve(grammar.grammarName.toLowerCase());
        Files.createDirectories(pathDir);
        String lexerName = grammar.grammarName + "Lexer.java";
        String tokenName = grammar.grammarName + "Token.java";
        PrintWriter printWriter1 = new PrintWriter(new File(pathDir.toString(), tokenName));
        printWriter1.write(printTokenClass().toString());
        printWriter1.close();
        PrintWriter printWriter2 = new PrintWriter(new File(pathDir.toString(), lexerName));
        printWriter2.write(fileText().toString());
        printWriter2.close();
    }

    private StringBuilder printTokenClass() {
        StringBuilder sb = new StringBuilder();
        sb.append(printWithOffset("package " + grammar.grammarName.toLowerCase() + ";", 0));
        sb.append(printWithOffset("\npublic enum " + grammar.grammarName + "Token {", 0));
        for (String s : grammar.tokenHolders.keySet()) {
            sb.append(printWithOffset(s + ",", 1));
        }
        sb.append(printWithOffset("_END\n}\n", 1));
        return sb;
    }

    private StringBuilder fileText() {
        StringBuilder sb = new StringBuilder();
        sb.append(printWithOffset("package " + grammar.grammarName.toLowerCase() + ";\n" +
                "import java.util.ArrayList;\n" +
                "import java.util.List;\n" +
                "import java.util.regex.Matcher;\n" +
                "import java.util.regex.Pattern;", 0));
        sb.append("\n");
        sb.append(printWithOffset("public class " + grammar.grammarName + "Lexer {", 0));
        sb.append(printWithOffset("\tprivate StringBuilder inputSB;\n" +
                "\tprivate List<TokensHolder> tokenPatterns = new ArrayList<>();\n" +
                "\tprivate List<TokensHolder> skipTokenPatterns = new ArrayList<>();\n" +
                "\tprivate List<" + grammar.grammarName + "Token> tokens = new ArrayList<>();\n" +
                "\tprivate List<String> tokensToString = new ArrayList<>();\n" +
                "\tprivate int currentPosition = 0;\n", 0));
        sb.append(printWithOffset("\tpublic " + grammar.grammarName + "Lexer(String input) throws Exception {\n" +
                "\t\tinputSB = new StringBuilder(input);", 0));
        sb.append("\n");
        for (TokensHolder item : grammar.tokens) {
            sb.append(printWithOffset("tokenPatterns.add(new TokensHolder(" + grammar.grammarName + "Token." + item.name + "," + item.pattern + "));", 2));
        }
        sb.append("\n");
        for (TokensHolder item : grammar.skipTokens) {
            sb.append(printWithOffset("skipTokenPatterns.add(new TokensHolder(" + grammar.grammarName + "Token." + item.name + "," + item.pattern + "));", 2));
        }
        sb.append(printWithOffset("getTokens();", 2));
        sb.append(printWithOffset("}", 1));
        sb.append("\n");
        sb.append(printWithOffset("" +
                "\tpublic " + grammar.grammarName + "Token getCurrentToken() {\n" +
                "\t\treturn tokens.get(currentPosition);\n" +
                " \t}\n" +
                "\n" +
                "\tpublic String getCurrentTokenString() {\n" +
                "\t\treturn tokensToString.get(currentPosition);\n" +
                "\t}\n" +
                "\n" +
                "\tpublic " + grammar.grammarName + "Token getNextToken() {\n" +
                "\t\treturn tokens.get(++currentPosition);\n" +
                "\t}\n" +
                "\n" +
                "\tprivate void getTokens() throws Exception {\n" +
                "\t\twhile (!(inputSB.length() == 0)) {\n" +
                "\t\t\t" + grammar.grammarName + "Token t = findFirstToken();\n" +
                "\t\t\tif (t != null) {\n" +
                "\t\t\t\ttokens.add(t);\n" +
                "\t\t\t} else if (!findFirstSkipToken()) {\n" +
                "\t\t\t\tthrow new Exception(\"Not find matching with tokens.\");\n" +
                "\t\t\t}\n" +
                "\t\t}\n" +
                "\t\ttokens.add(" + grammar.grammarName + "Token._END);\n" +
                "\t}\n" +
                "\n" +
                "\tprivate boolean findFirstSkipToken() {\n" +
                "\t\tfor (TokensHolder item : skipTokenPatterns) {\n" +
                "\t\t\tMatcher m = item.pattern.matcher(inputSB.toString());\n" +
                "\t\t\tif (m.lookingAt()) {\n" +
                "\t\t\t\tinputSB.delete(0, m.end());\n" +
                "\t\t\t\treturn true;\n" +
                "\t\t\t}\n" +
                "\t\t}\n" +
                "\t\treturn false;\n" +
                "\t}\n" +
                "\n" +
                "\tprivate " + grammar.grammarName + "Token findFirstToken() {\n" +
                "\t\tfor (TokensHolder item : tokenPatterns) {\n" +
                "\t\t\tMatcher m = item.pattern.matcher(inputSB.toString());\n" +
                "\t\t\tif (m.lookingAt()) {\n" +
                "\t\t\t\ttokensToString.add(inputSB.substring(0, m.end()));\n" +
                "\t\t\t\tinputSB.delete(0, m.end());\n" +
                "\t\t\t\treturn item.token;\n" +
                "\t\t\t}\n" +
                "\t\t}\n" +
                "\t\treturn null;\n" +
                "\t}\n" +
                "\n" +
                "\tprivate static class TokensHolder {\n" +
                "\t\t" + grammar.grammarName + "Token token;\n" +
                "\t\tPattern pattern;\n" +
                "\t\tTokensHolder(" + grammar.grammarName + "Token token, String s) {\n" +
                "\t\t\tthis.token = token;\n" +
                "\t\t\tpattern = Pattern.compile(s);\n" +
                "\t\t}\n" +
                "\t}\n" +
                "}", 0
        ));
        return sb;
    }

    private StringBuilder printWithOffset(String text, int offset) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < offset; i++) {
            stringBuilder.append("\t");
        }
        stringBuilder.append(text);
        stringBuilder.append("\n");
        return stringBuilder;
    }
}