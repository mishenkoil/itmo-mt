package main.generator;

import main.generator.help.*;

import java.util.*;

public class Grammar {
    public String grammarName;
    public String startState;
    public Map<String, TokensHolder> tokenHolders = new HashMap<>();
    public Map<String, State> states = new HashMap<>();
    public List<TokensHolder> tokens = new ArrayList<>();
    public List<TokensHolder> skipTokens = new ArrayList<>();
    public List<String> imports = new ArrayList<>();

    public void addImport(String s) {
        imports.add(s);
    }

    public void setName(String s) {
        grammarName = s;
    }

    public void setStartState(String s) {
        startState = s;
    }

    public void addToken(String tokenName, String pattern) {
        TokensHolder item = new TokensHolder(tokenName, pattern);
        tokens.add(item);
        if (tokenHolders.containsKey(tokenName)) {
            System.err.println("Token can be added only one time");
            System.exit(-1);
        }
        tokenHolders.put(tokenName, item);
    }

    public void addSkipToken(String tokenName, String pattern) {
        TokensHolder item = new TokensHolder(tokenName, pattern);
        skipTokens.add(item);
        if (tokenHolders.containsKey(tokenName)) {
            System.err.println("Token can be added only one time");
            System.exit(-1);
        }
        tokenHolders.put(tokenName, item);
    }

    public void addState(State s) {
        states.put(s.getName(), s);
    }

    public void constructFirst() {
        boolean changed = true;
        while (changed) {
            changed = false;
            for (State state : states.values()) {
                for (Rule rule : state.rules) {
                    for (String item : rule.items) {
                        if (item.equals("EPS")) {
                            if (state.addToFirst(item)) {
                                changed = true;
                            }
                        } else if (tokenHolders.containsKey(item)) {
                            if (state.addToFirst(item)) {
                                changed = true;
                            }
                            break;
                        } else if (states.containsKey(item)) {
                            State st = states.get(item);
                            for (String newItem : st.getFirst()) {
                                if (state.addToFirst(newItem)) {
                                    changed = true;
                                }
                            }
                            if (!st.hasEpsilon()) {
                                break;
                            }
                        } else {
                            System.err.println("Unknown state name in " + state.getName() + ".");
                            System.exit(-1);
                        }
                    }
                }
            }
        }
    }

    public void constructFollow() {
        State start = states.get(startState);
        start.addToFollow("_END");
        boolean changed = true;
        while (changed) {
            changed = false;
            for (State state : states.values()) {
                for (Rule rule : state.rules) {
                    Set<String> curFirst = new HashSet<>();
                    curFirst.add("_END");
                    for (int i = rule.items.size() - 1; i >= 0; i--) {
                        String item = rule.items.get(i);
                        if (item.equals("EPS")) {
                            curFirst.add("EPS");
                            continue;
                        }
                        if (tokenHolders.containsKey(item)) {
                            curFirst.clear();
                            curFirst.add(item);
                            continue;
                        }
                        if (states.containsKey(item)) {
                            State st = states.get(item);
                            for (String s : curFirst) {
                                if (!s.equals("EPS")) {
                                    if (st.addToFollow(s)) {
                                        changed = true;
                                    }
                                }
                            }
                            if (curFirst.contains("_END")) {
                                for (String s : state.getFollow()) {
                                    if (st.addToFollow(s)) {
                                        changed = true;
                                    }
                                }
                            }
                            if (!st.hasEpsilon()) {
                                curFirst.clear();
                            }
                            curFirst.addAll(st.getFirst());
                        } else {
                            System.err.println("Unknown state name " + item + " in " + state.getName() + ".");
                            System.exit(-1);
                        }
                    }
                }
            }
        }
    }

    public HashSet<String> firstForRule(Rule r) {
        HashSet<String> first = new HashSet<>();
        for (String item : r.items) {
            if (item.equals("EPS")) {
                first.add("EPS");
            } else if (tokenHolders.containsKey(item)) {
                first.add(item);
                break;
            } else if (states.containsKey(item)) {
                first.addAll(states.get(item).getFirst());
                if (!first.contains("EPS")) {
                    break;
                }
            }
        }
        return first;
    }
}
