// Generated from /Users/mishenkoil/WebstormProjects/test-antlr/JavaCode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaCodeListener from './JavaCodeListener.js';
import JavaCodeVisitor from './JavaCodeVisitor.js';

const serializedATN = [4,1,28,186,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,
1,1,2,1,2,3,2,60,8,2,1,2,1,2,3,2,64,8,2,1,2,1,2,3,2,68,8,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,78,8,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,
1,7,3,7,92,8,7,1,7,1,7,1,8,1,8,1,8,3,8,99,8,8,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,11,1,11,1,11,5,11,112,8,11,10,11,12,11,115,9,11,1,11,1,11,1,
12,1,12,3,12,121,8,12,1,13,1,13,1,13,3,13,126,8,13,1,13,1,13,1,13,3,13,131,
8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,141,8,14,1,15,1,15,1,15,
1,15,5,15,147,8,15,10,15,12,15,150,9,15,1,16,1,16,1,16,3,16,155,8,16,1,17,
1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,3,20,171,
8,20,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,182,8,22,1,23,1,23,
1,23,0,0,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,0,3,1,0,6,12,2,0,25,25,27,27,1,0,19,22,178,0,48,1,0,0,0,2,52,1,0,0,
0,4,59,1,0,0,0,6,77,1,0,0,0,8,79,1,0,0,0,10,82,1,0,0,0,12,85,1,0,0,0,14,
87,1,0,0,0,16,95,1,0,0,0,18,100,1,0,0,0,20,104,1,0,0,0,22,108,1,0,0,0,24,
120,1,0,0,0,26,122,1,0,0,0,28,140,1,0,0,0,30,142,1,0,0,0,32,151,1,0,0,0,
34,156,1,0,0,0,36,160,1,0,0,0,38,165,1,0,0,0,40,170,1,0,0,0,42,172,1,0,0,
0,44,181,1,0,0,0,46,183,1,0,0,0,48,49,3,2,1,0,49,50,3,22,11,0,50,51,5,0,
0,1,51,1,1,0,0,0,52,53,3,4,2,0,53,54,5,23,0,0,54,55,3,14,7,0,55,56,5,23,
0,0,56,3,1,0,0,0,57,60,3,6,3,0,58,60,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,
60,63,1,0,0,0,61,64,3,8,4,0,62,64,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,
67,1,0,0,0,65,68,3,10,5,0,66,68,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,69,
1,0,0,0,69,70,3,12,6,0,70,5,1,0,0,0,71,72,5,1,0,0,72,78,5,23,0,0,73,74,5,
2,0,0,74,78,5,23,0,0,75,76,5,3,0,0,76,78,5,23,0,0,77,71,1,0,0,0,77,73,1,
0,0,0,77,75,1,0,0,0,78,7,1,0,0,0,79,80,5,4,0,0,80,81,5,23,0,0,81,9,1,0,0,
0,82,83,5,5,0,0,83,84,5,23,0,0,84,11,1,0,0,0,85,86,7,0,0,0,86,13,1,0,0,0,
87,88,5,25,0,0,88,91,5,13,0,0,89,92,3,16,8,0,90,92,1,0,0,0,91,89,1,0,0,0,
91,90,1,0,0,0,92,93,1,0,0,0,93,94,5,14,0,0,94,15,1,0,0,0,95,98,3,18,9,0,
96,99,3,20,10,0,97,99,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,17,1,0,0,0,
100,101,3,12,6,0,101,102,5,23,0,0,102,103,5,25,0,0,103,19,1,0,0,0,104,105,
5,15,0,0,105,106,5,23,0,0,106,107,3,16,8,0,107,21,1,0,0,0,108,113,5,16,0,
0,109,110,5,28,0,0,110,112,3,24,12,0,111,109,1,0,0,0,112,115,1,0,0,0,113,
111,1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,117,5,17,
0,0,117,23,1,0,0,0,118,121,3,28,14,0,119,121,3,26,13,0,120,118,1,0,0,0,120,
119,1,0,0,0,121,25,1,0,0,0,122,125,5,24,0,0,123,126,5,23,0,0,124,126,1,0,
0,0,125,123,1,0,0,0,125,124,1,0,0,0,126,130,1,0,0,0,127,131,5,25,0,0,128,
131,5,27,0,0,129,131,1,0,0,0,130,127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,
0,0,131,132,1,0,0,0,132,133,5,26,0,0,133,27,1,0,0,0,134,135,3,30,15,0,135,
136,5,26,0,0,136,141,1,0,0,0,137,138,3,38,19,0,138,139,5,26,0,0,139,141,
1,0,0,0,140,134,1,0,0,0,140,137,1,0,0,0,141,29,1,0,0,0,142,143,3,12,6,0,
143,144,5,23,0,0,144,148,3,32,16,0,145,147,3,36,18,0,146,145,1,0,0,0,147,
150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,31,1,0,0,0,150,148,1,0,0,
0,151,154,5,25,0,0,152,155,3,34,17,0,153,155,1,0,0,0,154,152,1,0,0,0,154,
153,1,0,0,0,155,33,1,0,0,0,156,157,5,15,0,0,157,158,5,23,0,0,158,159,3,32,
16,0,159,35,1,0,0,0,160,161,5,23,0,0,161,162,5,18,0,0,162,163,5,23,0,0,163,
164,3,40,20,0,164,37,1,0,0,0,165,166,5,25,0,0,166,167,3,36,18,0,167,39,1,
0,0,0,168,171,3,42,21,0,169,171,3,44,22,0,170,168,1,0,0,0,170,169,1,0,0,
0,171,41,1,0,0,0,172,173,7,1,0,0,173,43,1,0,0,0,174,175,3,42,21,0,175,176,
5,23,0,0,176,177,3,46,23,0,177,178,5,23,0,0,178,179,3,44,22,0,179,182,1,
0,0,0,180,182,3,42,21,0,181,174,1,0,0,0,181,180,1,0,0,0,182,45,1,0,0,0,183,
184,7,2,0,0,184,47,1,0,0,0,15,59,63,67,77,91,98,113,120,125,130,140,148,
154,170,181];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JavaCodeParser extends antlr4.Parser {

    static grammarFileName = "JavaCode.g4";
    static literalNames = [ null, "'public'", "'private'", "'protected'", 
                            "'static'", "'final'", "'int'", "'double'", 
                            "'float'", "'char'", "'String'", "'boolean'", 
                            "'void'", "'('", "')'", "','", "'{\\n'", "'}'", 
                            "'='", "'+'", "'-'", "'/'", "'*'", "' '", "'return'", 
                            null, "';\\n'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "SPACE", 
                             "RET", "VAR", "SEMICOLON", "NUM", "TAB" ];
    static ruleNames = [ "start", "declaration", "props", "modif", "stat", 
                         "fin", "type", "func", "args", "arg", "nextarg", 
                         "body", "source", "returnfunc", "statement", "dec", 
                         "vars", "nextvar", "eq", "expr", "oper", "operand", 
                         "op", "sign" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaCodeParser.ruleNames;
        this.literalNames = JavaCodeParser.literalNames;
        this.symbolicNames = JavaCodeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavaCodeParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.declaration();
	        this.state = 49;
	        this.body();
	        this.state = 50;
	        this.match(JavaCodeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavaCodeParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.props();
	        this.state = 53;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 54;
	        this.func();
	        this.state = 55;
	        this.match(JavaCodeParser.SPACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	props() {
	    let localctx = new PropsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavaCodeParser.RULE_props);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__0:
	        case JavaCodeParser.T__1:
	        case JavaCodeParser.T__2:
	            this.state = 57;
	            this.modif();
	            break;
	        case JavaCodeParser.T__3:
	        case JavaCodeParser.T__4:
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__3:
	            this.state = 61;
	            this.stat();
	            break;
	        case JavaCodeParser.T__4:
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__4:
	            this.state = 65;
	            this.fin();
	            break;
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 69;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modif() {
	    let localctx = new ModifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavaCodeParser.RULE_modif);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(JavaCodeParser.T__0);
	            this.state = 72;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        case JavaCodeParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.match(JavaCodeParser.T__1);
	            this.state = 74;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        case JavaCodeParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.match(JavaCodeParser.T__2);
	            this.state = 76;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavaCodeParser.RULE_stat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(JavaCodeParser.T__3);
	        this.state = 80;
	        this.match(JavaCodeParser.SPACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fin() {
	    let localctx = new FinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavaCodeParser.RULE_fin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(JavaCodeParser.T__4);
	        this.state = 83;
	        this.match(JavaCodeParser.SPACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavaCodeParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavaCodeParser.T__5) | (1 << JavaCodeParser.T__6) | (1 << JavaCodeParser.T__7) | (1 << JavaCodeParser.T__8) | (1 << JavaCodeParser.T__9) | (1 << JavaCodeParser.T__10) | (1 << JavaCodeParser.T__11))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavaCodeParser.RULE_func);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(JavaCodeParser.VAR);
	        this.state = 88;
	        this.match(JavaCodeParser.T__12);
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	            this.state = 89;
	            this.args();
	            break;
	        case JavaCodeParser.T__13:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 93;
	        this.match(JavaCodeParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavaCodeParser.RULE_args);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.arg();
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__14:
	            this.state = 96;
	            this.nextarg();
	            break;
	        case JavaCodeParser.T__13:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JavaCodeParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.type();
	        this.state = 101;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 102;
	        this.match(JavaCodeParser.VAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nextarg() {
	    let localctx = new NextargContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JavaCodeParser.RULE_nextarg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(JavaCodeParser.T__14);
	        this.state = 105;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 106;
	        this.args();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JavaCodeParser.RULE_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(JavaCodeParser.T__15);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JavaCodeParser.TAB) {
	            this.state = 109;
	            this.match(JavaCodeParser.TAB);
	            this.state = 110;
	            this.source();
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 116;
	        this.match(JavaCodeParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	source() {
	    let localctx = new SourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JavaCodeParser.RULE_source);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	        case JavaCodeParser.VAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.statement();
	            break;
	        case JavaCodeParser.RET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.returnfunc();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnfunc() {
	    let localctx = new ReturnfuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JavaCodeParser.RULE_returnfunc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(JavaCodeParser.RET);
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.SPACE:
	            this.state = 123;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        case JavaCodeParser.VAR:
	        case JavaCodeParser.SEMICOLON:
	        case JavaCodeParser.NUM:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.VAR:
	            this.state = 127;
	            this.match(JavaCodeParser.VAR);
	            break;
	        case JavaCodeParser.NUM:
	            this.state = 128;
	            this.match(JavaCodeParser.NUM);
	            break;
	        case JavaCodeParser.SEMICOLON:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 132;
	        this.match(JavaCodeParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JavaCodeParser.RULE_statement);
	    try {
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.dec();
	            this.state = 135;
	            this.match(JavaCodeParser.SEMICOLON);
	            break;
	        case JavaCodeParser.VAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.expr();
	            this.state = 138;
	            this.match(JavaCodeParser.SEMICOLON);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dec() {
	    let localctx = new DecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JavaCodeParser.RULE_dec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.type();
	        this.state = 143;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 144;
	        this.vars();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JavaCodeParser.SPACE) {
	            this.state = 145;
	            this.eq();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vars() {
	    let localctx = new VarsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JavaCodeParser.RULE_vars);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(JavaCodeParser.VAR);
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__14:
	            this.state = 152;
	            this.nextvar();
	            break;
	        case JavaCodeParser.SPACE:
	        case JavaCodeParser.SEMICOLON:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nextvar() {
	    let localctx = new NextvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JavaCodeParser.RULE_nextvar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(JavaCodeParser.T__14);
	        this.state = 157;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 158;
	        this.vars();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eq() {
	    let localctx = new EqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JavaCodeParser.RULE_eq);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 161;
	        this.match(JavaCodeParser.T__17);
	        this.state = 162;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 163;
	        this.oper();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JavaCodeParser.RULE_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(JavaCodeParser.VAR);
	        this.state = 166;
	        this.eq();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oper() {
	    let localctx = new OperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, JavaCodeParser.RULE_oper);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.operand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.op();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, JavaCodeParser.RULE_operand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        _la = this._input.LA(1);
	        if(!(_la===JavaCodeParser.VAR || _la===JavaCodeParser.NUM)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, JavaCodeParser.RULE_op);
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.operand();
	            this.state = 175;
	            this.match(JavaCodeParser.SPACE);
	            this.state = 176;
	            this.sign();
	            this.state = 177;
	            this.match(JavaCodeParser.SPACE);
	            this.state = 178;
	            this.op();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.operand();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sign() {
	    let localctx = new SignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, JavaCodeParser.RULE_sign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavaCodeParser.T__18) | (1 << JavaCodeParser.T__19) | (1 << JavaCodeParser.T__20) | (1 << JavaCodeParser.T__21))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JavaCodeParser.EOF = antlr4.Token.EOF;
JavaCodeParser.T__0 = 1;
JavaCodeParser.T__1 = 2;
JavaCodeParser.T__2 = 3;
JavaCodeParser.T__3 = 4;
JavaCodeParser.T__4 = 5;
JavaCodeParser.T__5 = 6;
JavaCodeParser.T__6 = 7;
JavaCodeParser.T__7 = 8;
JavaCodeParser.T__8 = 9;
JavaCodeParser.T__9 = 10;
JavaCodeParser.T__10 = 11;
JavaCodeParser.T__11 = 12;
JavaCodeParser.T__12 = 13;
JavaCodeParser.T__13 = 14;
JavaCodeParser.T__14 = 15;
JavaCodeParser.T__15 = 16;
JavaCodeParser.T__16 = 17;
JavaCodeParser.T__17 = 18;
JavaCodeParser.T__18 = 19;
JavaCodeParser.T__19 = 20;
JavaCodeParser.T__20 = 21;
JavaCodeParser.T__21 = 22;
JavaCodeParser.SPACE = 23;
JavaCodeParser.RET = 24;
JavaCodeParser.VAR = 25;
JavaCodeParser.SEMICOLON = 26;
JavaCodeParser.NUM = 27;
JavaCodeParser.TAB = 28;

JavaCodeParser.RULE_start = 0;
JavaCodeParser.RULE_declaration = 1;
JavaCodeParser.RULE_props = 2;
JavaCodeParser.RULE_modif = 3;
JavaCodeParser.RULE_stat = 4;
JavaCodeParser.RULE_fin = 5;
JavaCodeParser.RULE_type = 6;
JavaCodeParser.RULE_func = 7;
JavaCodeParser.RULE_args = 8;
JavaCodeParser.RULE_arg = 9;
JavaCodeParser.RULE_nextarg = 10;
JavaCodeParser.RULE_body = 11;
JavaCodeParser.RULE_source = 12;
JavaCodeParser.RULE_returnfunc = 13;
JavaCodeParser.RULE_statement = 14;
JavaCodeParser.RULE_dec = 15;
JavaCodeParser.RULE_vars = 16;
JavaCodeParser.RULE_nextvar = 17;
JavaCodeParser.RULE_eq = 18;
JavaCodeParser.RULE_expr = 19;
JavaCodeParser.RULE_oper = 20;
JavaCodeParser.RULE_operand = 21;
JavaCodeParser.RULE_op = 22;
JavaCodeParser.RULE_sign = 23;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_start;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	EOF() {
	    return this.getToken(JavaCodeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_declaration;
    }

	props() {
	    return this.getTypedRuleContext(PropsContext,0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaCodeParser.SPACE);
	    } else {
	        return this.getToken(JavaCodeParser.SPACE, i);
	    }
	};


	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_props;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	modif() {
	    return this.getTypedRuleContext(ModifContext,0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	fin() {
	    return this.getTypedRuleContext(FinContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterProps(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitProps(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitProps(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_modif;
    }

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterModif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitModif(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitModif(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_stat;
    }

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_fin;
    }

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterFin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitFin(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitFin(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_type;
    }


	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_func;
    }

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitFunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitFunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_args;
    }

	arg() {
	    return this.getTypedRuleContext(ArgContext,0);
	};

	nextarg() {
	    return this.getTypedRuleContext(NextargContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_arg;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NextargContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_nextarg;
    }

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterNextarg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitNextarg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitNextarg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_body;
    }

	TAB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaCodeParser.TAB);
	    } else {
	        return this.getToken(JavaCodeParser.TAB, i);
	    }
	};


	source = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SourceContext);
	    } else {
	        return this.getTypedRuleContext(SourceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_source;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	returnfunc() {
	    return this.getTypedRuleContext(ReturnfuncContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterSource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitSource(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitSource(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnfuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_returnfunc;
    }

	RET() {
	    return this.getToken(JavaCodeParser.RET, 0);
	};

	SEMICOLON() {
	    return this.getToken(JavaCodeParser.SEMICOLON, 0);
	};

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	NUM() {
	    return this.getToken(JavaCodeParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterReturnfunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitReturnfunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitReturnfunc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_statement;
    }

	dec() {
	    return this.getTypedRuleContext(DecContext,0);
	};

	SEMICOLON() {
	    return this.getToken(JavaCodeParser.SEMICOLON, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_dec;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	eq = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqContext);
	    } else {
	        return this.getTypedRuleContext(EqContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterDec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitDec(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitDec(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_vars;
    }

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	nextvar() {
	    return this.getTypedRuleContext(NextvarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterVars(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitVars(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitVars(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NextvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_nextvar;
    }

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	vars() {
	    return this.getTypedRuleContext(VarsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterNextvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitNextvar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitNextvar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_eq;
    }

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaCodeParser.SPACE);
	    } else {
	        return this.getToken(JavaCodeParser.SPACE, i);
	    }
	};


	oper() {
	    return this.getTypedRuleContext(OperContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterEq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitEq(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitEq(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_expr;
    }

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	eq() {
	    return this.getTypedRuleContext(EqContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_oper;
    }

	operand() {
	    return this.getTypedRuleContext(OperandContext,0);
	};

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterOper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitOper(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitOper(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_operand;
    }

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	NUM() {
	    return this.getToken(JavaCodeParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitOperand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitOperand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_op;
    }

	operand() {
	    return this.getTypedRuleContext(OperandContext,0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaCodeParser.SPACE);
	    } else {
	        return this.getToken(JavaCodeParser.SPACE, i);
	    }
	};


	sign() {
	    return this.getTypedRuleContext(SignContext,0);
	};

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_sign;
    }


	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitSign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitSign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JavaCodeParser.StartContext = StartContext; 
JavaCodeParser.DeclarationContext = DeclarationContext; 
JavaCodeParser.PropsContext = PropsContext; 
JavaCodeParser.ModifContext = ModifContext; 
JavaCodeParser.StatContext = StatContext; 
JavaCodeParser.FinContext = FinContext; 
JavaCodeParser.TypeContext = TypeContext; 
JavaCodeParser.FuncContext = FuncContext; 
JavaCodeParser.ArgsContext = ArgsContext; 
JavaCodeParser.ArgContext = ArgContext; 
JavaCodeParser.NextargContext = NextargContext; 
JavaCodeParser.BodyContext = BodyContext; 
JavaCodeParser.SourceContext = SourceContext; 
JavaCodeParser.ReturnfuncContext = ReturnfuncContext; 
JavaCodeParser.StatementContext = StatementContext; 
JavaCodeParser.DecContext = DecContext; 
JavaCodeParser.VarsContext = VarsContext; 
JavaCodeParser.NextvarContext = NextvarContext; 
JavaCodeParser.EqContext = EqContext; 
JavaCodeParser.ExprContext = ExprContext; 
JavaCodeParser.OperContext = OperContext; 
JavaCodeParser.OperandContext = OperandContext; 
JavaCodeParser.OpContext = OpContext; 
JavaCodeParser.SignContext = SignContext; 
