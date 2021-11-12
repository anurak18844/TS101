//data Type
//imply data type or explicit data type กำหนดอย่างเปิดเผยว่ากำหนดเป็น data type นี้ กำหนดไม่ชัดโดย
//let x: any;
// let x: number = 5; 
// console.log(x);
// -----------------------------------------------------
let id = 5;
let myName = "Anurak";
let isPublished = true;
let x = "hello";
console.log("X : " + typeof (x) + " " + x);
x = 3 < 3;
console.log("X : " + typeof (x) + " " + x);
console.log("\n");
console.log("Id is : " + id + " | Type variable is : " + typeof (id));
console.log("My Name is : " + myName + " | Type variable is : " + typeof (myName));
console.log("isPublished : " + isPublished + " | Type variable is : " + typeof (isPublished));
console.log("\n");
// ${} String Template in Ty and Js || EL (Expression Language) in Java
// ใช้ Quote แบบ backtick `
let age = 20;
console.log(`My name is ${myName}. I am ${age} years old.`);
//Collection Type
let ids;
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", true, 3.5];
let friendsName;
friendsName = ["Wasok", "Kong", "JR", "MUCH", "MUANG"];
console.log(friendsName);
console.log("\n");
//Loop (iterate)
ids.forEach(i => {
    console.log(`Id : ${i}`);
});
console.log("\n");
console.log(`Hello myname is : ${myName}`);
friendsName.forEach(i => {
    console.log(`-${i}`);
});
console.log("\n");
let salray = [1000, 2000, 5000, 10000];
let commission = [];
salray.forEach((s) => {
    commission.push(s * 0.1);
});
console.log(commission);
console.log("\n");
let bonus = [];
//โบนัส ถ้าเงินเดือน น้อยกว่า 1000 ได้โบนัส 2 เท่าของเงินเดือน ถ้า 1001-5000 ได้ 1.5 ถ้า 5001 - 10000 โบนัส 1.2 เท่า 10001 ขึ้นไป ได้ 1 เท่าของเงินเดือน
salray.forEach((s) => {
    if (s <= 1000) {
        bonus.push(s * 2);
    }
    else if (s <= 5000) {
        bonus.push(s * 1.5);
    }
    else if (s <= 10000) {
        bonus.push(s * 1.2);
    }
    else {
        bonus.push(s);
    }
});
console.log(bonus);
console.log("\n");
//Tuple = 1record
let prod1;
prod1 = [1, "Chocolate", "Pack", 100];
prod1.forEach(p => {
    console.log(p);
});
console.log("\n");
let products;
products = [
    [1, "Strawberry", "psc", 20],
    [2, "Apple", "psc", 25],
    [3, "Banana", "psc", 10],
    [4, "Kiwi", "psc", 30],
    [5, "Orange", "psc", 25],
];
console.log("All Products");
products.forEach(p => {
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]} Baht`);
});
console.log("\n");
let students;
students = [
    ["1001", "Kongpop", 16, 40, 0],
    ["1002", "Jakrit", 18, 42, 0],
    ["1003", "Chalermchai", 14, 48, 0],
    ["1004", "Tanad", 11, 38, 0],
    ["1005", "Chawanwit", 20, 50, 0],
];
students.forEach(s => {
    s[4] = s[3] + s[2];
    console.log(`Id : ${s[0]}, Total ${s[4]}`);
});
console.log("\n");
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.clear();
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
;
console.clear();
console.log(Direction2.Left);
var PapaerSize;
(function (PapaerSize) {
    PapaerSize[PapaerSize["A4"] = 1] = "A4";
    PapaerSize[PapaerSize["A5"] = 2] = "A5";
    PapaerSize[PapaerSize["A6"] = 3] = "A6";
})(PapaerSize || (PapaerSize = {}));
;
var Oreintation;
(function (Oreintation) {
    Oreintation[Oreintation["Portrait"] = 1] = "Portrait";
    Oreintation[Oreintation["Landscape"] = 2] = "Landscape";
})(Oreintation || (Oreintation = {}));
;
let wasok = {
    id: 101,
    name: "Wasok",
    tel: "081-9811991",
};
console.log(wasok);
//Type Assertion
// let xx: any = "asdasdsa";
// let yy = xx;
// console.log(typeof(yy));
// console.log("\n");
//ตั้งใจให้ yy รับแค่ number อย่างเดียว
// yy = xx as number;
// console.log(yy);
//Union Type
console.clear();
let sid;
sid = 101;
console.log(typeof (sid));
sid = "asdasdasd";
console.log(typeof (sid));
// function
function addNumber(x, y) {
    return x + y;
}
function showLog(m) {
    console.log(m);
}
showLog(10);
showLog("Ten");
const addNum = (a, b) => a + b;
const subNum = (a, b) => a - b;
console.clear();
console.log(addNum(1, 2));
console.log(subNum(10, 2));
;
const student = {
    id: 123,
    name: "Simchai",
    age: 30,
    tel: "081-981191",
    move: function () {
        return "Runnig";
    },
    eat: function () {
        return "Meat";
    }
};
console.clear();
console.log(student.move());
const granMom = {
    id: 9,
    name: "Pao",
    age: 98,
    tel: "0859851911",
    move: function () {
        return "Crawling";
    },
    eat: function () {
        return "Meat";
    }
};
console.clear();
console.log(granMom.move());
const boxerHuman = {
    id: 102,
    name: "บัวขาว",
    age: 45,
    tel: "081-9811991",
    move: function () {
        return "Punch";
    },
    eat: function () {
        return "Fear";
    }
};
const pilotHuman = {
    id: 104,
    name: "จอดดี้",
    age: 45,
    tel: "081-9811991",
    move: function () {
        return "Walk";
    },
    eat: () => "Mom U"
};
//Anurak
console.clear();
console.log(boxerHuman);
console.log(pilotHuman);
//Class
class Driver {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} move by driving`;
    }
    eat() {
        return `${this.name} eates rice`;
    }
}
const d1 = new Driver(101, "Anurak", 20);
console.clear();
console.log(d1.move());
console.log(d1.eat());
//Q2 สร้าง Tuple ของนักเรียน [id, name, mid, final, project, grade]
//                        [1, 'Name', 20, 25,30, " "]
//Output : <id>:<name>, Total: <mid+final+project>, Grade: <grade>
//แสดงการ implements move() eat()
// แสดงการส้ราง object
//Filename : Anurak_Q1.ts
//Q1 การบ้าน  implements 1 อาชีพ จาก Human
//แสดงการ implements move() eat()
// แสดงการส้ราง object
//Filename : Anurak_Q2.ts
//Generic ยังไม่สร้าง Type ตอนสร้าง Function
function getArray(items) {
    return new Array().concat(items);
}
let n1 = [1, 2, 3, 4];
let n2 = ["A", "B", "C", "D"];
console.log(getArray([n1, n2]));
