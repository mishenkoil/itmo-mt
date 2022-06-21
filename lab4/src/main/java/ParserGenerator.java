package main.java;

import main.generator.Grammar;
import main.generator.help.Rule;
import main.generator.help.State;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;

public class ParserGenerator {
    private Grammar grammar;

    ParserGenerator(Grammar grammar) throws IOException {
        this.grammar = grammar;
        Path pathDir = Paths.get(System.getProperty("user.dir"));
        pathDir = pathDir.resolve("gen").resolve(grammar.grammarName.toLowerCase());
        Files.createDirectories(pathDir);
        String parserName = grammar.grammarName + "Parser.java";
        PrintWriter printWriter = new PrintWriter(new File(pathDir.toString(), parserName));
        printWriter.write(fileText().toString());
        printWriter.close();
    }

    private StringBuilder fileText() {
        StringBuilder sb = new StringBuilder();
        sb.append(printString("package " + grammar.grammarName.toLowerCase() + ";\n" +
                "\n" +
                "import java.io.BufferedWriter;\n" +
                "import java.io.File;\n" +
                "import java.io.IOException;\n" +
                "import java.nio.charset.StandardCharsets;\n" +
                "import java.nio.file.Files;\n" +
                "import java.nio.file.Path;\n" +
                "import java.nio.file.Paths;\n" +
                "import java.util.ArrayList;\n" +
                "import java.util.List;", 0));
        for (String imp : grammar.imports) {
            sb.append(printString("import " + imp + ";", 0));
        }
        sb.append("\n");
        sb.append(printString("" +
                "public class " + grammar.grammarName + "Parser {\n" +
                "\tpublic Tree tree;\n" +
                "\tpublic static class Tree {\n" +
                "\t\tprivate String name;\n" +
                "\t\tprivate List<Tree> children = new ArrayList<>();\n" +
                "\n" +
                "\t\tTree(String s) {\n" +
                "\t\t\tname = s;\n" +
                "\t\t}\n" +
                "\n" +
                "\t\tpublic void addChild(Tree node) {\n" +
                "\t\t\tchildren.add(node);\n" +
                "\t\t}\n" +
                "\n" +
                "\t\tpublic String getName() {\n" +
                "\t\t\treturn name;\n" +
                "\t\t}\n" +
                "\n" +
                "\t\tvoid print(int testNumber) throws IOException {\n" +
                "\t\t\tfinal String outDir = System.getProperty(\"user.dir\") + File.separator + \"Visualise\";\n" +
                "\t\t\tPath outputFile = Paths.get(outDir + File.separator + \"gram\" + testNumber + \".gv\");\n" +
                "\t\t\tif (outputFile.getParent() != null) {\n" +
                "\t\t\t\ttry {\n" +
                "\t\t\t\t\tFiles.createDirectories(outputFile.getParent());\n" +
                "\t\t\t\t} catch (IOException e) {\n" +
                "\t\t\t\t\tSystem.out.println(\"Couldn't create output file path\");\n" +
                "\t\t\t\t\treturn;\n" +
                "\t\t\t\t}\n" +
                "\t\t\t}\n" +
                "\t\t\ttry (BufferedWriter writer = Files.newBufferedWriter(outputFile, StandardCharsets.UTF_8)) {\n" +
                "\t\t\t\tfinal String fileStart = \"digraph HelloWorld {\";\n" +
                "\t\t\t\tfinal String fileEnd = \"}\";\n\n" +
                "\t\t\t\twriter.write(fileStart);\n" +
                "\t\t\t\tprintTree(writer, 1, -1);\n" +
                "\t\t\t\twriter.write(fileEnd);\n" +
                "\t\t\t} catch (IOException e) {\n" +
                "\t\t\t\tSystem.out.println(\"Unable to write to file: \" + e.getMessage());\n" +
                "\t\t\t}\n" +
                "\t\t}\n\n"+
                "\t\tprivate int printTree(BufferedWriter writer, int curID, int parentID) throws IOException, IOException {\n"+
                "\t\t\tfinal String startTree = Integer.toString(curID) + \"[label=\\\"\" + name + \"\\\"];\";\n\n" +
                "\t\t\twriter.write(startTree);\n" +
                "\t\t\tif (parentID != -1){\n" +
                "\t\t\t\twriter.write(Integer.toString(parentID) + \" -> \" + Integer.toString(curID) + \";\");\n" +
                "\t\t\t}\n" +
                "\t\t\tint freeID = curID + 1;\n" +
                "\t\t\tif (!children.isEmpty()) {\n" +
                "\t\t\t\tfor (Tree child : children) {\n" +
                "\t\t\t\t\tfreeID = child.printTree(writer, freeID, curID);\n" +
                "\t\t\t\t}\n" +
                "\t\t\t}\n" +
                "\t\t\treturn freeID;\n" +
                "\t\t}\n"+
                "\t}", 0));
        sb.append("\n");
        for (State state : grammar.states.values()) {
            sb.append(printStateTree(state));
            sb.append("\n");
        }
        sb.append(printString("private " + grammar.grammarName + "Lexer lex;", 1));
        sb.append("\n");
        sb.append(printString(
                "\tpublic "+ grammar.grammarName +"Parser("+ grammar.grammarName +"Lexer lex) throws Exception {\n" +
                "\t\tthis.lex = lex;\n" +
                "\t\tbuildTree();\n" +
                "\t}", 0));
        sb.append("\n");
        sb.append(printString("" +
                "\tprivate void buildTree() throws Exception {\n" +
                "\t\ttree = _" + grammar.startState + "();\n" +
                "\t\tif (lex.getCurrentToken() != " + grammar.grammarName + "Token._END) {\n" +
                "\t\t\tthrow new Exception(\"Cur token is \" + lex.getCurrentToken().toString() + \" but expected END.\");\n" +
                "\t\t}\n" +
                "\t}",0));
        sb.append("\n");
        sb.append(printString("" +
                "\tpublic void showTree(int ind) throws IOException {\n" +
                "\t\ttree.print(ind);\n" +
                "\t}", 0));
        sb.append("\n");
        for (String returnStr : grammar.states.get(grammar.startState).getReturns()) {
            String[] arg = returnStr.split(" ");
            sb.append(printString("public " + arg[0] + " get" + arg[1] + "() {", 1));
            sb.append(printString("return ((Tree_E)tree)." + arg[1] + ";", 2));
            sb.append(printString("}", 1));
        }
        sb.append("\n");
        sb.append(printString("" +
                "\tprivate void consume("+ grammar.grammarName +"Token token) throws Exception{\n" +
                "\t\tif (lex.getCurrentToken() != token) {\n" +
                "\t\t\tthrow new Exception(\"Expected another token.\");\n" +
                "\t\t}\n" +
                "\t}", 0));
        sb.append("\n");
        for (State s : grammar.states.values()) {
            sb.append(printState(s));
            sb.append("\n");
        }
        sb.append(printString("}", 0));
        return sb;
    }

