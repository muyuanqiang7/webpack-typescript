const add = (a: number, b: number): number => a + b;
const mul = (a: number, b: number): number => a * b;
const sub = (a: number, b: number): number => a - b;

// 函数式编程(Functional Programming)
console.log(sub(add(5, 6), mul(1, 6)));

// Functional Programming的基本条件
// 函数为一等公民(First Class)
/**
 *一等公民就是指跟其他資料型別具有同等地位，也就是說函式能夠被賦值給變數，函式也能夠被當作參數傳入另一個函式，也可當作一個函式的回傳值
 *
 */
const hello = function () {

};

// fetch('www.huiztech.cn').then(res => {
//     console.log(res);
// }).catch(error => {
//     console.log(error);
// });

const result = function (a: number): Function {
    return function (b: number): number {
        return a + b;
    }
};

console.log(result(5));

function findIndex(arr, predicate, start = 0) {
    if (0 <= start && start < arr.length) {
        if (predicate(arr[start])) {
            return start;
        }
        return findIndex(arr, predicate, start + 1);
    }
}

console.log(findIndex(['a', 'b'], x => x === 'b'));

console.log([9, 4].concat([8, 7])
    .sort()
    .filter(x => x > 5));
