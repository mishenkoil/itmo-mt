package second;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SecondLexer {
	private StringBuilder inputSB;
	private List<TokensHolder> tokenPatterns = new ArrayList<>();
	private List<TokensHolder> skipTokenPatterns = new ArrayList<>();
	private List<SecondToken> tokens = new ArrayList<>();
	private List<String> tokensToString = new ArrayList<>();
	private int currentPosition = 0;

	public SecondLexer(String input) throws Exception {
		inputSB = new StringBuilder(input);

		tokenPatterns.add(new TokensHolder(SecondToken.LPAREN,"\\("));
		tokenPatterns.add(new TokensHolder(SecondToken.RPAREN,"\\)"));
		tokenPatterns.add(new TokensHolder(SecondToken.POINTER,"\\*"));
		tokenPatterns.add(new TokensHolder(SecondToken.COMMA,","));
		tokenPatterns.add(new TokensHolder(SecondToken.SEMICOLON,";"));
		tokenPatterns.add(new TokensHolder(SecondToken.INT,"int"));
		tokenPatterns.add(new TokensHolder(SecondToken.CHAR,"char"));
		tokenPatterns.add(new TokensHolder(SecondToken.NAME,"[a-zA-Z_]+[a-zA-Z_0-9]*"));

		skipTokenPatterns.add(new TokensHolder(SecondToken.SPACE,"[ \n\r]+"));
		getTokens();
	}

	public SecondToken getCurrentToken() {
		return tokens.get(currentPosition);
 	}

	public String getCurrentTokenString() {
		return tokensToString.get(currentPosition);
	}

	public SecondToken getNextToken() {
		return tokens.get(++currentPosition);
	}

	private void getTokens() throws Exception {
		while (!(inputSB.length() == 0)) {
			SecondToken t = findFirstToken();
			if (t != null) {
				tokens.add(t);
			} else if (!findFirstSkipToken()) {
				throw new Exception("Not find matching with tokens.");
			}
		}
		tokens.add(SecondToken._END);
	}

	private boolean findFirstSkipToken() {
		for (TokensHolder item : skipTokenPatterns) {
			Matcher m = item.pattern.matcher(inputSB.toString());
			if (m.lookingAt()) {
				inputSB.delete(0, m.end());
				return true;
			}
		}
		return false;
	}

	private SecondToken findFirstToken() {
		for (TokensHolder item : tokenPatterns) {
			Matcher m = item.pattern.matcher(inputSB.toString());
			if (m.lookingAt()) {
				tokensToString.add(inputSB.substring(0, m.end()));
				inputSB.delete(0, m.end());
				return item.token;
			}
		}
		return null;
	}

	private static class TokensHolder {
		SecondToken token;
		Pattern pattern;
		TokensHolder(SecondToken token, String s) {
			this.token = token;
			pattern = Pattern.compile(s);
		}
	}
}
