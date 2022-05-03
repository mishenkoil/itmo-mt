import {Parser} from "../src/Parser";

test('Different types', () => {
    expect(() => Parser.parse('void fib();')).not.toThrow();
    expect(() => Parser.parse('signed long long int fib();')).not.toThrow();
    expect(() => Parser.parse('void fib(int a);')).not.toThrow();

    expect(() => Parser.parse('void fib(aboba a);')).toThrow();
    expect(() => Parser.parse('aboba fib();')).toThrow();
    expect(() => Parser.parse('int void fib();')).toThrow();
});

test('Different names', () => {
    expect(() => Parser.parse('int fib();')).not.toThrow();
    expect(() => Parser.parse('int _hihi_haha_12345();')).not.toThrow();

    expect(() => Parser.parse('int fib(int 666a);')).toThrow();
    expect(() => Parser.parse('int 12345fib();')).toThrow();
    expect(() => Parser.parse('int tic&tac();')).toThrow();
    expect(() => Parser.parse('int raz dva();')).toThrow();
});

test('Pointers', () => {
    expect(() => Parser.parse('int *fib();')).not.toThrow();
    expect(() => Parser.parse('int * fib();')).not.toThrow();
    expect(() => Parser.parse('int **********fib();')).not.toThrow();
    expect(() => Parser.parse('int * *  *   *fib();')).not.toThrow();
    
    expect(() => Parser.parse('int ******int****fib();')).toThrow();
});

test('Multiple arguments', () => {
    expect(() => Parser.parse('int fib(int a, long b, long long c);')).not.toThrow();
    expect(() => Parser.parse('int * fib(int ** a, long ** b, long long *** c);')).not.toThrow();
    expect(() => Parser.parse('int * fib();')).not.toThrow();
    expect(() => Parser.parse('int **********fib();')).not.toThrow();
    
    expect(() => Parser.parse('int ******int****fib();')).toThrow();
});
