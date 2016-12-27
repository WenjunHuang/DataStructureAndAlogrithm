import {BinaryTreeNode, ITraverser} from "./BinaryTreeNode"

/*
 give an algorithm for printing the level order data in reverse order. for example,
            1
          2   3
        4  5 6  7
   be: 4 5 6 7 2 3 1
*/
export function LevelOrderTraversalInReverse<T>(root: BinaryTreeNode<T>, traverser: ITraverser) {
    if (!root)
        return;

    let stack: Array<BinaryTreeNode<T>> = [];
    let queue: Array<BinaryTreeNode<T>> = [];
    queue.enqueue(root);

    while (queue.length > 0) {
        let node = queue.dequeue();
        stack.push(node);

        if (node.right) queue.enqueue(node.right);
        if (node.left) queue.enqueue(node.left);
    }

    while (stack.length > 0) {
        let node = stack.pop();
        traverser(node.data);
    }
}         