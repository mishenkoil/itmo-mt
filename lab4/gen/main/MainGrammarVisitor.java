// Generated from C:/Projects/MT/src/main\MainGrammar.g4 by ANTLR 4.10.1
package main;

import main.generator.Grammar;
import main.generator.help.*;

import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link MainGrammarParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface MainGrammarVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#start}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStart(MainGrammarParser.StartContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(MainGrammarParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#header}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitHeader(MainGrammarParser.HeaderContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#imports}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImports(MainGrammarParser.ImportsContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#importExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportExpr(MainGrammarParser.ImportExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#importName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportName(MainGrammarParser.ImportNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#tokens}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTokens(MainGrammarParser.TokensContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#tokenExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTokenExpr(MainGrammarParser.TokenExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#startState}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStartState(MainGrammarParser.StartStateContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#skipAttr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSkipAttr(MainGrammarParser.SkipAttrContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#states}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStates(MainGrammarParser.StatesContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#stateExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStateExpr(MainGrammarParser.StateExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#inheritState}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInheritState(MainGrammarParser.InheritStateContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#synthState}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSynthState(MainGrammarParser.SynthStateContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#ruleExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRuleExpr(MainGrammarParser.RuleExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#inheritRule}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInheritRule(MainGrammarParser.InheritRuleContext ctx);
	/**
	 * Visit a parse tree produced by {@link MainGrammarParser#codeBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCodeBlock(MainGrammarParser.CodeBlockContext ctx);
}