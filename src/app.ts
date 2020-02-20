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
