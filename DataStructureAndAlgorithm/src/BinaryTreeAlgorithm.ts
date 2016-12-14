import { BinaryTreeNode } from "./BinaryTreeNode";

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

export function FindMaxIterative<T>(root: BinaryTreeNode<T>, comparator: { (left: T, right: T): number }): T {
    let max: T = root.data;
    const stack = [];
    const item = {
        location: 1,
        root: root
    };
    stack.push(item);

    while (stack.length > 0) {
        const top = stack.pop();
        root = top.root;

        switch (top.location) {
            case 1:
                stack.push({ location: 2, root: root });
                if (root.left) {
                    stack.push({ location: 1, root: root.left });
                }
                break;
            case 2:
                if (comparator(root.data, max) > 0) max = root.data;
                stack.push({ location: 3, root: root });
                if (root.right) {
                    stack.push({ location: 1, root: root.right });
                }
                break;
            case 3:
                if (comparator(root.data, max) > 0) max = root.data;
                break;
            default:
                throw new Error("Should not go here");
        }
    }
    return max;
}

export function FindMaxUsingLevelOrder<T>(root: BinaryTreeNode<T>, comparator: { (left: T, right: T): number }): T {
    let queue = [];
    queue.push(root);
    let max = root.data;

    while (queue.length > 0) {
        let item = queue.splice(0, 1)[0];
        if (comparator(item.data, max) > 0) max = item.data;
        if (item.left) queue.push(item.left);
        if (item.right) queue.push(item.right);
    }
    return max;
}

export function FindRecursive<T>(root: BinaryTreeNode<T>, value: T, comparator: { (left: T, right: T): number }): BinaryTreeNode<T> {
    if (!root)
        return null;
    if (comparator(root.data, value) === 0) return root;

    let result = FindRecursive(root.left, value, comparator);
    if (result) return result;

    return FindRecursive(root.right, value, comparator);
}

export function FindUsingLevelOrder<T>(root: BinaryTreeNode<T>, value: T, comparator: { (left: T, right: T): number }): BinaryTreeNode<T> {
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let first = queue.splice(0, 1)[0];
        if (comparator(first.data, value) === 0) return first;

        if (first.left) queue.push(first.left);
        if (first.right) queue.push(first.right);
    }
    // not found
    return null;
}