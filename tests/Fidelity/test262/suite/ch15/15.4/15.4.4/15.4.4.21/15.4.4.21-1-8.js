/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-1-8.js
 * @description Array.prototype.reduce applied to String object
 */


function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return obj instanceof String;
        }

        var obj = new String("abc");

        return  Array.prototype.reduce.call(obj, callbackfn, 1);
    }
runTestCase(testcase);
