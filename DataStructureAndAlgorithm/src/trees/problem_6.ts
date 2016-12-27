import {BinaryTreeNode} from "./BinaryTreeNode";

// find an algorithm for finding the size of binary tree
export function FindSizeRecursive<T>(root: BinaryTreeNode<T>) {
    if (!root)
        return 0;

    return FindSizeRecursive(root.left) + FindSizeRecursive(root.right) + 1;
}


