//// [genericFunctions0.js]
function foo(x) {
    return x;
}

var x = foo(5); // 'x' should be number


////[genericFunctions0.d.ts]
declare function foo<T>(x: T): T;
declare var x: number;