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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this._name = name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.sayHi = function () {
        return "My name is " + this._name;
    };
    return Animal;
}());
var cat = new Animal('cat');
console.log(cat.sayHi());
console.log(cat.name);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var bob = new Person('bob', 23);
console.log(bob.name);
console.log(bob.age);
// error Cannot assign to 'age' because it is a read-only property.
// bob.age = 27;
// 抽象类
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal(name) {
        this.name = name;
    }
    return AbstractAnimal;
}());
var Pig = /** @class */ (function (_super) {
    __extends(Pig, _super);
    function Pig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pig.prototype.sayHi = function () {
        console.log("My name is " + this.name);
    };
    return Pig;
}(AbstractAnimal));
var pig = new Pig('Pug');
var pub = new Pig('pig');
pig.sayHi();
pub.sayHi();
/**
 * 一个函数还可以有自己的属性和方法：
 */
function getCounter() {
    var counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//  泛型
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log(createArray(9, 'init'));
console.log(createArray(9, 1));
//  泛型接口
var interCreateArray;
interCreateArray = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(interCreateArray(3, 'x'));
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(3, 4));
// 泛型参数的默认类型
// 从TypeScript 2.3后 我们可以为泛型中的类型参数指定默认类型
function defaultCreateArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
defaultCreateArray(3, { 'name': 'bob' });
