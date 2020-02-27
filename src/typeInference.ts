// 类型推论

let myFavoriteNumber = 'seven';
let myFavoriteNumberType = typeof myFavoriteNumber;
console.log(myFavoriteNumberType);
// error: Type number is not assignable to type string
// myFavoriteNumber = 7;

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myNumber;
myNumber = 'seven';
console.log(myNumber);
let type1 = typeof myNumber;
console.log(type1);
myNumber = 7;
console.log(myNumber);
let type = typeof myNumber;
console.log(type);

// 联合类型
let unionType: string | number;
unionType = 'seven';
console.log(typeof unionType);
unionType = 7;
console.log(typeof unionType);
// error: Type object is not assignable to type string | number
// unionType = {};

// 访问非公有属性会报错
// Property 'length' does not exist on type 'string | number'.
//  Property 'length' does not exist on type 'number'.
function getLength(some: string | number): number {
    // @ts-ignore
    return some.length;
}

function getString(some: string | number): string {
    return some.toString();
}

console.log(getString('a'));
console.log(getString(2));
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let luckNumber: string | number;
luckNumber = "sevne";
console.log(luckNumber.length);
luckNumber = 7;
// 编译时报错 类型推断为number Property 'length' does not exist on type 'number'
// @ts-ignore
console.log(luckNumber.length);
