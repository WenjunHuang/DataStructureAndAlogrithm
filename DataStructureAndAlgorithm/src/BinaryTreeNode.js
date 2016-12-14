"use strict";
var BinaryTreeNode = (function () {
    function BinaryTreeNode(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    BinaryTreeNode.prototype.insertLeft = function (newNode) {
        if (!this.left)
            this.left = new BinaryTreeNode(newNode);
        else {
            var temp = new BinaryTreeNode(newNode, this.left);
            this.left = temp;
        }
    };
    BinaryTreeNode.prototype.insertRight = function (newNode) {
        if (!this.right)
            this.right = new BinaryTreeNode(newNode);
        else {
            var temp = new BinaryTreeNode(newNode, null, this.right);
            this.right = temp;
        }
    };
    return BinaryTreeNode;
}());
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
    var stack = [];
    stack.push(root);
    while (stack.length > 0) {
        var top_1 = stack.pop();
        traverser(top_1.data);
        if (top_1.right)
            stack.push(top_1.right);
        if (top_1.left)
            stack.push(top_1.left);
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
    var stack = [];
    var state = {
        location: 1,
        node: root
    };
    stack.push(state);
    while (stack.length > 0) {
        var top_2 = stack.pop();
        root = top_2.node;
        switch (top_2.location) {
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
    var stack = [];
    var item = {
        location: 1,
        root: root
    };
    stack.push(item);
    while (stack.length > 0) {
        var top_3 = stack.pop();
        root = top_3.root;
        switch (top_3.location) {
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
    var queue = [];
    queue.push(root);
    while (queue.length > 0) {
        var node = queue.splice(0, 1)[0];
        traverser(node.data);
        if (node.left)
            queue.push(node.left);
        if (node.right)
            queue.push(node.right);
    }
}
exports.LevelOrderTraversal = LevelOrderTraversal;
//# sourceMappingURL=BinaryTreeNode.js.map