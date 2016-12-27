import { BinaryTreeNode } from "./BinaryTreeNode"

// give an algorithm for deleting the tree
export function deleteBinaryTree<T>(root: BinaryTreeNode<T>): void {
    if (root)
        return;

    // use post-order recursion
    deleteBinaryTree(root.left);
    deleteBinaryTree(root.right);

    // typescript can not free object reference manualy , so just dereference child nodes
    root.left = null;
    root.right = null;
}

export function deleteBinaryTreeWithIteration<T>(root: BinaryTreeNode<T>): void {
    if (!root)
        return;

    const stack = [];
    stack.push({root: root, level: 1});

    while (stack.length > 0) {
        const item = stack.pop();
        root = item.root;
        switch (item.level) {
            case 1:
                if (!root)
                    continue;
                stack.push({ root: root, level: 2 });
                stack.push({ root: root.right, level: 1 });
                stack.push({ root: root.left, level: 1 });
                break;
            case 2:
                root.left = null;
                root.right = null;
                break;
            default:
                break;
        }
    }
}