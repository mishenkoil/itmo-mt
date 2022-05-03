export class Tree {
    node: string;
    id: string;
    children: Tree[] | null;

    constructor(node: string, children: Tree[] | null = null) {
        this.node = node;
        this.id = btoa(Math.random().toString()).slice(5, 10);
        this.children = children;
    }
}