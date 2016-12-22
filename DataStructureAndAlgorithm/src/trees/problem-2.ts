
import {BinaryTreeNode} from "./BinaryTreeNode";

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