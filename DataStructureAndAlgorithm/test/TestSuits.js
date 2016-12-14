"use strict";
var TreeTraversalTest_1 = require("./TreeTraversalTest");
var BinaryTreeAlgorithmTest_1 = require("./BinaryTreeAlgorithmTest");
var tsUnit = require("../node_modules/tsunit.external/tsUnit");
var test = new tsUnit.Test(TreeTraversalTest_1.InorderTraversalTests).run().getTapResults();
console.log(test);
test = new tsUnit.Test(TreeTraversalTest_1.PostorderTraversalTests).run().getTapResults();
console.log(test);
test = new tsUnit.Test(TreeTraversalTest_1.LevelorderTraversalTests).run().getTapResults();
console.log(test);
test = new tsUnit.Test(BinaryTreeAlgorithmTest_1.BinaryTreeAlgorithmTest).run().getTapResults();
console.log(test);
//# sourceMappingURL=TestSuits.js.map