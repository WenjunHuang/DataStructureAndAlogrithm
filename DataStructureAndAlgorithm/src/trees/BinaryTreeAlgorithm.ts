import { BinaryTreeNode } from "./BinaryTreeNode";

export function FindMaxUsingLevelOrder<T>(root: BinaryTreeNode<T>, comparator: { (left: T, right: T): number }): T {
    let queue = [];
    queue.enqueue(root);
    let max = root.data;

    while (queue.length > 0) {
        let item = queue.dequeue();
        if (comparator(item.data, max) > 0) max = item.data;
        if (item.left) queue.push(item.left);
        if (item.right) queue.push(item.right);
    }
    return max;
}






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

export function DeepestNode<T>(root: BinaryTreeNode<T>) {
    if (!root)
        return null;
    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);
    let node: BinaryTreeNode<T>;

    while (queue.length > 0) {
        node = queue.dequeue();
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }

    return node.data;

}

//Problem-14
export function numberOfLeavesInBTUsingLevelOrder<T>(root: BinaryTreeNode<T>):number {
    if (!root)
        return 0;
    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);
    let count = 0;
    while (queue.length > 0) {
        let node = queue.dequeue();
        if (!node.left && !node.right)
            ++count;
        if (node.left)
            queue.enqueue(node.left);
        if (node.right)
            queue.enqueue(node.right);
    }
    return count;
}