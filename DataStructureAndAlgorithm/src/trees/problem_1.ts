import {BinaryTreeNode} from "./BinaryTreeNode";
export function FindMaxRecursive<T>(root: BinaryTreeNode<T>, comparator: { (left: T, right: T): number }): T {

    let max: T = root.data;

    if (root.left) {
        let left = FindMaxRecursive<T>(root.left, comparator);
        if (comparator(left, max) > 0) max = left;
    }

    if (root.right) {
        let right = FindMaxRecursive<T>(root.right, comparator);
        if (comparator(right, max) > 0) max = right;
    }

    return max;
}
