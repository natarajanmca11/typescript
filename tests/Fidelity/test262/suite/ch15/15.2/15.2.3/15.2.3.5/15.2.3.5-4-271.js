/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-271.js
 * @description Object.create - 'set' property of one property in 'Properties' is own data property that overrides an inherited accessor property (8.10.5 step 8.a)
 */


function testcase() {
        var data1 = "data";
        var data2 = "data";

        var proto = {};
        Object.defineProperty(proto, "set", {
            get: function () {
                return function (value) {
                    data2 = value;
                };
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var child = new ConstructFun();
        Object.defineProperty(child, "set", {
            value: function (value) {
                data1 = value;
            }
        });

        var newObj = Object.create({}, {
            prop: child 
        });

        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = "overrideData";

        return hasProperty && data1 === "overrideData" && data2 === "data";
    }
runTestCase(testcase);
