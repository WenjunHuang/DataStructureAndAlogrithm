"use strict";
const TreeTraversalTest_1 = require("./TreeTraversalTest");
const BinaryTreeAlgorithmTest_1 = require("./BinaryTreeAlgorithmTest");
const tsUnit = require("../node_modules/tsunit.external/tsUnit");
let test = new tsUnit.Test(TreeTraversalTest_1.TreeTraversalTest).run().getTapResults();
console.log(test);
test = new tsUnit.Test(BinaryTreeAlgorithmTest_1.BinaryTreeAlgorithmTest).run().getTapResults();
console.log(test);
//# sourceMappingURL=TestSuits.js.map