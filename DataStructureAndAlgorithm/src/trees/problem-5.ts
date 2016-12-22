import { BinaryTreeNode } from "./BinaryTreeNode";

export function InsertUsingLevelOrder<T>(root: BinaryTreeNode<T>, data: T) {
    let newNode = new BinaryTreeNode(data);
    if (!root) {
        root = newNode;
        return root;
    }

    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);
    while (queue.length > 0) {
        let node = queue.dequeue();
        if (node.left)
            queue.enqueue(node.left);
        else {
            node.left = newNode;
            return root;
        }

        if (node.right)
            queue.enqueue(node.right);
        else {
            node.right = newNode;
            return root;
        }
    }

}