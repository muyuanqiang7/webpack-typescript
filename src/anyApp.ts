// any类型 任意值
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
let numberLiteral: number = 7;
// numberLiteral = "7";  // error type '7' can not assign to number
// 如果是 any 类型，则允许被赋值为任意类型

let favoriteNum: any = 7;
console.log(favoriteNum);
favoriteNum = "7";
console.log(favoriteNum);

// 任意值的属性和方法
let anyThing: any = 'Hello';
console.log(anyThing.name);
// console.log(anyThing.name.firstName);
// @ts-ignore
// anyThing.setName('Jerry');
// @ts-ignore
// anyThing.setName('Jerry').sayHello();
// @ts-ignore
// anyThing.myName.setFirstName('Cat');

let notSure: any = 4;
console.log(notSure.toFixed(2));
// okay, ifItExists might exist at runtime 编译时不检查 运行时报错  ifItExist is not a function
// console.log(notSure.ifItExist());

let prettySure: Object = 4;
// error Property 'toFixed' doesn't exist on type 'Object' 编译时报错
// @ts-ignore 忽略错误 运行时检查报错
// console.log(prettySure.toFixed(2));

// 类型断言
let someValue: any = "There is a string";
// <> 方式
let strLength: number = (<string>someValue).length;
console.log(strLength);
// as 方式
strLength = (someValue as string).length;
console.log(strLength);
