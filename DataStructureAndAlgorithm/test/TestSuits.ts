import {
    TreeTraversalTest
} from "./TreeTraversalTest";
import { BinaryTreeAlgorithmTest } from "./BinaryTreeAlgorithmTest";
import * as tsUnit from "../node_modules/tsunit.external/tsUnit";


let test = new tsUnit.Test(TreeTraversalTest).run().getTapResults();
console.log(test);

test = new tsUnit.Test(BinaryTreeAlgorithmTest).run().getTapResults();
console.log(test);