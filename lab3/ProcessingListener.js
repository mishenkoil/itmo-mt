import JavaCodeListener from './gen/JavaCodeListener.js';

const FUNC_PROPS_COLOR = '#a12a42';
const TYPE_COLOR = '#419dd5';
const NAME_COLOR = '#57a22c';
const TAB  = '&nbsp;&nbsp;&nbsp;&nbsp;';

export default class ProcessingListener extends JavaCodeListener {
    parsedHtml = [];
    balance = 0;

    getHtml() {
        return this.parsedHtml.join('');
    }

    paint(str, color) {
        this.parsedHtml.push(`<b style="color:${color}">${str}</b>`);
    }

    space() {
        this.parsedHtml.push(' ');
    }

    nextLine() {
        this.parsedHtml.push(';<br>\n');
    }

    nextLineWithBrackets() {
        this.parsedHtml.push('<br>\n');
    }

    exitModif(ctx) {
        this.paint(ctx.getText(), FUNC_PROPS_COLOR);
        this.space();
    }

    exitFin(ctx) {
        this.paint(ctx.getText(), FUNC_PROPS_COLOR);
        this.space();
    }

    exitStat(ctx) {
        this.paint(ctx.getText(), FUNC_PROPS_COLOR);
        this.space();
    }

    exitType(ctx) {
        this.paint(ctx.getText(), TYPE_COLOR);
        this.space();
    }

    enterFunc(ctx) {
        this.paint(ctx.VAR().getText(), NAME_COLOR);
        this.parsedHtml.push('(');
    }

    exitFunc(ctx) {
        this.parsedHtml.push(')');
        this.space()
    }

    exitArg(ctx) {
        this.parsedHtml.push(ctx.VAR().getText());
    }

    enterNextarg(ctx) {
        this.parsedHtml.push(', ');
    }

    enterBody(ctx) {
        this.parsedHtml.push('{<br>\n');
        this.balance++;
    }

    exitBody(ctx) {
        this.parsedHtml.push('}');
        this.balance--;
    }

    enterReturnfunc(ctx) {
        this.paint(ctx.RET().getText(), FUNC_PROPS_COLOR);
        this.space()
    }

    exitReturnfunc(ctx) {
        if (ctx.VAR()) {
            this.parsedHtml.push(ctx.VAR().getText());
        }
        if (ctx.NUM()) {
            this.parsedHtml.push(ctx.NUM().getText());
        }
        this.nextLine();
    }

    enterVars(ctx) {
        this.parsedHtml.push(ctx.VAR().getText());
    }

    enterNextvar(ctx) {
        this.parsedHtml.push(', ');
    }

    exitStatement(ctx) {
        this.nextLine();
    }

    enterEq(ctx) {
        this.parsedHtml.push(' = ');
    }

    exitOperand(ctx) {
        if (ctx.VAR()) {
            this.parsedHtml.push(ctx.VAR().getText());
        }
        if (ctx.NUM()) {
            this.parsedHtml.push(ctx.NUM().getText());
        }
    }

    exitSign(ctx) {
        this.space();
        this.parsedHtml.push(ctx.getText());
        this.space()
    }

    enterExpr(ctx) {
        this.parsedHtml.push(ctx.VAR().getText());
    }

    enterSource(ctx) {
        this.parsedHtml.push(TAB.repeat(this.balance >= 0 ? this.balance : 0));
    }

    enterTr(ctx) {
        this.paint('try', FUNC_PROPS_COLOR);
        this.space();
        this.parsedHtml.push('{');
        this.nextLineWithBrackets();
        this.balance++;
    }

    exitTr(ctx) {
        this.balance--;
        this.parsedHtml.push(TAB.repeat(this.balance >= 0 ? this.balance : 0));
        this.parsedHtml.push('}');
    }

    enterCtcharg(ctx) {
        this.space()
        this.paint('catch', FUNC_PROPS_COLOR);
        this.parsedHtml.push('(');
    }

    exitCtcharg(ctx) {
        this.parsedHtml.push(')');
    }

    exitErrarg(ctx) {
        this.parsedHtml.push(ctx.VAR().getText());
    }

    enterCtchbody(ctx) {
        this.balance++;
        this.space();
        this.parsedHtml.push('{');
        this.nextLineWithBrackets();
    }

    exitCtchbody(ctx) {
        this.balance--;
        this.parsedHtml.push(TAB.repeat(this.balance >= 0 ? this.balance : 0));
        this.parsedHtml.push('}');
    }

    exitErrtype(ctx) {
        this.paint(ctx.getText(), TYPE_COLOR);
        this.space();
    }

    exitTrycatch(ctx) {
        this.nextLineWithBrackets();
    }
}