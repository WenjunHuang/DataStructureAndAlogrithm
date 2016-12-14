import {
    InorderTraversalTests,
    PostorderTraversalTests,
    LevelorderTraversalTests
} from "./TreeTraversalTest";
import { BinaryTreeAlgorithmTest } from "./BinaryTreeAlgorithmTest";
import * as tsUnit from "../node_modules/tsunit.external/tsUnit";

var test = new tsUnit.Test(InorderTraversalTests).run().getTapResults();
console.log(test);

test = new tsUnit.Test(PostorderTraversalTests).run().getTapResults();
console.log(test);

test = new tsUnit.Test(LevelorderTraversalTests).run().getTapResults();
console.log(test);

test = new tsUnit.Test(BinaryTreeAlgorithmTest).run().getTapResults();
console.log(test);