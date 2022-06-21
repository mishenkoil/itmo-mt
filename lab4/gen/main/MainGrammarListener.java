// Generated from C:/Projects/MT/src/main\MainGrammar.g4 by ANTLR 4.10.1
package main;

import main.generator.Grammar;
import main.generator.help.*;

import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MainGrammarParser}.
 */
public interface MainGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(MainGrammarParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(MainGrammarParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MainGrammarParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MainGrammarParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#header}.
	 * @param ctx the parse tree
	 */
	void enterHeader(MainGrammarParser.HeaderContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#header}.
	 * @param ctx the parse tree
	 */
	void exitHeader(MainGrammarParser.HeaderContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#imports}.
	 * @param ctx the parse tree
	 */
	void enterImports(MainGrammarParser.ImportsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#imports}.
	 * @param ctx the parse tree
	 */
	void exitImports(MainGrammarParser.ImportsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#importExpr}.
	 * @param ctx the parse tree
	 */
	void enterImportExpr(MainGrammarParser.ImportExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#importExpr}.
	 * @param ctx the parse tree
	 */
	void exitImportExpr(MainGrammarParser.ImportExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#importName}.
	 * @param ctx the parse tree
	 */
	void enterImportName(MainGrammarParser.ImportNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#importName}.
	 * @param ctx the parse tree
	 */
	void exitImportName(MainGrammarParser.ImportNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#tokens}.
	 * @param ctx the parse tree
	 */
	void enterTokens(MainGrammarParser.TokensContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#tokens}.
	 * @param ctx the parse tree
	 */
	void exitTokens(MainGrammarParser.TokensContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#tokenExpr}.
	 * @param ctx the parse tree
	 */
	void enterTokenExpr(MainGrammarParser.TokenExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#tokenExpr}.
	 * @param ctx the parse tree
	 */
	void exitTokenExpr(MainGrammarParser.TokenExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#startState}.
	 * @param ctx the parse tree
	 */
	void enterStartState(MainGrammarParser.StartStateContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#startState}.
	 * @param ctx the parse tree
	 */
	void exitStartState(MainGrammarParser.StartStateContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#skipAttr}.
	 * @param ctx the parse tree
	 */
	void enterSkipAttr(MainGrammarParser.SkipAttrContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#skipAttr}.
	 * @param ctx the parse tree
	 */
	void exitSkipAttr(MainGrammarParser.SkipAttrContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#states}.
	 * @param ctx the parse tree
	 */
	void enterStates(MainGrammarParser.StatesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#states}.
	 * @param ctx the parse tree
	 */
	void exitStates(MainGrammarParser.StatesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#stateExpr}.
	 * @param ctx the parse tree
	 */
	void enterStateExpr(MainGrammarParser.StateExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#stateExpr}.
	 * @param ctx the parse tree
	 */
	void exitStateExpr(MainGrammarParser.StateExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#inheritState}.
	 * @param ctx the parse tree
	 */
	void enterInheritState(MainGrammarParser.InheritStateContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#inheritState}.
	 * @param ctx the parse tree
	 */
	void exitInheritState(MainGrammarParser.InheritStateContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#synthState}.
	 * @param ctx the parse tree
	 */
	void enterSynthState(MainGrammarParser.SynthStateContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#synthState}.
	 * @param ctx the parse tree
	 */
	void exitSynthState(MainGrammarParser.SynthStateContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#ruleExpr}.
	 * @param ctx the parse tree
	 */
	void enterRuleExpr(MainGrammarParser.RuleExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#ruleExpr}.
	 * @param ctx the parse tree
	 */
	void exitRuleExpr(MainGrammarParser.RuleExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#inheritRule}.
	 * @param ctx the parse tree
	 */
	void enterInheritRule(MainGrammarParser.InheritRuleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#inheritRule}.
	 * @param ctx the parse tree
	 */
	void exitInheritRule(MainGrammarParser.InheritRuleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MainGrammarParser#codeBlock}.
	 * @param ctx the parse tree
	 */
	void enterCodeBlock(MainGrammarParser.CodeBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MainGrammarParser#codeBlock}.
	 * @param ctx the parse tree
	 */
	void exitCodeBlock(MainGrammarParser.CodeBlockContext ctx);
}