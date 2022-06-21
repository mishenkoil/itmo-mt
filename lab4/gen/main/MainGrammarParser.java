// Generated from C:/Projects/MT/src/main\MainGrammar.g4 by ANTLR 4.10.1
package main;

import main.generator.Grammar;
import main.generator.help.*;

import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MainGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.10.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, WS=20, NAME=21, REGEX=22, CODETEXT=23;
	public static final int
		RULE_start = 0, RULE_program = 1, RULE_header = 2, RULE_imports = 3, RULE_importExpr = 4, 
		RULE_importName = 5, RULE_tokens = 6, RULE_tokenExpr = 7, RULE_startState = 8, 
		RULE_skipAttr = 9, RULE_states = 10, RULE_stateExpr = 11, RULE_inheritState = 12, 
		RULE_synthState = 13, RULE_ruleExpr = 14, RULE_inheritRule = 15, RULE_codeBlock = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "program", "header", "imports", "importExpr", "importName", 
			"tokens", "tokenExpr", "startState", "skipAttr", "states", "stateExpr", 
			"inheritState", "synthState", "ruleExpr", "inheritRule", "codeBlock"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'grammar'", "';'", "'@Imports'", "'{'", "'}'", "'import'", "'.'", 
			"'@Tokens'", "':'", "'@FNode'", "'='", "'->'", "'skip'", "'@States'", 
			"'['", "']'", "'returns'", "'|'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "WS", "NAME", "REGEX", 
			"CODETEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MainGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MainGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class StartContext extends ParserRuleContext {
		public Grammar gram;
		public ProgramContext program() {
			return getRuleContext(ProgramContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MainGrammarParser.EOF, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterStart(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitStart(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitStart(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);

		    ((StartContext)_localctx).gram =  new Grammar();

		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			program(_localctx.gram);
			setState(35);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramContext extends ParserRuleContext {
		public Grammar gram;
		public HeaderContext header() {
			return getRuleContext(HeaderContext.class,0);
		}
		public ImportsContext imports() {
			return getRuleContext(ImportsContext.class,0);
		}
		public TokensContext tokens() {
			return getRuleContext(TokensContext.class,0);
		}
		public StartStateContext startState() {
			return getRuleContext(StartStateContext.class,0);
		}
		public StatesContext states() {
			return getRuleContext(StatesContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public ProgramContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitProgram(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitProgram(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProgramContext program(Grammar gram) throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState(), gram);
		enterRule(_localctx, 2, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			header(_localctx.gram);
			setState(38);
			imports(_localctx.gram);
			setState(39);
			tokens(_localctx.gram);
			setState(40);
			startState(_localctx.gram);
			setState(41);
			states(_localctx.gram);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HeaderContext extends ParserRuleContext {
		public Grammar gram;
		public Token NAME;
		public TerminalNode NAME() { return getToken(MainGrammarParser.NAME, 0); }
		public TerminalNode WS() { return getToken(MainGrammarParser.WS, 0); }
		public HeaderContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public HeaderContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_header; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterHeader(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitHeader(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitHeader(this);
			else return visitor.visitChildren(this);
		}
	}

	public final HeaderContext header(Grammar gram) throws RecognitionException {
		HeaderContext _localctx = new HeaderContext(_ctx, getState(), gram);
		enterRule(_localctx, 4, RULE_header);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(T__0);
			setState(44);
			((HeaderContext)_localctx).NAME = match(NAME);
			setState(45);
			match(T__1);
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(46);
				match(WS);
				}
			}


			    _localctx.gram.setName((((HeaderContext)_localctx).NAME!=null?((HeaderContext)_localctx).NAME.getText():null));

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportsContext extends ParserRuleContext {
		public Grammar gram;
		public List<ImportExprContext> importExpr() {
			return getRuleContexts(ImportExprContext.class);
		}
		public ImportExprContext importExpr(int i) {
			return getRuleContext(ImportExprContext.class,i);
		}
		public ImportsContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public ImportsContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_imports; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterImports(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitImports(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitImports(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportsContext imports(Grammar gram) throws RecognitionException {
		ImportsContext _localctx = new ImportsContext(_ctx, getState(), gram);
		enterRule(_localctx, 6, RULE_imports);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(T__2);
			setState(52);
			match(T__3);
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(53);
				importExpr(_localctx.gram);
				}
				}
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(59);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportExprContext extends ParserRuleContext {
		public Grammar gram;
		public ImportNameContext importName;
		public ImportNameContext importName() {
			return getRuleContext(ImportNameContext.class,0);
		}
		public ImportExprContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public ImportExprContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_importExpr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterImportExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitImportExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitImportExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportExprContext importExpr(Grammar gram) throws RecognitionException {
		ImportExprContext _localctx = new ImportExprContext(_ctx, getState(), gram);
		enterRule(_localctx, 8, RULE_importExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(61);
			match(T__5);
			setState(62);
			((ImportExprContext)_localctx).importName = importName();
			_localctx.gram.addImport(((ImportExprContext)_localctx).importName.name.toString());
			setState(64);
			match(T__1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportNameContext extends ParserRuleContext {
		public StringBuilder name;
		public Token n1;
		public Token n2;
		public List<TerminalNode> NAME() { return getTokens(MainGrammarParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(MainGrammarParser.NAME, i);
		}
		public ImportNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterImportName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitImportName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitImportName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportNameContext importName() throws RecognitionException {
		ImportNameContext _localctx = new ImportNameContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_importName);

		    ((ImportNameContext)_localctx).name =  new StringBuilder();

		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			((ImportNameContext)_localctx).n1 = match(NAME);
			_localctx.name.append((((ImportNameContext)_localctx).n1!=null?((ImportNameContext)_localctx).n1.getText():null));
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__6) {
				{
				{
				setState(68);
				match(T__6);
				setState(69);
				((ImportNameContext)_localctx).n2 = match(NAME);
				_localctx.name.append('.').append((((ImportNameContext)_localctx).n2!=null?((ImportNameContext)_localctx).n2.getText():null));
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TokensContext extends ParserRuleContext {
		public Grammar gram;
		public List<TokenExprContext> tokenExpr() {
			return getRuleContexts(TokenExprContext.class);
		}
		public TokenExprContext tokenExpr(int i) {
			return getRuleContext(TokenExprContext.class,i);
		}
		public TokensContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public TokensContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_tokens; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterTokens(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitTokens(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitTokens(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TokensContext tokens(Grammar gram) throws RecognitionException {
		TokensContext _localctx = new TokensContext(_ctx, getState(), gram);
		enterRule(_localctx, 12, RULE_tokens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(T__7);
			setState(77);
			match(T__3);
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(78);
				tokenExpr(_localctx.gram);
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(84);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TokenExprContext extends ParserRuleContext {
		public Grammar gram;
		public boolean skipTokens;
		public Token NAME;
		public Token REGEX;
		public TerminalNode NAME() { return getToken(MainGrammarParser.NAME, 0); }
		public TerminalNode REGEX() { return getToken(MainGrammarParser.REGEX, 0); }
		public SkipAttrContext skipAttr() {
			return getRuleContext(SkipAttrContext.class,0);
		}
		public TokenExprContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public TokenExprContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_tokenExpr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterTokenExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitTokenExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitTokenExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TokenExprContext tokenExpr(Grammar gram) throws RecognitionException {
		TokenExprContext _localctx = new TokenExprContext(_ctx, getState(), gram);
		enterRule(_localctx, 14, RULE_tokenExpr);

		    ((TokenExprContext)_localctx).skipTokens =  false;

		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			((TokenExprContext)_localctx).NAME = match(NAME);
			setState(87);
			match(T__8);
			setState(88);
			((TokenExprContext)_localctx).REGEX = match(REGEX);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__11) {
				{
				setState(89);
				skipAttr();
				((TokenExprContext)_localctx).skipTokens =  true;
				}
			}

			setState(94);
			match(T__1);

			    if (_localctx.skipTokens) {
			        _localctx.gram.addSkipToken((((TokenExprContext)_localctx).NAME!=null?((TokenExprContext)_localctx).NAME.getText():null), (((TokenExprContext)_localctx).REGEX!=null?((TokenExprContext)_localctx).REGEX.getText():null));
			    } else {
			        _localctx.gram.addToken((((TokenExprContext)_localctx).NAME!=null?((TokenExprContext)_localctx).NAME.getText():null), (((TokenExprContext)_localctx).REGEX!=null?((TokenExprContext)_localctx).REGEX.getText():null));
			    }

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StartStateContext extends ParserRuleContext {
		public Grammar gram;
		public Token NAME;
		public TerminalNode NAME() { return getToken(MainGrammarParser.NAME, 0); }
		public StartStateContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public StartStateContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_startState; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterStartState(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitStartState(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitStartState(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StartStateContext startState(Grammar gram) throws RecognitionException {
		StartStateContext _localctx = new StartStateContext(_ctx, getState(), gram);
		enterRule(_localctx, 16, RULE_startState);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__9);
			setState(98);
			match(T__10);
			setState(99);
			((StartStateContext)_localctx).NAME = match(NAME);
			setState(100);
			match(T__1);

			    _localctx.gram.setStartState((((StartStateContext)_localctx).NAME!=null?((StartStateContext)_localctx).NAME.getText():null));

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SkipAttrContext extends ParserRuleContext {
		public SkipAttrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skipAttr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterSkipAttr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitSkipAttr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitSkipAttr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SkipAttrContext skipAttr() throws RecognitionException {
		SkipAttrContext _localctx = new SkipAttrContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_skipAttr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(T__11);
			setState(104);
			match(T__12);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatesContext extends ParserRuleContext {
		public Grammar gram;
		public StateExprContext stateExpr;
		public List<StateExprContext> stateExpr() {
			return getRuleContexts(StateExprContext.class);
		}
		public StateExprContext stateExpr(int i) {
			return getRuleContext(StateExprContext.class,i);
		}
		public StatesContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public StatesContext(ParserRuleContext parent, int invokingState, Grammar gram) {
			super(parent, invokingState);
			this.gram = gram;
		}
		@Override public int getRuleIndex() { return RULE_states; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterStates(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitStates(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitStates(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatesContext states(Grammar gram) throws RecognitionException {
		StatesContext _localctx = new StatesContext(_ctx, getState(), gram);
		enterRule(_localctx, 20, RULE_states);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			match(T__13);
			setState(107);
			match(T__3);
			setState(111); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(108);
				((StatesContext)_localctx).stateExpr = stateExpr();
				_localctx.gram.addState(((StatesContext)_localctx).stateExpr.state);
				}
				}
				setState(113); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NAME );
			setState(115);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateExprContext extends ParserRuleContext {
		public State state;
		public Token NAME;
		public RuleExprContext r1;
		public RuleExprContext r2;
		public TerminalNode NAME() { return getToken(MainGrammarParser.NAME, 0); }
		public List<RuleExprContext> ruleExpr() {
			return getRuleContexts(RuleExprContext.class);
		}
		public RuleExprContext ruleExpr(int i) {
			return getRuleContext(RuleExprContext.class,i);
		}
		public InheritStateContext inheritState() {
			return getRuleContext(InheritStateContext.class,0);
		}
		public SynthStateContext synthState() {
			return getRuleContext(SynthStateContext.class,0);
		}
		public StateExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateExpr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterStateExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitStateExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitStateExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StateExprContext stateExpr() throws RecognitionException {
		StateExprContext _localctx = new StateExprContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_stateExpr);

		    ((StateExprContext)_localctx).state =  new State();

		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			((StateExprContext)_localctx).NAME = match(NAME);
			_localctx.state.setName((((StateExprContext)_localctx).NAME!=null?((StateExprContext)_localctx).NAME.getText():null));
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(119);
				match(T__14);
				setState(120);
				inheritState(_localctx.state);
				setState(121);
				match(T__15);
				}
			}

			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__16) {
				{
				setState(125);
				match(T__16);
				setState(126);
				match(T__14);
				setState(127);
				synthState(_localctx.state);
				setState(128);
				match(T__15);
				}
			}

			setState(132);
			match(T__8);
			setState(133);
			((StateExprContext)_localctx).r1 = ruleExpr();
			_localctx.state.addRule(((StateExprContext)_localctx).r1.r);
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__17) {
				{
				{
				setState(135);
				match(T__17);
				setState(136);
				((StateExprContext)_localctx).r2 = ruleExpr();
				_localctx.state.addRule(((StateExprContext)_localctx).r2.r);
				}
				}
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(144);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InheritStateContext extends ParserRuleContext {
		public State state;
		public Token type1;
		public Token name1;
		public Token type2;
		public Token name2;
		public List<TerminalNode> NAME() { return getTokens(MainGrammarParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(MainGrammarParser.NAME, i);
		}
		public InheritStateContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public InheritStateContext(ParserRuleContext parent, int invokingState, State state) {
			super(parent, invokingState);
			this.state = state;
		}
		@Override public int getRuleIndex() { return RULE_inheritState; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterInheritState(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitInheritState(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitInheritState(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InheritStateContext inheritState(State state) throws RecognitionException {
		InheritStateContext _localctx = new InheritStateContext(_ctx, getState(), state);
		enterRule(_localctx, 24, RULE_inheritState);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			((InheritStateContext)_localctx).type1 = match(NAME);
			setState(147);
			((InheritStateContext)_localctx).name1 = match(NAME);
			_localctx.state.addParameter((((InheritStateContext)_localctx).type1!=null?((InheritStateContext)_localctx).type1.getText():null), (((InheritStateContext)_localctx).name1!=null?((InheritStateContext)_localctx).name1.getText():null));
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(149);
				match(T__18);
				setState(150);
				((InheritStateContext)_localctx).type2 = match(NAME);
				setState(151);
				((InheritStateContext)_localctx).name2 = match(NAME);
				_localctx.state.addParameter((((InheritStateContext)_localctx).type2!=null?((InheritStateContext)_localctx).type2.getText():null), (((InheritStateContext)_localctx).name2!=null?((InheritStateContext)_localctx).name2.getText():null));
				}
				}
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SynthStateContext extends ParserRuleContext {
		public State state;
		public Token type1;
		public Token name1;
		public Token type2;
		public Token name2;
		public List<TerminalNode> NAME() { return getTokens(MainGrammarParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(MainGrammarParser.NAME, i);
		}
		public SynthStateContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public SynthStateContext(ParserRuleContext parent, int invokingState, State state) {
			super(parent, invokingState);
			this.state = state;
		}
		@Override public int getRuleIndex() { return RULE_synthState; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterSynthState(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitSynthState(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitSynthState(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SynthStateContext synthState(State state) throws RecognitionException {
		SynthStateContext _localctx = new SynthStateContext(_ctx, getState(), state);
		enterRule(_localctx, 26, RULE_synthState);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			((SynthStateContext)_localctx).type1 = match(NAME);
			setState(159);
			((SynthStateContext)_localctx).name1 = match(NAME);
			_localctx.state.addReturn((((SynthStateContext)_localctx).type1!=null?((SynthStateContext)_localctx).type1.getText():null), (((SynthStateContext)_localctx).name1!=null?((SynthStateContext)_localctx).name1.getText():null));
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(161);
				match(T__18);
				setState(162);
				((SynthStateContext)_localctx).type2 = match(NAME);
				setState(163);
				((SynthStateContext)_localctx).name2 = match(NAME);
				_localctx.state.addReturn((((SynthStateContext)_localctx).type2!=null?((SynthStateContext)_localctx).type2.getText():null), (((SynthStateContext)_localctx).name2!=null?((SynthStateContext)_localctx).name2.getText():null));
				}
				}
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RuleExprContext extends ParserRuleContext {
		public Rule r;
		public StringBuilder parameters;
		public StringBuilder code;
		public Token NAME;
		public List<TerminalNode> NAME() { return getTokens(MainGrammarParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(MainGrammarParser.NAME, i);
		}
		public List<InheritRuleContext> inheritRule() {
			return getRuleContexts(InheritRuleContext.class);
		}
		public InheritRuleContext inheritRule(int i) {
			return getRuleContext(InheritRuleContext.class,i);
		}
		public List<CodeBlockContext> codeBlock() {
			return getRuleContexts(CodeBlockContext.class);
		}
		public CodeBlockContext codeBlock(int i) {
			return getRuleContext(CodeBlockContext.class,i);
		}
		public RuleExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleExpr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterRuleExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitRuleExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitRuleExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RuleExprContext ruleExpr() throws RecognitionException {
		RuleExprContext _localctx = new RuleExprContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_ruleExpr);

		    ((RuleExprContext)_localctx).r =  new Rule();
		    ((RuleExprContext)_localctx).parameters =  new StringBuilder();
		    ((RuleExprContext)_localctx).code =  new StringBuilder();

		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(170);
				((RuleExprContext)_localctx).NAME = match(NAME);
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(171);
					inheritRule(_localctx.parameters);
					}
				}

				setState(175);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CODETEXT) {
					{
					setState(174);
					codeBlock(_localctx.code);
					}
				}

				_localctx.r.addItem((((RuleExprContext)_localctx).NAME!=null?((RuleExprContext)_localctx).NAME.getText():null), _localctx.parameters.toString(), _localctx.code.toString());
				    ((RuleExprContext)_localctx).parameters =  new StringBuilder();
				    ((RuleExprContext)_localctx).code =  new StringBuilder();
				}
				}
				setState(180); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NAME );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InheritRuleContext extends ParserRuleContext {
		public StringBuilder s;
		public Token n1;
		public Token n2;
		public List<TerminalNode> NAME() { return getTokens(MainGrammarParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(MainGrammarParser.NAME, i);
		}
		public InheritRuleContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public InheritRuleContext(ParserRuleContext parent, int invokingState, StringBuilder s) {
			super(parent, invokingState);
			this.s = s;
		}
		@Override public int getRuleIndex() { return RULE_inheritRule; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterInheritRule(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitInheritRule(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitInheritRule(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InheritRuleContext inheritRule(StringBuilder s) throws RecognitionException {
		InheritRuleContext _localctx = new InheritRuleContext(_ctx, getState(), s);
		enterRule(_localctx, 30, RULE_inheritRule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			match(T__14);
			setState(183);
			((InheritRuleContext)_localctx).n1 = match(NAME);
			_localctx.s.append((((InheritRuleContext)_localctx).n1!=null?((InheritRuleContext)_localctx).n1.getText():null));
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(185);
				match(T__18);
				setState(186);
				((InheritRuleContext)_localctx).n2 = match(NAME);
				_localctx.s.append(", ").append((((InheritRuleContext)_localctx).n2!=null?((InheritRuleContext)_localctx).n2.getText():null));
				}
				}
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(193);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CodeBlockContext extends ParserRuleContext {
		public StringBuilder s;
		public Token CODETEXT;
		public TerminalNode CODETEXT() { return getToken(MainGrammarParser.CODETEXT, 0); }
		public CodeBlockContext(ParserRuleContext parent, int invokingState) { super(parent, invokingState); }
		public CodeBlockContext(ParserRuleContext parent, int invokingState, StringBuilder s) {
			super(parent, invokingState);
			this.s = s;
		}
		@Override public int getRuleIndex() { return RULE_codeBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).enterCodeBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MainGrammarListener ) ((MainGrammarListener)listener).exitCodeBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MainGrammarVisitor ) return ((MainGrammarVisitor<? extends T>)visitor).visitCodeBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CodeBlockContext codeBlock(StringBuilder s) throws RecognitionException {
		CodeBlockContext _localctx = new CodeBlockContext(_ctx, getState(), s);
		enterRule(_localctx, 32, RULE_codeBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			((CodeBlockContext)_localctx).CODETEXT = match(CODETEXT);

			        _localctx.s.append((((CodeBlockContext)_localctx).CODETEXT!=null?((CodeBlockContext)_localctx).CODETEXT.getText():null));
			        _localctx.s.deleteCharAt(0);
			        _localctx.s.deleteCharAt(_localctx.s.length() - 1);
			    
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0017\u00c7\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00020\b\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u00037\b"+
		"\u0003\n\u0003\f\u0003:\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0005\u0005H\b\u0005\n\u0005\f\u0005K\t"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006P\b\u0006\n\u0006"+
		"\f\u0006S\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007]\b\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0004\np\b\n\u000b\n\f\nq\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b|\b\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u0083"+
		"\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0005\u000b\u008c\b\u000b\n\u000b\f\u000b\u008f\t\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0005\f\u009a\b\f\n\f\f\f\u009d\t\f\u0001\r\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00a6\b\r\n\r\f\r\u00a9\t\r\u0001"+
		"\u000e\u0001\u000e\u0003\u000e\u00ad\b\u000e\u0001\u000e\u0003\u000e\u00b0"+
		"\b\u000e\u0001\u000e\u0004\u000e\u00b3\b\u000e\u000b\u000e\f\u000e\u00b4"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0005\u000f\u00bd\b\u000f\n\u000f\f\u000f\u00c0\t\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0000\u0000\u0011"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u001e \u0000\u0000\u00c4\u0000\"\u0001\u0000\u0000\u0000\u0002"+
		"%\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000\u00063\u0001"+
		"\u0000\u0000\u0000\b=\u0001\u0000\u0000\u0000\nB\u0001\u0000\u0000\u0000"+
		"\fL\u0001\u0000\u0000\u0000\u000eV\u0001\u0000\u0000\u0000\u0010a\u0001"+
		"\u0000\u0000\u0000\u0012g\u0001\u0000\u0000\u0000\u0014j\u0001\u0000\u0000"+
		"\u0000\u0016u\u0001\u0000\u0000\u0000\u0018\u0092\u0001\u0000\u0000\u0000"+
		"\u001a\u009e\u0001\u0000\u0000\u0000\u001c\u00b2\u0001\u0000\u0000\u0000"+
		"\u001e\u00b6\u0001\u0000\u0000\u0000 \u00c3\u0001\u0000\u0000\u0000\""+
		"#\u0003\u0002\u0001\u0000#$\u0005\u0000\u0000\u0001$\u0001\u0001\u0000"+
		"\u0000\u0000%&\u0003\u0004\u0002\u0000&\'\u0003\u0006\u0003\u0000\'(\u0003"+
		"\f\u0006\u0000()\u0003\u0010\b\u0000)*\u0003\u0014\n\u0000*\u0003\u0001"+
		"\u0000\u0000\u0000+,\u0005\u0001\u0000\u0000,-\u0005\u0015\u0000\u0000"+
		"-/\u0005\u0002\u0000\u0000.0\u0005\u0014\u0000\u0000/.\u0001\u0000\u0000"+
		"\u0000/0\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u000012\u0006\u0002"+
		"\uffff\uffff\u00002\u0005\u0001\u0000\u0000\u000034\u0005\u0003\u0000"+
		"\u000048\u0005\u0004\u0000\u000057\u0003\b\u0004\u000065\u0001\u0000\u0000"+
		"\u00007:\u0001\u0000\u0000\u000086\u0001\u0000\u0000\u000089\u0001\u0000"+
		"\u0000\u00009;\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000;<\u0005"+
		"\u0005\u0000\u0000<\u0007\u0001\u0000\u0000\u0000=>\u0005\u0006\u0000"+
		"\u0000>?\u0003\n\u0005\u0000?@\u0006\u0004\uffff\uffff\u0000@A\u0005\u0002"+
		"\u0000\u0000A\t\u0001\u0000\u0000\u0000BC\u0005\u0015\u0000\u0000CI\u0006"+
		"\u0005\uffff\uffff\u0000DE\u0005\u0007\u0000\u0000EF\u0005\u0015\u0000"+
		"\u0000FH\u0006\u0005\uffff\uffff\u0000GD\u0001\u0000\u0000\u0000HK\u0001"+
		"\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000"+
		"J\u000b\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000LM\u0005\b\u0000"+
		"\u0000MQ\u0005\u0004\u0000\u0000NP\u0003\u000e\u0007\u0000ON\u0001\u0000"+
		"\u0000\u0000PS\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000QR\u0001"+
		"\u0000\u0000\u0000RT\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000"+
		"TU\u0005\u0005\u0000\u0000U\r\u0001\u0000\u0000\u0000VW\u0005\u0015\u0000"+
		"\u0000WX\u0005\t\u0000\u0000X\\\u0005\u0016\u0000\u0000YZ\u0003\u0012"+
		"\t\u0000Z[\u0006\u0007\uffff\uffff\u0000[]\u0001\u0000\u0000\u0000\\Y"+
		"\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000"+
		"\u0000^_\u0005\u0002\u0000\u0000_`\u0006\u0007\uffff\uffff\u0000`\u000f"+
		"\u0001\u0000\u0000\u0000ab\u0005\n\u0000\u0000bc\u0005\u000b\u0000\u0000"+
		"cd\u0005\u0015\u0000\u0000de\u0005\u0002\u0000\u0000ef\u0006\b\uffff\uffff"+
		"\u0000f\u0011\u0001\u0000\u0000\u0000gh\u0005\f\u0000\u0000hi\u0005\r"+
		"\u0000\u0000i\u0013\u0001\u0000\u0000\u0000jk\u0005\u000e\u0000\u0000"+
		"ko\u0005\u0004\u0000\u0000lm\u0003\u0016\u000b\u0000mn\u0006\n\uffff\uffff"+
		"\u0000np\u0001\u0000\u0000\u0000ol\u0001\u0000\u0000\u0000pq\u0001\u0000"+
		"\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000rs\u0001"+
		"\u0000\u0000\u0000st\u0005\u0005\u0000\u0000t\u0015\u0001\u0000\u0000"+
		"\u0000uv\u0005\u0015\u0000\u0000v{\u0006\u000b\uffff\uffff\u0000wx\u0005"+
		"\u000f\u0000\u0000xy\u0003\u0018\f\u0000yz\u0005\u0010\u0000\u0000z|\u0001"+
		"\u0000\u0000\u0000{w\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000"+
		"|\u0082\u0001\u0000\u0000\u0000}~\u0005\u0011\u0000\u0000~\u007f\u0005"+
		"\u000f\u0000\u0000\u007f\u0080\u0003\u001a\r\u0000\u0080\u0081\u0005\u0010"+
		"\u0000\u0000\u0081\u0083\u0001\u0000\u0000\u0000\u0082}\u0001\u0000\u0000"+
		"\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000"+
		"\u0000\u0084\u0085\u0005\t\u0000\u0000\u0085\u0086\u0003\u001c\u000e\u0000"+
		"\u0086\u008d\u0006\u000b\uffff\uffff\u0000\u0087\u0088\u0005\u0012\u0000"+
		"\u0000\u0088\u0089\u0003\u001c\u000e\u0000\u0089\u008a\u0006\u000b\uffff"+
		"\uffff\u0000\u008a\u008c\u0001\u0000\u0000\u0000\u008b\u0087\u0001\u0000"+
		"\u0000\u0000\u008c\u008f\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000"+
		"\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u0090\u0001\u0000"+
		"\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0091\u0005\u0002"+
		"\u0000\u0000\u0091\u0017\u0001\u0000\u0000\u0000\u0092\u0093\u0005\u0015"+
		"\u0000\u0000\u0093\u0094\u0005\u0015\u0000\u0000\u0094\u009b\u0006\f\uffff"+
		"\uffff\u0000\u0095\u0096\u0005\u0013\u0000\u0000\u0096\u0097\u0005\u0015"+
		"\u0000\u0000\u0097\u0098\u0005\u0015\u0000\u0000\u0098\u009a\u0006\f\uffff"+
		"\uffff\u0000\u0099\u0095\u0001\u0000\u0000\u0000\u009a\u009d\u0001\u0000"+
		"\u0000\u0000\u009b\u0099\u0001\u0000\u0000\u0000\u009b\u009c\u0001\u0000"+
		"\u0000\u0000\u009c\u0019\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000"+
		"\u0000\u0000\u009e\u009f\u0005\u0015\u0000\u0000\u009f\u00a0\u0005\u0015"+
		"\u0000\u0000\u00a0\u00a7\u0006\r\uffff\uffff\u0000\u00a1\u00a2\u0005\u0013"+
		"\u0000\u0000\u00a2\u00a3\u0005\u0015\u0000\u0000\u00a3\u00a4\u0005\u0015"+
		"\u0000\u0000\u00a4\u00a6\u0006\r\uffff\uffff\u0000\u00a5\u00a1\u0001\u0000"+
		"\u0000\u0000\u00a6\u00a9\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u001b\u0001\u0000"+
		"\u0000\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00aa\u00ac\u0005\u0015"+
		"\u0000\u0000\u00ab\u00ad\u0003\u001e\u000f\u0000\u00ac\u00ab\u0001\u0000"+
		"\u0000\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad\u00af\u0001\u0000"+
		"\u0000\u0000\u00ae\u00b0\u0003 \u0010\u0000\u00af\u00ae\u0001\u0000\u0000"+
		"\u0000\u00af\u00b0\u0001\u0000\u0000\u0000\u00b0\u00b1\u0001\u0000\u0000"+
		"\u0000\u00b1\u00b3\u0006\u000e\uffff\uffff\u0000\u00b2\u00aa\u0001\u0000"+
		"\u0000\u0000\u00b3\u00b4\u0001\u0000\u0000\u0000\u00b4\u00b2\u0001\u0000"+
		"\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000\u0000\u00b5\u001d\u0001\u0000"+
		"\u0000\u0000\u00b6\u00b7\u0005\u000f\u0000\u0000\u00b7\u00b8\u0005\u0015"+
		"\u0000\u0000\u00b8\u00be\u0006\u000f\uffff\uffff\u0000\u00b9\u00ba\u0005"+
		"\u0013\u0000\u0000\u00ba\u00bb\u0005\u0015\u0000\u0000\u00bb\u00bd\u0006"+
		"\u000f\uffff\uffff\u0000\u00bc\u00b9\u0001\u0000\u0000\u0000\u00bd\u00c0"+
		"\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00be\u00bf"+
		"\u0001\u0000\u0000\u0000\u00bf\u00c1\u0001\u0000\u0000\u0000\u00c0\u00be"+
		"\u0001\u0000\u0000\u0000\u00c1\u00c2\u0005\u0010\u0000\u0000\u00c2\u001f"+
		"\u0001\u0000\u0000\u0000\u00c3\u00c4\u0005\u0017\u0000\u0000\u00c4\u00c5"+
		"\u0006\u0010\uffff\uffff\u0000\u00c5!\u0001\u0000\u0000\u0000\u000f/8"+
		"IQ\\q{\u0082\u008d\u009b\u00a7\u00ac\u00af\u00b4\u00be";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}