// Generated from /Users/mishenkoil/WebstormProjects/mt-lab-3/JavaCode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaCodeListener from './JavaCodeListener.js';
import JavaCodeVisitor from './JavaCodeVisitor.js';

const serializedATN = [4,1,34,244,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
2,1,2,3,2,74,8,2,1,2,1,2,3,2,78,8,2,1,2,1,2,3,2,82,8,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,3,3,3,92,8,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,
3,7,106,8,7,1,7,1,7,1,8,1,8,1,8,3,8,113,8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,
10,1,10,1,11,1,11,1,11,5,11,126,8,11,10,11,12,11,129,9,11,1,11,1,11,1,12,
1,12,1,12,3,12,136,8,12,1,13,1,13,1,13,3,13,141,8,13,1,13,1,13,1,13,3,13,
146,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,156,8,14,1,15,1,15,
1,15,1,15,5,15,162,8,15,10,15,12,15,165,9,15,1,16,1,16,1,16,3,16,170,8,16,
1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,3,
20,186,8,20,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,5,23,
199,8,23,10,23,12,23,202,9,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,
25,1,25,1,25,1,25,1,26,1,26,1,26,5,26,219,8,26,10,26,12,26,222,9,26,1,26,
1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,3,29,240,8,29,1,30,1,30,1,30,0,0,31,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,0,4,1,0,6,12,2,0,31,
31,33,33,1,0,22,24,1,0,25,28,232,0,62,1,0,0,0,2,66,1,0,0,0,4,73,1,0,0,0,
6,91,1,0,0,0,8,93,1,0,0,0,10,96,1,0,0,0,12,99,1,0,0,0,14,101,1,0,0,0,16,
109,1,0,0,0,18,114,1,0,0,0,20,118,1,0,0,0,22,122,1,0,0,0,24,135,1,0,0,0,
26,137,1,0,0,0,28,155,1,0,0,0,30,157,1,0,0,0,32,166,1,0,0,0,34,171,1,0,0,
0,36,175,1,0,0,0,38,180,1,0,0,0,40,185,1,0,0,0,42,187,1,0,0,0,44,189,1,0,
0,0,46,193,1,0,0,0,48,206,1,0,0,0,50,210,1,0,0,0,52,215,1,0,0,0,54,226,1,
0,0,0,56,230,1,0,0,0,58,239,1,0,0,0,60,241,1,0,0,0,62,63,3,2,1,0,63,64,3,
22,11,0,64,65,5,0,0,1,65,1,1,0,0,0,66,67,3,4,2,0,67,68,5,29,0,0,68,69,3,
14,7,0,69,70,5,29,0,0,70,3,1,0,0,0,71,74,3,6,3,0,72,74,1,0,0,0,73,71,1,0,
0,0,73,72,1,0,0,0,74,77,1,0,0,0,75,78,3,8,4,0,76,78,1,0,0,0,77,75,1,0,0,
0,77,76,1,0,0,0,78,81,1,0,0,0,79,82,3,10,5,0,80,82,1,0,0,0,81,79,1,0,0,0,
81,80,1,0,0,0,82,83,1,0,0,0,83,84,3,12,6,0,84,5,1,0,0,0,85,86,5,1,0,0,86,
92,5,29,0,0,87,88,5,2,0,0,88,92,5,29,0,0,89,90,5,3,0,0,90,92,5,29,0,0,91,
85,1,0,0,0,91,87,1,0,0,0,91,89,1,0,0,0,92,7,1,0,0,0,93,94,5,4,0,0,94,95,
5,29,0,0,95,9,1,0,0,0,96,97,5,5,0,0,97,98,5,29,0,0,98,11,1,0,0,0,99,100,
7,0,0,0,100,13,1,0,0,0,101,102,5,31,0,0,102,105,5,13,0,0,103,106,3,16,8,
0,104,106,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,106,107,1,0,0,0,107,108,
5,14,0,0,108,15,1,0,0,0,109,112,3,18,9,0,110,113,3,20,10,0,111,113,1,0,0,
0,112,110,1,0,0,0,112,111,1,0,0,0,113,17,1,0,0,0,114,115,3,12,6,0,115,116,
5,29,0,0,116,117,5,31,0,0,117,19,1,0,0,0,118,119,5,15,0,0,119,120,5,29,0,
0,120,121,3,16,8,0,121,21,1,0,0,0,122,127,5,16,0,0,123,124,5,34,0,0,124,
126,3,24,12,0,125,123,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,
0,0,0,128,130,1,0,0,0,129,127,1,0,0,0,130,131,5,17,0,0,131,23,1,0,0,0,132,
136,3,28,14,0,133,136,3,26,13,0,134,136,3,44,22,0,135,132,1,0,0,0,135,133,
1,0,0,0,135,134,1,0,0,0,136,25,1,0,0,0,137,140,5,30,0,0,138,141,5,29,0,0,
139,141,1,0,0,0,140,138,1,0,0,0,140,139,1,0,0,0,141,145,1,0,0,0,142,146,
5,31,0,0,143,146,5,33,0,0,144,146,1,0,0,0,145,142,1,0,0,0,145,143,1,0,0,
0,145,144,1,0,0,0,146,147,1,0,0,0,147,148,5,32,0,0,148,27,1,0,0,0,149,150,
3,30,15,0,150,151,5,32,0,0,151,156,1,0,0,0,152,153,3,38,19,0,153,154,5,32,
0,0,154,156,1,0,0,0,155,149,1,0,0,0,155,152,1,0,0,0,156,29,1,0,0,0,157,158,
3,12,6,0,158,159,5,29,0,0,159,163,3,32,16,0,160,162,3,36,18,0,161,160,1,
0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,31,1,0,0,0,165,
163,1,0,0,0,166,169,5,31,0,0,167,170,3,34,17,0,168,170,1,0,0,0,169,167,1,
0,0,0,169,168,1,0,0,0,170,33,1,0,0,0,171,172,5,15,0,0,172,173,5,29,0,0,173,
174,3,32,16,0,174,35,1,0,0,0,175,176,5,29,0,0,176,177,5,18,0,0,177,178,5,
29,0,0,178,179,3,40,20,0,179,37,1,0,0,0,180,181,5,31,0,0,181,182,3,36,18,
0,182,39,1,0,0,0,183,186,3,42,21,0,184,186,3,58,29,0,185,183,1,0,0,0,185,
184,1,0,0,0,186,41,1,0,0,0,187,188,7,1,0,0,188,43,1,0,0,0,189,190,3,46,23,
0,190,191,5,29,0,0,191,192,3,48,24,0,192,45,1,0,0,0,193,194,5,19,0,0,194,
195,5,29,0,0,195,200,5,16,0,0,196,197,5,34,0,0,197,199,3,24,12,0,198,196,
1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,203,1,0,0,0,
202,200,1,0,0,0,203,204,5,34,0,0,204,205,5,17,0,0,205,47,1,0,0,0,206,207,
3,50,25,0,207,208,5,29,0,0,208,209,3,52,26,0,209,49,1,0,0,0,210,211,5,20,
0,0,211,212,5,13,0,0,212,213,3,54,27,0,213,214,5,14,0,0,214,51,1,0,0,0,215,
220,5,16,0,0,216,217,5,34,0,0,217,219,3,24,12,0,218,216,1,0,0,0,219,222,
1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,223,1,0,0,0,222,220,1,0,0,0,
223,224,5,34,0,0,224,225,5,21,0,0,225,53,1,0,0,0,226,227,3,56,28,0,227,228,
5,29,0,0,228,229,5,31,0,0,229,55,1,0,0,0,230,231,7,2,0,0,231,57,1,0,0,0,
232,233,3,42,21,0,233,234,5,29,0,0,234,235,3,60,30,0,235,236,5,29,0,0,236,
237,3,58,29,0,237,240,1,0,0,0,238,240,3,42,21,0,239,232,1,0,0,0,239,238,
1,0,0,0,240,59,1,0,0,0,241,242,7,3,0,0,242,61,1,0,0,0,17,73,77,81,91,105,
112,127,135,140,145,155,163,169,185,200,220,239];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JavaCodeParser extends antlr4.Parser {

    static grammarFileName = "JavaCode.g4";
    static literalNames = [ null, "'public'", "'private'", "'protected'", 
                            "'static'", "'final'", "'int'", "'double'", 
                            "'float'", "'char'", "'String'", "'boolean'", 
                            "'void'", "'('", "')'", "','", "'{\\n'", "'}'", 
                            "'='", "'try'", "'catch'", "'}\\n'", "'IOException'", 
                            "'NullPointerException'", "'ArithmeticException'", 
                            "'+'", "'-'", "'/'", "'*'", "' '", "'return'", 
                            null, "';\\n'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "SPACE", "RET", 
                             "VAR", "SEMICOLON", "NUM", "TAB" ];
    static ruleNames = [ "start", "declaration", "props", "modif", "stat", 
                         "fin", "type", "func", "args", "arg", "nextarg", 
                         "body", "source", "returnfunc", "statement", "dec", 
                         "vars", "nextvar", "eq", "expr", "oper", "operand", 
                         "trycatch", "tr", "ctch", "ctcharg", "ctchbody", 
                         "errarg", "errtype", "op", "sign" ];

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
	        this.state = 62;
	        this.declaration();
	        this.state = 63;
	        this.body();
	        this.state = 64;
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
	        this.state = 66;
	        this.props();
	        this.state = 67;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 68;
	        this.func();
	        this.state = 69;
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__0:
	        case JavaCodeParser.T__1:
	        case JavaCodeParser.T__2:
	            this.state = 71;
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
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__3:
	            this.state = 75;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__4:
	            this.state = 79;
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
	        this.state = 83;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.match(JavaCodeParser.T__0);
	            this.state = 86;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        case JavaCodeParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(JavaCodeParser.T__1);
	            this.state = 88;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        case JavaCodeParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.match(JavaCodeParser.T__2);
	            this.state = 90;
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
	        this.state = 93;
	        this.match(JavaCodeParser.T__3);
	        this.state = 94;
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
	        this.state = 96;
	        this.match(JavaCodeParser.T__4);
	        this.state = 97;
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
	        this.state = 99;
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
	        this.state = 101;
	        this.match(JavaCodeParser.VAR);
	        this.state = 102;
	        this.match(JavaCodeParser.T__12);
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__5:
	        case JavaCodeParser.T__6:
	        case JavaCodeParser.T__7:
	        case JavaCodeParser.T__8:
	        case JavaCodeParser.T__9:
	        case JavaCodeParser.T__10:
	        case JavaCodeParser.T__11:
	            this.state = 103;
	            this.args();
	            break;
	        case JavaCodeParser.T__13:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 107;
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
	        this.state = 109;
	        this.arg();
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__14:
	            this.state = 110;
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
	        this.state = 114;
	        this.type();
	        this.state = 115;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 116;
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
	        this.state = 118;
	        this.match(JavaCodeParser.T__14);
	        this.state = 119;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 120;
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
	        this.state = 122;
	        this.match(JavaCodeParser.T__15);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JavaCodeParser.TAB) {
	            this.state = 123;
	            this.match(JavaCodeParser.TAB);
	            this.state = 124;
	            this.source();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
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
	        this.state = 135;
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
	            this.state = 132;
	            this.statement();
	            break;
	        case JavaCodeParser.RET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.returnfunc();
	            break;
	        case JavaCodeParser.T__18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 134;
	            this.trycatch();
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
	        this.state = 137;
	        this.match(JavaCodeParser.RET);
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.SPACE:
	            this.state = 138;
	            this.match(JavaCodeParser.SPACE);
	            break;
	        case JavaCodeParser.VAR:
	        case JavaCodeParser.SEMICOLON:
	        case JavaCodeParser.NUM:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 145;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.VAR:
	            this.state = 142;
	            this.match(JavaCodeParser.VAR);
	            break;
	        case JavaCodeParser.NUM:
	            this.state = 143;
	            this.match(JavaCodeParser.NUM);
	            break;
	        case JavaCodeParser.SEMICOLON:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 147;
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
	        this.state = 155;
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
	            this.state = 149;
	            this.dec();
	            this.state = 150;
	            this.match(JavaCodeParser.SEMICOLON);
	            break;
	        case JavaCodeParser.VAR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.expr();
	            this.state = 153;
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
	        this.state = 157;
	        this.type();
	        this.state = 158;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 159;
	        this.vars();
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JavaCodeParser.SPACE) {
	            this.state = 160;
	            this.eq();
	            this.state = 165;
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
	        this.state = 166;
	        this.match(JavaCodeParser.VAR);
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JavaCodeParser.T__14:
	            this.state = 167;
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
	        this.state = 171;
	        this.match(JavaCodeParser.T__14);
	        this.state = 172;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 173;
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
	        this.state = 175;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 176;
	        this.match(JavaCodeParser.T__17);
	        this.state = 177;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 178;
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
	        this.state = 180;
	        this.match(JavaCodeParser.VAR);
	        this.state = 181;
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
	        this.state = 185;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.operand();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
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
	        this.state = 187;
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



	trycatch() {
	    let localctx = new TrycatchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, JavaCodeParser.RULE_trycatch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.tr();
	        this.state = 190;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 191;
	        this.ctch();
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



	tr() {
	    let localctx = new TrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, JavaCodeParser.RULE_tr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(JavaCodeParser.T__18);
	        this.state = 194;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 195;
	        this.match(JavaCodeParser.T__15);
	        this.state = 200;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 196;
	                this.match(JavaCodeParser.TAB);
	                this.state = 197;
	                this.source(); 
	            }
	            this.state = 202;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 203;
	        this.match(JavaCodeParser.TAB);
	        this.state = 204;
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



	ctch() {
	    let localctx = new CtchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, JavaCodeParser.RULE_ctch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.ctcharg();
	        this.state = 207;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 208;
	        this.ctchbody();
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



	ctcharg() {
	    let localctx = new CtchargContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, JavaCodeParser.RULE_ctcharg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(JavaCodeParser.T__19);
	        this.state = 211;
	        this.match(JavaCodeParser.T__12);
	        this.state = 212;
	        this.errarg();
	        this.state = 213;
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



	ctchbody() {
	    let localctx = new CtchbodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, JavaCodeParser.RULE_ctchbody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(JavaCodeParser.T__15);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 216;
	                this.match(JavaCodeParser.TAB);
	                this.state = 217;
	                this.source(); 
	            }
	            this.state = 222;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 223;
	        this.match(JavaCodeParser.TAB);
	        this.state = 224;
	        this.match(JavaCodeParser.T__20);
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



	errarg() {
	    let localctx = new ErrargContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, JavaCodeParser.RULE_errarg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.errtype();
	        this.state = 227;
	        this.match(JavaCodeParser.SPACE);
	        this.state = 228;
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



	errtype() {
	    let localctx = new ErrtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, JavaCodeParser.RULE_errtype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavaCodeParser.T__21) | (1 << JavaCodeParser.T__22) | (1 << JavaCodeParser.T__23))) !== 0))) {
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
	    this.enterRule(localctx, 58, JavaCodeParser.RULE_op);
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.operand();
	            this.state = 233;
	            this.match(JavaCodeParser.SPACE);
	            this.state = 234;
	            this.sign();
	            this.state = 235;
	            this.match(JavaCodeParser.SPACE);
	            this.state = 236;
	            this.op();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 238;
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
	    this.enterRule(localctx, 60, JavaCodeParser.RULE_sign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JavaCodeParser.T__24) | (1 << JavaCodeParser.T__25) | (1 << JavaCodeParser.T__26) | (1 << JavaCodeParser.T__27))) !== 0))) {
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
JavaCodeParser.T__22 = 23;
JavaCodeParser.T__23 = 24;
JavaCodeParser.T__24 = 25;
JavaCodeParser.T__25 = 26;
JavaCodeParser.T__26 = 27;
JavaCodeParser.T__27 = 28;
JavaCodeParser.SPACE = 29;
JavaCodeParser.RET = 30;
JavaCodeParser.VAR = 31;
JavaCodeParser.SEMICOLON = 32;
JavaCodeParser.NUM = 33;
JavaCodeParser.TAB = 34;

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
JavaCodeParser.RULE_trycatch = 22;
JavaCodeParser.RULE_tr = 23;
JavaCodeParser.RULE_ctch = 24;
JavaCodeParser.RULE_ctcharg = 25;
JavaCodeParser.RULE_ctchbody = 26;
JavaCodeParser.RULE_errarg = 27;
JavaCodeParser.RULE_errtype = 28;
JavaCodeParser.RULE_op = 29;
JavaCodeParser.RULE_sign = 30;

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

	trycatch() {
	    return this.getTypedRuleContext(TrycatchContext,0);
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



class TrycatchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_trycatch;
    }

	tr() {
	    return this.getTypedRuleContext(TrContext,0);
	};

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	ctch() {
	    return this.getTypedRuleContext(CtchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterTrycatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitTrycatch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitTrycatch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_tr;
    }

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

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
	        listener.enterTr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitTr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitTr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CtchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_ctch;
    }

	ctcharg() {
	    return this.getTypedRuleContext(CtchargContext,0);
	};

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	ctchbody() {
	    return this.getTypedRuleContext(CtchbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterCtch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitCtch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitCtch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CtchargContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_ctcharg;
    }

	errarg() {
	    return this.getTypedRuleContext(ErrargContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterCtcharg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitCtcharg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitCtcharg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CtchbodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_ctchbody;
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
	        listener.enterCtchbody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitCtchbody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitCtchbody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ErrargContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_errarg;
    }

	errtype() {
	    return this.getTypedRuleContext(ErrtypeContext,0);
	};

	SPACE() {
	    return this.getToken(JavaCodeParser.SPACE, 0);
	};

	VAR() {
	    return this.getToken(JavaCodeParser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterErrarg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitErrarg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitErrarg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ErrtypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaCodeParser.RULE_errtype;
    }


	enterRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.enterErrtype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaCodeListener ) {
	        listener.exitErrtype(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JavaCodeVisitor ) {
	        return visitor.visitErrtype(this);
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
JavaCodeParser.TrycatchContext = TrycatchContext; 
JavaCodeParser.TrContext = TrContext; 
JavaCodeParser.CtchContext = CtchContext; 
JavaCodeParser.CtchargContext = CtchargContext; 
JavaCodeParser.CtchbodyContext = CtchbodyContext; 
JavaCodeParser.ErrargContext = ErrargContext; 
JavaCodeParser.ErrtypeContext = ErrtypeContext; 
JavaCodeParser.OpContext = OpContext; 
JavaCodeParser.SignContext = SignContext; 
