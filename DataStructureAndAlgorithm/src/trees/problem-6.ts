import {BinaryTreeNode} from "./BinaryTreeNode";
export function FindSizeRecursive<T>(root: BinaryTreeNode<T>) {
    if (!root)
        return 0;

    return FindSizeRecursive(root.left) + FindSizeRecursive(root.right) + 1;
}
