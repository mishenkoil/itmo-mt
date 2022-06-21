import {strict as assert} from 'assert';
import {LexicalAnalyzer} from "./LexicalAnalyzer";
import {Token} from "./Token";
import {Tree} from "./Tree";

export class Parser {
    private static lex: LexicalAnalyzer;

    static parse(input: string): Tree {
        this.lex = new LexicalAnalyzer(input);
        this.lex.goNextToken();
        return Parser.parseF();
    }

    private static parseF(): Tree {
        let D = Parser.parseD();

        assert.equal(this.lex.getCurToken(), Token.OPEN_BRACKET);
        this.lex.goNextToken();

        let args = this.parseArgs();

        assert.equal(this.lex.getCurToken(), Token.CLOSE_BRACKET);
        this.lex.goNextToken();

        assert.equal(this.lex.getCurToken(), Token.SEMICOLON);
        this.lex.goNextToken();

        assert.equal(this.lex.getCurToken(), Token.END);

        return new Tree(
            "F",
            [D, new Tree(Token.OPEN_BRACKET), args, new Tree(Token.CLOSE_BRACKET), new Tree(Token.SEMICOLON)]
        );
    }

    private static parseD(): Tree {
        assert.equal(this.lex.getCurToken(), Token.TYPE);
        this.lex.goNextToken();

        let pointers = Parser.parseP();

        assert.equal(this.lex.getCurToken(), Token.NAME);
        this.lex.goNextToken();

        return new Tree('D', [new Tree(Token.TYPE), pointers, new Tree(Token.NAME)]);
    }

    private static parseP(): Tree {
        if (this.lex.getCurToken() === Token.POINTER) {
            this.lex.goNextToken();
            return new Tree('P', [new Tree('*'), Parser.parseP()]);
        }
        return new Tree('P');
    }

    private static parseArgs(): Tree {
        switch (this.lex.getCurToken()) {
            case Token.TYPE:
                let d = Parser.parseD();
                if (this.lex.getCurToken() === Token.EQ) {
                    this.lex.goNextToken();

                    assert.equal(this.lex.getCurToken(), Token.VALUE);
                    this.lex.goNextToken();

                    return new Tree('args', [d, new Tree(Token.EQ), new Tree(Token.VALUE), Parser.parseArgval()]);
                }
                return new Tree('args', [d, Parser.parseArg()]);
            case Token.CLOSE_BRACKET:
                return new Tree('args');
            default:
                throw Error(`Unexpected token (${this.lex.getCurToken()}) in function arguments`);
        }
    }

    private static parseArg(): Tree {
        switch (this.lex.getCurToken()) {
            case Token.COMMA:
                this.lex.goNextToken();

                assert.equal(this.lex.getCurToken(), Token.TYPE);
                let d = Parser.parseD();

                if (this.lex.getCurToken() === Token.EQ) {
                    this.lex.goNextToken();

                    assert.equal(this.lex.getCurToken(), Token.VALUE);
                    this.lex.goNextToken();

                    return new Tree('arg', [
                        new Tree(Token.COMMA),
                        d,
                        new Tree(Token.EQ),
                        new Tree(Token.VALUE),
                        Parser.parseArgval()
                    ]);
                }
                return new Tree('arg', [new Tree(Token.COMMA), d, Parser.parseArg()]);
            case Token.CLOSE_BRACKET:
                return new Tree('arg');
            default:
                throw Error(`Unexpected token (${this.lex.getCurToken()}) in function argument`);
        }
    }

    private static parseArgval(): Tree {
        switch (this.lex.getCurToken()) {
            case Token.COMMA:
                this.lex.goNextToken();

                assert.equal(this.lex.getCurToken(), Token.TYPE);
                let d = Parser.parseD();

                assert.equal(this.lex.getCurToken(), Token.EQ);
                this.lex.goNextToken();

                assert.equal(this.lex.getCurToken(), Token.VALUE);
                this.lex.goNextToken();

                return new Tree('argval', [
                    new Tree(Token.COMMA),
                    d,
                    new Tree(Token.EQ),
                    new Tree(Token.VALUE),
                    Parser.parseArgval()
                ]);
            case Token.CLOSE_BRACKET:
                return new Tree('argval');
            default:
                throw Error(`Unexpected token (${this.lex.getCurToken()}) in function argument`);
        }
    }
}