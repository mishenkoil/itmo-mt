export class Tree {
    node: string;
    id: string;
    children: Tree[] | null;

    constructor(node: string, children: Tree[] | null = null) {
        this.node = node;
        this.id = (Math.random() + 1).toString(36).substring(7);
        this.children = children;
    }
}