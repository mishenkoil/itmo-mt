package calculator;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.lang.StringBuilder;

public class CalculatorParser {
	public Tree tree;
	public static class Tree {
		private String name;
		private List<Tree> children = new ArrayList<>();

		Tree(String s) {
			name = s;
		}

		public void addChild(Tree node) {
			children.add(node);
		}

		public String getName() {
			return name;
		}

		void print(int testNumber) throws IOException {
			final String outDir = System.getProperty("user.dir") + File.separator + "Visualise";
			Path outputFile = Paths.get(outDir + File.separator + "gram" + testNumber + ".gv");
			if (outputFile.getParent() != null) {
				try {
					Files.createDirectories(outputFile.getParent());
				} catch (IOException e) {
					System.out.println("Couldn't create output file path");
					return;
				}
			}
			try (BufferedWriter writer = Files.newBufferedWriter(outputFile, StandardCharsets.UTF_8)) {
				final String fileStart = "digraph HelloWorld {";
				final String fileEnd = "}";

				writer.write(fileStart);
				printTree(writer, 1, -1);
				writer.write(fileEnd);
			} catch (IOException e) {
				System.out.println("Unable to write to file: " + e.getMessage());
			}
		}

		private int printTree(BufferedWriter writer, int curID, int parentID) throws IOException, IOException {
			final String startTree = Integer.toString(curID) + "[label=\"" + name + "\"];";

			writer.write(startTree);
			if (parentID != -1){
				writer.write(Integer.toString(parentID) + " -> " + Integer.toString(curID) + ";");
			}
			int freeID = curID + 1;
			if (!children.isEmpty()) {
				for (Tree child : children) {
					freeID = child.printTree(writer, freeID, curID);
				}
			}
			return freeID;
		}
	}

	public class Tree_MinusOp extends Tree {
		Tree_MinusOp() {
			super("MinusOp");
		}
		public int value;
	}

	public class Tree_T extends Tree {
		Tree_T() {
			super("T");
		}
		public int value;
	}

	public class Tree_E extends Tree {
		Tree_E() {
			super("E");
		}
		public int value;
	}

	public class Tree_F extends Tree {
		Tree_F() {
			super("F");
		}
		public int value;
	}

	public class Tree_MulOp extends Tree {
		Tree_MulOp() {
			super("MulOp");
		}
		public int value;
	}

	public class Tree_G extends Tree {
		Tree_G() {
			super("G");
		}
		public int value;
	}

	public class Tree_PlusOp extends Tree {
		Tree_PlusOp() {
			super("PlusOp");
		}
		public int value;
	}

	public class Tree_H extends Tree {
		Tree_H() {
			super("H");
		}
		public int value;
	}

	public class Tree_DivOp extends Tree {
		Tree_DivOp() {
			super("DivOp");
		}
		public int value;
	}

	private CalculatorLexer lex;

	public CalculatorParser(CalculatorLexer lex) throws Exception {
		this.lex = lex;
		buildTree();
	}

	private void buildTree() throws Exception {
		tree = _E();
		if (lex.getCurrentToken() != CalculatorToken._END) {
			throw new Exception("Cur token is " + lex.getCurrentToken().toString() + " but expected END.");
		}
	}

	public void showTree(int ind) throws IOException {
		tree.print(ind);
	}

	public int getvalue() {
		return ((Tree_E)tree).value;
	}

	private void consume(CalculatorToken token) throws Exception{
		if (lex.getCurrentToken() != token) {
			throw new Exception("Expected another token.");
		}
	}

