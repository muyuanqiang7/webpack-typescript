// 基础数据类型(原始数据类型) ts
function sayHello(person: string) {
    return `Hello ${person}`;
}

let user = "Tom";
console.log(sayHello(user));
// 布尔类型 没有初始值 定义后未undefined
let isDone: boolean = false;
let isDriver: boolean = true;
let createdByBoolean: boolean = Boolean(1);
let isFull: boolean = Boolean(null);
let isMember: boolean;
console.log(isDone);
console.log(isDriver);
console.log(createdByBoolean);
console.log(isFull);
console.log(isMember);

// 数值类型
let decLiteral: number = 6;
// 16进制表示法
let hexLiteral: number = 0xffff;
//二进制表示法
let binaryLiteral: number = 0b1010;
//八进制表示法
let octalLiteral: number = 0o44;
//NaN number
let notNumber: number = NaN;
//Infinity 属性用于存放表示正无穷大的数值。
// 负无穷大是表示负无穷大一个数字值。
let infinityNumber: number = Infinity;

console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
console.log(notNumber);
console.log(infinityNumber);

// 字符串
let nameStr: string = 'Tom';
let age: number = 25;

let message = `Hello, My name is ${nameStr},
My age is ${age + 1}, i am study typescript.
`;
console.log(message);

// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName(): void {
    console.log('my name is tom');
}

alertName();
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null

let unusable: void = undefined;
let voidusable: void = undefined;
// let normal: void = 1; // error type can not assign to type : void
console.log(unusable);
console.log(voidusable);

// Null Undefined
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，
// 可以赋值给 number 类型的变量

let u: undefined = undefined;
let n: null = null;

let un: undefined = null;
let nu: null = undefined;
let num: number = undefined;
let numberNull: number = null;

// 数组 声明的两种方式 元素类型后跟[]
let list: number[] = [1, 2, 3, 4, 5];
// 数组泛型的方式
let array: Array<string> = ['1', '2', '3', '4', '5'];
console.log(list);
list.forEach(item => {
    console.log(item);
});
array.forEach(item => console.log(item));

//元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

let tupleLiteral: [string, number, number] = ['Tom', 29, 28];
tupleLiteral.forEach(item => {
    console.log(item);
});
console.log(tupleLiteral[0]);
//  @ts-ignore 越界访问在编译时会报错 增加注解 @ts-ignore 则返回undefined
console.log(tupleLiteral[3]);
// @ts-ignore
tupleLiteral[3] = 'Bob';

// @ts-ignore 注释功能。这些注释是一种轻量级的方法来抑制下一行中出现的任何错误。

// @ts-ignore
console.log(tupleLiteral[3]);

// 枚举
enum Color {Red, Green, Orange}

let color: Color = Color.Red;
console.log(color);
let colorName: string = Color[2];
console.log(colorName);

// Never类型

