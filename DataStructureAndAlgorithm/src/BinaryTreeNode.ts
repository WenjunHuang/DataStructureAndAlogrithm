export class BinaryTreeNode<T> {
    constructor(public data: T, public left?: BinaryTreeNode<T>, public right?: BinaryTreeNode<T>) { }

    insertLeft(newNode: T) {
        if (!this.left) this.left = new BinaryTreeNode(newNode);
        else {
            const temp = new BinaryTreeNode(newNode, this.left);
            this.left = temp;
        }
    }

    insertRight(newNode: T) {
        if (!this.right) this.right = new BinaryTreeNode(newNode);
        else {
            const temp = new BinaryTreeNode(newNode, null, this.right);
            this.right = temp;
        }
    }
}

export interface ITraverser {
    <T>(data: T): void;
}

declare global {
    interface Array<T> {
        enqueue(data: T): void;
        dequeue(): T;
    }
}

Array.prototype["enqueue"] = function(data:any):void {
    this.push(data);
}
Array.prototype["dequeue"] = function(): any {
    return this.splice(0, 1)[0];
}

/**
 * Tree preorder traversal using recursive
 * @param root
 * @param traverser
 */
export function PreorderTraversalRecursive<T>(root: BinaryTreeNode<T>, traverser: ITraverser): void {
    if (!root)
        return;
    traverser(root.data);
    PreorderTraversalRecursive(root.left, traverser);
    PreorderTraversalRecursive(root.right, traverser);
}


/**
 * Tree preorder traversal using iteration
 * @param root
 * @param traverser
 */
export function PreorderTraversalIterative<T>(root: BinaryTreeNode<T>,traverser: ITraverser ): void {
    if (!root)
        return;
    const stack = [];
    stack.push(root);

    while (stack.length > 0) {
        const top = stack.pop();
        traverser(top.data);
        if (top.right) stack.push(top.right);
        if (top.left) stack.push(top.left);
    }
}

export function InorderTraversalRecursive<T>(root: BinaryTreeNode<T>, traverser: ITraverser): void {
    if (!root)
        return;

    InorderTraversalRecursive(root.left, traverser);
    traverser(root.data);
    InorderTraversalRecursive(root.right, traverser);
}

export function InorderTraversalIterative<T>(root: BinaryTreeNode<T>, traverser: ITraverser): void {
    if (!root)
        return;

    const state = {
        location: 1,
        node: root
    };
    const stack:Array<typeof state> = [];
    stack.push(state);

    while (stack.length > 0) {
        const top = stack.pop();
        root = top.node;
        switch (top.location) {
            case 1:
                stack.push({ location: 2, node: root });
                if (root.left)
                    stack.push({ location: 1, node: root.left });
                break;
            case 2:
                traverser(root.data);
                if (root.right)
                    stack.push({ location: 1, node: root.right });
                break;
            default:
                throw new Error("Should not go here");
        }
    }
}

export function PostorderTraversalRecursive<T>(root: BinaryTreeNode<T>, traverser: ITraverser) {
    if (!root)
        return;

    PostorderTraversalRecursive(root.left, traverser);
    PostorderTraversalRecursive(root.right, traverser);
    traverser(root.data);
}

export function PostorderTraversalIterative<T>(root: BinaryTreeNode<T>, traverser: ITraverser) {
    const item = {
        location: 1,
        root: root
    };
    const stack:Array<typeof item> = [];
    stack.push(item);

    while (stack.length > 0) {
        const top = stack.pop();
        root = top.root;
        switch (top.location) {
            case 1:
                stack.push({ location: 2, root: root });
                if (root.right)
                    stack.push({ location: 1, root: root.right });
                if (root.left)
                    stack.push({ location: 1, root: root.left });
                break;
            case 2:
                traverser(root.data);
                break;
            default:
                throw new Error("should not go here");
        }
    }
}

export function LevelOrderTraversal<T>(root: BinaryTreeNode<T>, traverser: ITraverser) {
    if (!root)
        return;
    const queue:Array<BinaryTreeNode<T>>  = [];
    queue.enqueue(root);

    while (queue.length > 0) {
        const node = queue.dequeue(); 

        traverser(node.data);
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }
}


export function InsertUsingLevelOrder<T>(root: BinaryTreeNode<T>, data: T) {
    let newNode = new BinaryTreeNode(data);
    if (!root) {
        root = newNode;
        return root;
    }

    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        if (node.left)
            queue.enqueue(node.left);
        else {
            node.left = newNode;
            return root;
        }

        if (node.right)
            queue.enqueue(node.right);
        else {
            node.right = newNode;
            return root;
        }
    }

}

export function LevelOrderTraversalInReverse<T>(root: BinaryTreeNode<T>, traverser: ITraverser) {
    if (!root)
        return;

    let stack: Array<BinaryTreeNode<T>> = [];
    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);

    while (queue.length > 0) {
        let node = queue.dequeue();
        stack.push(node);

        if (node.right) queue.enqueue(node.right);
        if (node.left) queue.enqueue(node.left);
    }

    while (stack.length > 0) {
        let node = stack.pop();
        traverser(node.data);
    }
}