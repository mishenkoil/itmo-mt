grammar JavaCode;
start: declaration body EOF;

declaration: props SPACE func SPACE;

props: (modif|) (stat|) (fin|) type;
modif: ('public' SPACE) | ('private' SPACE) | ('protected' SPACE);
stat: 'static' SPACE;
fin: 'final' SPACE;
SPACE: ' ';
type: 'int' | 'double' | 'float' | 'char' | 'String' | 'boolean' | 'void';

func: VAR '(' (args|) ')';
args: arg (nextarg|);
arg: type SPACE VAR;
nextarg: ',' SPACE args ;

body: '{\n' (TAB source)* '}';

source: statement | returnfunc | trycatch;
returnfunc: RET (SPACE|) (VAR|NUM|) SEMICOLON;
RET: 'return';
VAR: [a-zA-Z_][a-zA-Z_0-9]*;
SEMICOLON: ';\n';

statement: dec SEMICOLON | expr SEMICOLON;
dec: type SPACE vars (eq)*;
vars: VAR (nextvar|);
nextvar: ',' SPACE vars ;

eq: SPACE '=' SPACE oper;

expr: VAR eq;
oper: operand | op;
operand : VAR | NUM;
NUM: [0-9]+;

trycatch: tr SPACE ctch;
tr: 'try' SPACE '{\n' (TAB source)* TAB '}';
ctch: ctcharg SPACE ctchbody;
ctcharg: 'catch' '(' errarg ')';
ctchbody: '{\n' (TAB source)* TAB '}\n';
errarg: errtype SPACE VAR;
errtype: 'IOException' | 'NullPointerException' | 'ArithmeticException';

op: (operand SPACE sign SPACE op) | operand;
sign: '+' | '-' | '/' | '*';
TAB: '    '+;




