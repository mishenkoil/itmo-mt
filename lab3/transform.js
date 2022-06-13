import * as fs from "fs";
import FileStream from "antlr4/src/antlr4/FileStream.js";
import CommonTokenStream from "antlr4/src/antlr4/CommonTokenStream.js";
import JavaCodeParser from "./gen/JavaCodeParser.js";
import JavaCodeLexer from "./gen/JavaCodeLexer.js";
import ParseTreeWalker from "antlr4/src/antlr4/tree/ParseTreeWalker.js";
import ProcessingListener from "./ProcessingListener.js";

const chars = new FileStream('./code');
const lexer = new JavaCodeLexer(chars);
const tokens  = new CommonTokenStream(lexer);
const parser = new JavaCodeParser(tokens);
const tree = parser.start();

const walker = new ParseTreeWalker();
const loader = new ProcessingListener();
walker.walk(loader, tree);

fs.writeFileSync('./index.html', loader.getHtml());