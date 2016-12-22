import {BinaryTreeNode} from "./BinaryTreeNode";
export function FindUsingLevelOrder<T>(root: BinaryTreeNode<T>, value: T, comparator: { (left: T, right: T): number }): BinaryTreeNode<T> {
    const queue = [];
    queue.enqueue(root);

    while (queue.length > 0) {
        let first = queue.dequeue();
        if (comparator(first.data, value) === 0) return first;

        if (first.left) queue.push(first.left);
        if (first.right) queue.push(first.right);
    }
    // not found
    return null;
}