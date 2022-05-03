import * as fs from "fs";
import {Parser} from './src/Parser'
import {Tree} from "./src/Tree";
import {Token} from "./src/Token";

let test = Parser.parse('signed long long int **fib(int a, int b, int **c);')

let dotGraph = '';
let dotVisualProperties = '';
let dotVisualPropertiesDict = new Map();

function getLabel(node: string) {
    const style = Object.values(Token).includes(node as Token) ? ' style="filled" fillcolor = "chartreuse" ' : ' ';
    return `[ label = "${node}"${style}]`;
}

function buildGraph(tree: Tree | null): void {
    if (!tree) return;
    if (!tree.children) return;

    for (let child of tree.children) {
        if (!child) continue;

        let nodeFrom = `"${tree.node} (id ${tree.id})"`;
        let nodeTo = `"${child.node} (id ${child.id})"`

        if (!dotVisualPropertiesDict.has(nodeFrom)) {
            let label = getLabel(tree.node);
            dotVisualPropertiesDict.set(nodeFrom, label);
            dotVisualProperties += nodeFrom + ' ' + label + '\n';
        }
        if (!dotVisualPropertiesDict.has(nodeTo)) {
            let label = getLabel(child.node);
            dotVisualPropertiesDict.set(nodeTo, label);
            dotVisualProperties += nodeTo + ' ' + label + '\n';
        }

        dotGraph += nodeFrom + ' -> ' + nodeTo + ';\n';
        buildGraph(child)
    }
}

buildGraph(test);

fs.writeFileSync('./dot-raw', 'digraph G {\n' + dotVisualProperties + dotGraph + '}\n');