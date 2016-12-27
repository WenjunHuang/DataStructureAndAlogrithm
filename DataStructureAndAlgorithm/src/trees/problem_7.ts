import {BinaryTreeNode} from "./BinaryTreeNode"

// Give an algorithm for finding the size of binary tree without recursion
export function FindSizeIterative<T>(root: BinaryTreeNode<T>) {
    if (!root)
        return 0;

    let result = 0;
    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        result += 1;

        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
    }
    return result;
}
