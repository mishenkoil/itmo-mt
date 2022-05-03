import {Token} from "./Token";

// Валидные типы при чтении токенов
const types = {
    void: {type: 'void'},
    char: {type: 'char'},
    short: {
        type: 'short',
        int: {type: 'short int'},
    },
    int: {type: 'int'},
    long: {
        type: 'long',
        int: {type: 'long int',},
        long: {
            type: 'long long',
            int: {type: 'long long int'},
        },
        double: {type: 'long double',},
    },
    float: {type: 'float'},
    double: {type: 'double'},
    signed: {
        type: 'signed',
        char: {type: 'signed char'},
        short: {
            type: 'signed short',
            int: {type: 'signed short int'},
        },
        int: {type: 'signed int'},
        long: {
            type: 'signed long',
            int: {type: 'signed long int',},
            long: {
                type: 'signed long long',
                int: {type: 'signed long long int'},
            }
        },
    },
    unsigned: {
        type: 'unsigned',
        char: {type: 'unsigned char'},
        short: {
            type: 'unsigned short',
            int: {type: 'unsigned short int'},
        },
        int: {type: 'unsigned int'},
        long: {
            type: 'unsigned long',
            int: {type: 'unsigned long int',},
            long: {
                type: 'unsigned long long',
                int: {type: 'unsigned long long int'},
            }
        },
    },
}

export class LexicalAnalyzer {
    private input: string;
    private curPos: number;
    private curChar!: string;
    private curToken!: Token;
    private nextToken: Token | null = null;
    private curType: any = types;

    constructor(input: string) {
        this.input = input;
        this.curPos = -1;
        this.nextChar();
    }

    private nextChar() {
        this.curChar = this.input.charAt(++this.curPos);
    }

    private static isBlank(c: string) {
        return /\s/.test(c);
    }

    private static isWordChar(c: string, isFirst = false) {
        if (isFirst) {
            return /[a-zA-Z_]/.test(c);
        }
        return /[a-zA-Z_0-9]/.test(c);
    }

    private next() {
        return this.curPos < this.input.length;
    }

    getCurToken(): Token {
        return this.curToken;
    }

    goNextToken() {
        if (!this.next()) {
            this.curToken = Token.END;
            return;
        }

        if (this.nextToken) {
            this.curToken = this.nextToken;
            this.nextToken = null;

            return
        }

        while (this.next() && LexicalAnalyzer.isBlank(this.curChar)) {
            this.nextChar();
        }

        switch (this.curChar) {
            case '(':
                this.curToken = Token.OPEN_BRACKET;
                this.nextChar();
                break;
            case ')':
                this.curToken = Token.CLOSE_BRACKET;
                this.nextChar();
                break;
            case ';':
                this.curToken = Token.SEMICOLON;
                this.nextChar();
                break;
            case ',':
                this.curToken = Token.COMMA;
                this.nextChar();
                break;
            case '*':
                this.curToken = Token.POINTER;
                this.nextChar();
                break;
            default:
                // очень запутанно паршу токены TYPE и NAME,
                // идея следующая - пытаюсь парсить TYPE, если не получается, пробую спарсить как NAME,
                // если получается, сохраняю TYPE как текущий токен и в nextToken сохраняю токен NAME, если
                // следующий токен действительно NAME, иначе ничего не делаю
                while (true) {
                    let tmpWord = '';
                    while (this.next() && LexicalAnalyzer.isBlank(this.curChar)) {
                        this.nextChar();
                    }
                    if (this.next() && LexicalAnalyzer.isWordChar(this.curChar, true)) {
                        tmpWord += this.curChar;
                        this.nextChar();
                    } else if (this.next() && !'*(),;'.includes(this.curChar)) {
                        throw SyntaxError(`Illegal character "${this.curChar}" at ${this.curPos} position`);
                    }
                    while (this.next() && LexicalAnalyzer.isWordChar(this.curChar)) {
                        tmpWord += this.curChar;
                        this.nextChar();
                    }

                    if (this.curType[tmpWord as keyof typeof types] !== undefined) {
                        this.curType = this.curType[tmpWord]
                        continue;
                    }

                    if (tmpWord === '' && !'*(),;'.includes(this.curChar)) {
                        throw SyntaxError(`Incorrect syntax starting at ${this.curPos} position`);
                    }

                    this.curToken = this.curType?.type ? Token.TYPE : Token.NAME;
                    this.curType = types;
                    if (this.curToken === Token.TYPE && tmpWord !== '') {
                        this.nextToken = types[tmpWord as keyof typeof types] !== undefined ? Token.TYPE : Token.NAME;
                    }
                    break;
                }
                break;
        }
    }
}