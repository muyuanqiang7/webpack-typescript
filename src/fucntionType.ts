// 函数的类型
/**
 * 函数式JavaScript中的一等公民
 * 常见的两种定义函数的方式--函数声明(Function Declaration)和函数表达式(Function Expression)
 */
// 1 .Function Declaration 函数声明
function sum(a: number, b: number): number {
    return a + b;
}

// 2. Function Expression 函数表达式
let add = function (a: number, b: number): number {
    return a + b;
};

// 函数的输入和输出
/**
 * 输入多余或者少于参数要求个数是不被允许的
 * @param a
 * @param b
 */
let multiple = function (a: number, b: number): number {
    return a * b;
};
// error:  Excepted 2 arguments but got 1
// multiple(3);
// error:  Excepted 2 arguments but got 3
// multiple(3, 4, 5);
console.log(multiple(3, 4));

// 函数表达式
/**
 * mySum是通过赋值的方式进行类型推论而推断出来的
 * @param a
 * @param b
 */
let mySum = function (a: number, b: number): number {
    return a + b;
};
/**
 * 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
 * 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 * 在 ES6 中，=> 叫做箭头函数，应用十分广泛
 * 手动给函数表达式增加类型
 * @param a
 * @param b
 */
let myOtherSum: (x: number, y: number) => number = function (a: number, b: number): number {
    return a + b;
};

// 使用接口的方式定义函数的形状
interface SearchFunc {
    (source: string, target: string): boolean
}

let mySerach: SearchFunc;
mySerach = function (source, target) {
    return source.search(target) !== -1;
};
console.log(mySerach("my name is bob", 'bob'));

// 可选参数

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return lastName + firstName;
    } else {
        return firstName;
    }
}

let buildNameExpression = function (firstName: string, lastName?: string): string {
    if (lastName) {
        return lastName + firstName;
    }
    return firstName;
};

interface IBuildName {
    (firstName: string, lastName?: string): string
}

let buildNameImp: IBuildName;
buildNameImp = function (a: string, b?: string): string {
    if (b) {
        return b + a;
    }
    return a;
};
//1. interface
console.log(buildNameImp("yuanqiang"));
console.log(buildNameImp("yuanqiang", "mu"));
//2. function expression
console.log(buildNameExpression("yuanqiang"));
console.log(buildNameExpression("yuanqiang", "mu"));
//3. function declaration
console.log(buildName("yuanqiang"));
console.log(buildName("yuanqiang", "mu"));

// 默认值的方式
function defaultBuildName(fisrName: string, lastName: string = "Default "): string {
    return lastName + fisrName;
}

console.log(defaultBuildName("yuanqiang"));

// 剩余参数
// ES6中, 可以使用...rest 的方式获取函数中的剩余参数(rest参数)
function push(array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item);
    })
}

let a = [];
push(a, 1, 2, 3, 4);
console.log(a);
