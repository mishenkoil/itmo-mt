package main.java;

import calculator.CalculatorLexer;
import calculator.CalculatorParser;
//import second.SecondLexer;
//import second.SecondParser;
import main.*;
import main.generator.Grammar;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.TokenStream;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            MainGrammarLexer lexer = new MainGrammarLexer(CharStreams.fromFileName("calcgrammar"));
//            MainGrammarLexer lexer = new MainGrammarLexer(CharStreams.fromFileName("secondgrammar"));
            TokenStream tokenStream = new CommonTokenStream(lexer);
            MainGrammarParser parser = new MainGrammarParser(tokenStream);
            Grammar grammar = parser.start().gram;
            grammar.constructFirst();
            grammar.constructFollow();
            new LexerGenerator(grammar);
            new ParserGenerator(grammar);
            Scanner in = new Scanner(System.in);
//            while (true) {
//                String str = in.nextLine();
//                System.out.println(str);
//                SecondLexer secondLexer = new SecondLexer(str);
//                SecondParser secondParser = new SecondParser(secondLexer);
//                secondParser.showTree(1);
//            }
            while (true) {
                String str = in.nextLine();
                System.out.println(str);
                CalculatorLexer calculatorLexer = new CalculatorLexer(str);
                CalculatorParser calculatorParser = new CalculatorParser(calculatorLexer);
                calculatorParser.showTree(1);
                System.out.println(calculatorParser.getvalue());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
