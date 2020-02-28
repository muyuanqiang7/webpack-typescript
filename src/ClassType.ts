// 类
/**
 *
 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
 对象（Object）：类的实例，通过 new 生成
 面向对象（OOP）的三大特性：封装、继承、多态
 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
 存取器（getter & setter）：用以改变属性的读取和赋值行为
 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */

class Animal {
    public _name: string;

    constructor(name: string) {
        this._name = name;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    sayHi(): string {
        return `My name is ${this._name}`;
    }
}

let cat: Animal = new Animal('cat');
console.log(cat.sayHi());
console.log(cat.name);

class Person {

    constructor(public name: string, public readonly  age: number) {
    }
}

let bob = new Person('bob', 23);
console.log(bob.name);
console.log(bob.age);
// error Cannot assign to 'age' because it is a read-only property.
// bob.age = 27;

// 抽象类

abstract class AbstractAnimal {
    public name;

    constructor(name) {
        this.name = name;
    }

    public abstract sayHi();
}

class Pig extends AbstractAnimal {
    sayHi() {
        console.log(`My name is ${this.name}`);
    }

}

let pig: Pig = new Pig('Pug');
let pub: AbstractAnimal = new Pig('pig');
pig.sayHi();
pub.sayHi();

// 类与接口
//混合类型
interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

/**
 * 一个函数还可以有自己的属性和方法：
 */
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

//  泛型
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray<string>(9, 'init'));
console.log(createArray<number>(9, 1));

interface CreateArray<T> {
    (length: number, value: T): Array<T>;
}

//  泛型接口
let interCreateArray: CreateArray<any>;
interCreateArray = function <T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(interCreateArray(3, 'x'));

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(3, 4));

// 泛型参数的默认类型
// 从TypeScript 2.3后 我们可以为泛型中的类型参数指定默认类型

function defaultCreateArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

defaultCreateArray(3, {'name': 'bob'});

var myName = 'Tom';

type Foo = {};

