function foo(title) {
    var x = 10;
}

var foo;
(function (foo) {
    (function (Bar) {
        function f() {
        }
        Bar.f = f;
    })(foo.Bar || (foo.Bar = {}));
    var Bar = foo.Bar;
})(foo || (foo = {}));

var foo;
(function (foo) {
    (function (Baz) {
        function g() {
            foo.Bar.f();
        }
        Baz.g = g;
    })(foo.Baz || (foo.Baz = {}));
    var Baz = foo.Baz;
})(foo || (foo = {}));
