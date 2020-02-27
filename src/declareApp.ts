// 变量申明

function f() {
    var message = "Hello, World";
    var a = 10;
    console.log(message);
    return function g() {
        var b = a + 1;
        return b;
    };
}

console.log(f()());

function foo() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;
    console.log(a);
    return b;

    function g() {
        return a;
    }
}

console.log(foo());

function fooInit(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}

console.log(fooInit(true));  // returns '10'
console.log(fooInit(false)); // returns 'undefined'

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

console.log(sumMatrix([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]));

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i + 1);
//     }, 100 * i);
// }

// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 100 * i);
//     })(i);
// }

function zoom() {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误 放在声明前和声明后获取值不一样
console.log(zoom());
let a = 9;

