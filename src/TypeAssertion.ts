// 类型断言
/**
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型。
 * 语法:
 *  <类型>值
 *  值 as 类型
 *  类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
 */
// error  Property 'length' does not exist on type 'string | number'.
// function getLength(something: string | number): number {
//     return something.length;
// }

function getLength(something: string | number): number {
    if ((<String>something).length) {
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}

console.log(getLength(1024));
console.log(getLength('1024'));
