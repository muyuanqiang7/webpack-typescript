/**
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
 TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
 */

interface Person {
    name: string
    age: number,
    // 可选属性
    address?: string
}

let tom: Person = {name: 'tom', age: 29};
let bob: Person = {name: 'tom', age: 29, address: 'China'};
// 必填属性为空编译时报错 不可以减少required属性 也不可以增加属性
//Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
//@ts-ignore
let lucy: Person = {name: 'lucy'};
console.log(tom);
console.log(bob);
console.log(lucy);

// 接口任意属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Animal {
    name: string,
    age?: string

    [propName: string]: string
}

let cat: Animal = {name: 'cat', age: '3', food: 'fish'};
console.log(cat);

//只读属性
interface UserData {
    readonly  id: string
    readonly password: string
    name: string

    [propName: string]: string
}

let userData: UserData = {
    id: '1',
    password: 'huiztech@',
    name: 'huiztech'
};
// error  Cannot assign to 'id' because it is a read-only property.
// @ts-ignore
// userData.id = 9527;
console.log(userData.id);

//  数组的类型 数组的定义方式比较多很灵活
//  第一种声明方式:  限制类型
let fibonacci: number[] = [1, 1, 2, 3, 5, 8];
fibonacci.push(13);
console.log(fibonacci);
//  第二种方式 数组的泛型
let luckyNumer: Array<number> = [1, 1, 2, 3, 5, 8];
console.log(luckyNumer);

// 3 way 接口的方式表示数组
interface NumberArray {
    [index: number]: number
}

let numberArray: NumberArray = [1, 2, 3, 4, 5, 6];
console.log(numberArray);

// 类数组 (Array-like Object) 不是数组类型
function sum() {
    // error: Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 15 more
    // let args: number[] = arguments;
    // coorect
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

function add(a: string, b: number) {
    let ars: IArguments = arguments;
    console.log(ars.length);
    console.log(ars.callee);
    console.log(ars);
}

add('3', 4);

// any 在数组中的应用
let list: any[] = [1, "2", {name: 'Bob'},
    function callLee() {
        console.log('callMe invoke');
    }, function invoke(a: string, b: string): string {
        return a + b;
    }];

// console.log(list);
list.forEach(item => {
    let type = typeof item;
    // console.log(type);
    if (type === 'function') {
        // console.log(item.name);
        if (item.name === 'invoke') {
            console.log(item('a', 'b'));
            console.log(item.call(null, 'a', 'b'));
            console.log(item.apply(null, ['a', 'b']));
        }
        // item();
        // item.call();
        // item.apply();
    }
});
