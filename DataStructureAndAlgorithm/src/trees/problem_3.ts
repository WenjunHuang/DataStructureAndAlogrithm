import {BinaryTreeNode} from "./BinaryTreeNode";
export function FindRecursive<T>(root: BinaryTreeNode<T>, value: T, comparator: { (left: T, right: T): number }): BinaryTreeNode<T> {
    if (!root)
        return null;
    if (comparator(root.data, value) === 0) return root;

    let result = FindRecursive(root.left, value, comparator);
    if (result) return result;

    return FindRecursive(root.right, value, comparator);
}