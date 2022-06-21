package second;

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

public class SecondParser {
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

	public class Tree_P extends Tree {
		Tree_P() {
			super("P");
		}
	}

	public class Tree_Args extends Tree {
		Tree_Args() {
			super("Args");
		}
	}

	public class Tree_Type extends Tree {
		Tree_Type() {
			super("Type");
		}
	}

	public class Tree_D extends Tree {
		Tree_D() {
			super("D");
		}
	}

	public class Tree_F extends Tree {
		Tree_F() {
			super("F");
		}
	}

	public class Tree_Arg extends Tree {
		Tree_Arg() {
			super("Arg");
		}
	}

	private SecondLexer lex;

	public SecondParser(SecondLexer lex) throws Exception {
		this.lex = lex;
		buildTree();
	}

	private void buildTree() throws Exception {
		tree = _F();
		if (lex.getCurrentToken() != SecondToken._END) {
			throw new Exception("Cur token is " + lex.getCurrentToken().toString() + " but expected END.");
		}
	}

	public void showTree(int ind) throws IOException {
		tree.print(ind);
	}


	private void consume(SecondToken token) throws Exception{
		if (lex.getCurrentToken() != token) {
			throw new Exception("Expected another token.");
		}
	}

	private Tree_P _P() throws Exception {
		Tree_P res = new Tree_P();
		switch (lex.getCurrentToken()) {
			case _END :
			case NAME :
			{
				
				return res;
			}
			case POINTER :
			{
				consume(SecondToken.POINTER);
				res.addChild(new Tree("POINTER"));
				
				lex.getNextToken();
				Tree_P n0 = _P();
				res.addChild(n0);
				
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_Args _Args() throws Exception {
		Tree_Args res = new Tree_Args();
		switch (lex.getCurrentToken()) {
			case RPAREN :
			{
				
				return res;
			}
			case CHAR :
			case INT :
			{
				Tree_D n0 = _D();
				res.addChild(n0);
				
				Tree_Arg n1 = _Arg();
				res.addChild(n1);
				
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_Type _Type() throws Exception {
		Tree_Type res = new Tree_Type();
		switch (lex.getCurrentToken()) {
			case INT :
			{
				consume(SecondToken.INT);
				res.addChild(new Tree("INT"));
				
				lex.getNextToken();
				return res;
			}
			case CHAR :
			{
				consume(SecondToken.CHAR);
				res.addChild(new Tree("CHAR"));
				
				lex.getNextToken();
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_D _D() throws Exception {
		Tree_D res = new Tree_D();
		switch (lex.getCurrentToken()) {
			case CHAR :
			case INT :
			{
				Tree_Type n0 = _Type();
				res.addChild(n0);
				
				Tree_P n1 = _P();
				res.addChild(n1);
				
				consume(SecondToken.NAME);
				res.addChild(new Tree("NAME"));
				
				lex.getNextToken();
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_F _F() throws Exception {
		Tree_F res = new Tree_F();
		switch (lex.getCurrentToken()) {
			case CHAR :
			case INT :
			{
				Tree_D n0 = _D();
				res.addChild(n0);
				
				consume(SecondToken.LPAREN);
				res.addChild(new Tree("LPAREN"));
				
				lex.getNextToken();
				Tree_Args n1 = _Args();
				res.addChild(n1);
				
				consume(SecondToken.RPAREN);
				res.addChild(new Tree("RPAREN"));
				
				lex.getNextToken();
				consume(SecondToken.SEMICOLON);
				res.addChild(new Tree("SEMICOLON"));
				
				lex.getNextToken();
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

	private Tree_Arg _Arg() throws Exception {
		Tree_Arg res = new Tree_Arg();
		switch (lex.getCurrentToken()) {
			case _END :
			case RPAREN :
			{
				
				return res;
			}
			case COMMA :
			{
				consume(SecondToken.COMMA);
				res.addChild(new Tree("COMMA"));
				
				lex.getNextToken();
				Tree_D n0 = _D();
				res.addChild(n0);
				
				Tree_Arg n1 = _Arg();
				res.addChild(n1);
				
				return res;
			}
			default : 
				throw new Exception("Unexpected token.");
		}
	}

}