	private Tree_MinusOp _MinusOp(int a, int b) throws Exception {
		Tree_MinusOp res = new Tree_MinusOp();
		switch (lex.getCurrentToken()) {
			case _END :
			case RBRACKET :
			case PLUS :
			case MINUS :
			{
				res.value = a - b;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_T _T() throws Exception {
		Tree_T res = new Tree_T();
		switch (lex.getCurrentToken()) {
			case NUMBER :
			case LBRACKET :
			case MINUS :
			{
				Tree_F n0 = _F();
				res.addChild(n0);
				int u = n0.value;
				Tree_H n1 = _H(u);
				res.addChild(n1);
				res.value = n1.value;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_E _E() throws Exception {
		Tree_E res = new Tree_E();
		switch (lex.getCurrentToken()) {
			case NUMBER :
			case LBRACKET :
			case MINUS :
			{
				Tree_F n0 = _F();
				res.addChild(n0);
				int m = n0.value;
				Tree_H n1 = _H(m);
				res.addChild(n1);
				int u = n1.value;
				Tree_G n2 = _G(u);
				res.addChild(n2);
				res.value = n2.value;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_F _F() throws Exception {
		Tree_F res = new Tree_F();
		switch (lex.getCurrentToken()) {
			case NUMBER :
			{
				consume(CalculatorToken.NUMBER);
				res.addChild(new Tree("NUMBER"));
				res.value = Integer.parseInt(lex.getCurrentTokenString());
				lex.getNextToken();
				return res;
			}
			case MINUS :
			{
				consume(CalculatorToken.MINUS);
				res.addChild(new Tree("MINUS"));
				
				lex.getNextToken();
				Tree_F n0 = _F();
				res.addChild(n0);
				res.value = -(n0.value);
				return res;
			}
			case LBRACKET :
			{
				consume(CalculatorToken.LBRACKET);
				res.addChild(new Tree("LBRACKET"));
				
				lex.getNextToken();
				Tree_E n0 = _E();
				res.addChild(n0);
				res.value = n0.value;
				consume(CalculatorToken.RBRACKET);
				res.addChild(new Tree("RBRACKET"));
				
				lex.getNextToken();
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_MulOp _MulOp(int a, int b) throws Exception {
		Tree_MulOp res = new Tree_MulOp();
		switch (lex.getCurrentToken()) {
			case _END :
			case DIV :
			case MUL :
			case RBRACKET :
			case PLUS :
			case MINUS :
			{
				res.value = a * b;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_G _G(int a) throws Exception {
		Tree_G res = new Tree_G();
		switch (lex.getCurrentToken()) {
			case _END :
			case RBRACKET :
			{
				res.value = a;
				return res;
			}
			case PLUS :
			{
				consume(CalculatorToken.PLUS);
				res.addChild(new Tree("PLUS"));
				
				lex.getNextToken();
				Tree_T n0 = _T();
				res.addChild(n0);
				int u = n0.value;
				Tree_PlusOp n1 = _PlusOp(a, u);
				res.addChild(n1);
				int acc = n1.value;
				Tree_G n2 = _G(acc);
				res.addChild(n2);
				res.value = n2.value;
				return res;
			}
			case MINUS :
			{
				consume(CalculatorToken.MINUS);
				res.addChild(new Tree("MINUS"));
				
				lex.getNextToken();
				Tree_T n0 = _T();
				res.addChild(n0);
				int u = n0.value;
				Tree_MinusOp n1 = _MinusOp(a, u);
				res.addChild(n1);
				int acc = n1.value;
				Tree_G n2 = _G(acc);
				res.addChild(n2);
				res.value = n2.value;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_PlusOp _PlusOp(int a, int b) throws Exception {
		Tree_PlusOp res = new Tree_PlusOp();
		switch (lex.getCurrentToken()) {
			case _END :
			case RBRACKET :
			case PLUS :
			case MINUS :
			{
				res.value = a + b;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_H _H(int a) throws Exception {
		Tree_H res = new Tree_H();
		switch (lex.getCurrentToken()) {
			case _END :
			case RBRACKET :
			case PLUS :
			case MINUS :
			{
				res.value = a;
				return res;
			}
			case MUL :
			{
				consume(CalculatorToken.MUL);
				res.addChild(new Tree("MUL"));
				
				lex.getNextToken();
				Tree_F n0 = _F();
				res.addChild(n0);
				int u = n0.value;
				Tree_MulOp n1 = _MulOp(a, u);
				res.addChild(n1);
				int acc = n1.value;
				Tree_H n2 = _H(acc);
				res.addChild(n2);
				res.value = n2.value;
				return res;
			}
			case DIV :
			{
				consume(CalculatorToken.DIV);
				res.addChild(new Tree("DIV"));
				
				lex.getNextToken();
				Tree_F n0 = _F();
				res.addChild(n0);
				int u = n0.value;
				Tree_DivOp n1 = _DivOp(a, u);
				res.addChild(n1);
				int acc = n1.value;
				Tree_H n2 = _H(acc);
				res.addChild(n2);
				res.value = n2.value;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_DivOp _DivOp(int a, int b) throws Exception {
		Tree_DivOp res = new Tree_DivOp();
		switch (lex.getCurrentToken()) {
			case _END :
			case DIV :
			case MUL :
			case RBRACKET :
			case PLUS :
			case MINUS :
			{
				res.value = a / b;
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

}
