"use strict";
function FindMaxRecursive(root, comparator) {
    let max = root.data;
    if (root.left) {
        let left = FindMaxRecursive(root.left, comparator);
        if (comparator(left, max) > 0)
            max = left;
    }
    if (root.right) {
        let right = FindMaxRecursive(root.right, comparator);
        if (comparator(right, max) > 0)
            max = right;
    }
    return max;
}
exports.FindMaxRecursive = FindMaxRecursive;
function FindMaxIterative(root, comparator) {
    let max = root.data;
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
                if (comparator(root.data, max) > 0)
                    max = root.data;
                stack.push({ location: 3, root: root });
                if (root.right) {
                    stack.push({ location: 1, root: root.right });
                }
                break;
            case 3:
                if (comparator(root.data, max) > 0)
                    max = root.data;
                break;
            default:
                throw new Error("Should not go here");
        }
    }
    return max;
}
exports.FindMaxIterative = FindMaxIterative;
function FindMaxUsingLevelOrder(root, comparator) {
    let queue = [];
    queue.push(root);
    let max = root.data;
    while (queue.length > 0) {
        let item = queue.splice(0, 1)[0];
        if (comparator(item.data, max) > 0)
            max = item.data;
        if (item.left)
            queue.push(item.left);
        if (item.right)
            queue.push(item.right);
    }
    return max;
}
exports.FindMaxUsingLevelOrder = FindMaxUsingLevelOrder;
function FindRecursive(root, value, comparator) {
    if (!root)
        return null;
    if (comparator(root.data, value) === 0)
        return root;
    let result = FindRecursive(root.left, value, comparator);
    if (result)
        return result;
    return FindRecursive(root.right, value, comparator);
}
exports.FindRecursive = FindRecursive;
function FindUsingLevelOrder(root, value, comparator) {
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let first = queue.splice(0, 1)[0];
        if (comparator(first.data, value) === 0)
            return first;
        if (first.left)
            queue.push(first.left);
        if (first.right)
            queue.push(first.right);
    }
    // not found
    return null;
}
exports.FindUsingLevelOrder = FindUsingLevelOrder;
function FindSizeRecursive(root) {
    if (!root)
        return 0;
    return FindSizeRecursive(root.left) + FindSizeRecursive(root.right) + 1;
}
exports.FindSizeRecursive = FindSizeRecursive;
function FindSizeIterative(root) {
    if (!root)
        return 0;
    let result = 0;
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let node = queue.splice(0, 1)[0];
        result += 1;
        if (node.left)
            queue.push(node.left);
        if (node.right)
            queue.push(node.right);
    }
    return result;
}
exports.FindSizeIterative = FindSizeIterative;
//# sourceMappingURL=BinaryTreeAlgorithm.js.map