    private StringBuilder printStateTree(State s) {
        StringBuilder sb = new StringBuilder();
        sb.append(printString("public class Tree_" + s.getName() + " extends Tree {", 1));
        sb.append(printString("Tree_" + s.getName() + "() {", 2));
        sb.append(printString("super(\"" + s.getName() + "\");", 3));
        sb.append(printString("}", 2));
        for (String str : s.getReturns()) {
            sb.append(printString("public " + str + ";", 2));
        }
        sb.append(printString("}", 1));
        return sb;
    }

    private StringBuilder printState(State s) {
        StringBuilder sb = new StringBuilder();
        sb.append(printString("private Tree_" + s.getName() + " _" + s.getName() + "(" + printParameters(s.getParameters()) + ") throws Exception {", 1));
        sb.append(printString("Tree_" + s.getName() + " res = new Tree_" + s.getName() + "();", 2));
        sb.append(printString("switch (lex.getCurrentToken()) {", 2));
        for (Rule rule : s.rules) {
            sb.append(printRule(rule, s));
        }
        sb.append(printString("default : ", 3));
        sb.append(printString("throw new Exception(\"Unexpected token.\");", 4));
        sb.append(printString("}", 2));
        sb.append(printString("}", 1));
        return sb;
    }

    private String printParameters(List<String> parameters) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < parameters.size(); i++) {
            if (i != 0) {
                sb.append(", ");
            }
            sb.append(parameters.get(i));
        }
        return sb.toString();
    }

    private StringBuilder printFollowCase(State s, String action) {
        StringBuilder sb = new StringBuilder();
        for (String item : s.getFollow()) {
            sb.append(printString("case " + item + " :", 3));
        }
        if (sb.length() == 0) {
            return sb;
        }
        sb.append(printString("{", 3));
        sb.append(printString(action, 4));
        sb.append(printString("return res;", 4));
        sb.append(printString("}", 3));
        return sb;
    }

    private StringBuilder printRule(Rule rule, State s) {
        StringBuilder sb = new StringBuilder();
        HashSet<String> first = grammar.firstForRule(rule);
        boolean containsEps = false;
        for (String token : first) {
            if (!token.equals("EPS")) {
                sb.append(printString("case " + token + " :", 3));
            } else {
                containsEps = true;
                sb.append(printFollowCase(s, rule.actions.get(0)));
            }
        }
        if (sb.length() == 0 || containsEps) {
            return sb;
        }
        sb.append(printString("{", 3));
        int index = 0;
        for (int i = 0; i < rule.items.size(); i++) {
            String item = rule.items.get(i);
            if (grammar.tokenHolders.containsKey(item)) {
                sb.append(printString("consume(" + grammar.grammarName + "Token." + item +");", 4));
                sb.append(printString("res.addChild(new Tree(\"" + item + "\"));" , 4));
                sb.append(printString(rule.actions.get(i), 4));
                sb.append(printString("lex.getNextToken();", 4));
            } else if (grammar.states.containsKey(item)) {
                sb.append(printString("Tree_" + item + " n" + index + " = _" + item + "(" + rule.parameters.get(i) + ");", 4));
                sb.append(printString("res.addChild(n" + index +");", 4));
                sb.append(printString(rule.actions.get(i), 4));
                index++;
            } else {
                System.err.println("Not in token & states. " + item);
                System.exit(-1);
            }
        }
        sb.append(printString("return res;", 4));
        sb.append(printString("}", 3));
        return sb;
    }

    private StringBuilder printString(String text, int offset) {
        StringBuilder stringBuilder = new StringBuilder();
        for (int i = 0; i < offset; i++) {
            stringBuilder.append("\t");
        }
        stringBuilder.append(text);
        stringBuilder.append("\n");
        return stringBuilder;
    }
}
