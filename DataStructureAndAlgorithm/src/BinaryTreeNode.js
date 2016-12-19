"use strict";
class BinaryTreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    insertLeft(newNode) {
        if (!this.left)
            this.left = new BinaryTreeNode(newNode);
        else {
            const temp = new BinaryTreeNode(newNode, this.left);
            this.left = temp;
        }
    }
    insertRight(newNode) {
        if (!this.right)
            this.right = new BinaryTreeNode(newNode);
        else {
            const temp = new BinaryTreeNode(newNode, null, this.right);
            this.right = temp;
        }
    }
}
exports.BinaryTreeNode = BinaryTreeNode;
/**
 * Tree preorder traversal using recursive
 * @param root
 * @param traverser
 */
function PreorderTraversalRecursive(root, traverser) {
    if (!root)
        return;
    traverser(root.data);
    PreorderTraversalRecursive(root.left, traverser);
    PreorderTraversalRecursive(root.right, traverser);
}
exports.PreorderTraversalRecursive = PreorderTraversalRecursive;
/**
 * Tree preorder traversal using iteration
 * @param root
 * @param traverser
 */
function PreorderTraversalIterative(root, traverser) {
    if (!root)
        return;
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const top = stack.pop();
        traverser(top.data);
        if (top.right)
            stack.push(top.right);
        if (top.left)
            stack.push(top.left);
    }
}
exports.PreorderTraversalIterative = PreorderTraversalIterative;
function InorderTraversalRecursive(root, traverser) {
    if (!root)
        return;
    InorderTraversalRecursive(root.left, traverser);
    traverser(root.data);
    InorderTraversalRecursive(root.right, traverser);
}
exports.InorderTraversalRecursive = InorderTraversalRecursive;
function InorderTraversalIterative(root, traverser) {
    if (!root)
        return;
    const stack = [];
    const state = {
        location: 1,
        node: root
    };
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
exports.InorderTraversalIterative = InorderTraversalIterative;
function PostorderTraversalRecursive(root, traverser) {
    if (!root)
        return;
    PostorderTraversalRecursive(root.left, traverser);
    PostorderTraversalRecursive(root.right, traverser);
    traverser(root.data);
}
exports.PostorderTraversalRecursive = PostorderTraversalRecursive;
function PostorderTraversalIterative(root, traverser) {
    const stack = [];
    const item = {
        location: 1,
        root: root
    };
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
exports.PostorderTraversalIterative = PostorderTraversalIterative;
function LevelOrderTraversal(root, traverser) {
    if (!root)
        return;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const node = queue.splice(0, 1)[0];
        traverser(node.data);
        if (node.left)
            queue.push(node.left);
        if (node.right)
            queue.push(node.right);
    }
}
exports.LevelOrderTraversal = LevelOrderTraversal;
function InsertUsingLevelOrder(root, data) {
    let newNode = new BinaryTreeNode(data);
    if (!root) {
        root = newNode;
        return root;
    }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.splice(0, 1)[0];
        if (node.left)
            queue.push(node.left);
        else {
            node.left = newNode;
            return root;
        }
        if (node.right)
            queue.push(node.right);
        else {
            node.right = newNode;
            return root;
        }
    }
}
exports.InsertUsingLevelOrder = InsertUsingLevelOrder;
function LevelOrderTraversalInReverse(root, traverser) {
    if (!root)
        return;
    let stack = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.splice(0, 1)[0];
        stack.push(node);
        if (node.right)
            queue.push(node.right);
        if (node.left)
            queue.push(node.left);
    }
    while (stack.length > 0) {
        let node = stack.pop();
        traverser(node.data);
    }
}
exports.LevelOrderTraversalInReverse = LevelOrderTraversalInReverse;
//# sourceMappingURL=BinaryTreeNode.js.map