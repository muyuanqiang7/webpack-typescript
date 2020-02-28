// 类型别名
// 类型别名常用于联合类型
type Name = string;
type NameResolver = () => string
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        console.log(n());
        console.log(n.call(null));
        return n.apply(null);
    }
}

console.log(getName("Bob"));
console.log(getName(() => {
    return 'Mike'
}));

// 字符串字面量类型
//字符串字面量类型用来约束取值只能是某几个字符串中的一个。
// 类型别名与字符串字面量类型都是使用 type 进行定义
type EventName = 'click' | 'scroll' | 'mousemove'

function handlerEvent(ele: Element, event: EventName) {
    console.log(ele);
    console.log(event);
}

// handlerEvent(document.getElementById('foo'), 'click');
// error Argument of type '"dbclick"' is not assignable to parameter of type 'EventName'.
// handlerEvent(document.getElementById('foo'), 'dbclick');

// 元组
/**
 * 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
 * 元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。
 */

let tom: [string, number] = ['Tom', 25];

// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
let Bob: [string, number];
Bob = ['Bob', 29];
Bob[0] = "Bob Update";

// 元组的越界元素
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型 下列中添加元素会被限制为 string | number
let Mike: [string, number];
Mike = ['Mike', 22];
Mike.push("Bob");
console.log(Mike);

// 枚举 Enum
/**
 * 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
 */

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

console.log(Days.Thu);
console.log(Days[0]);
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：
