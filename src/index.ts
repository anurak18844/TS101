//data Type
//imply data type or explicit data type กำหนดอย่างเปิดเผยว่ากำหนดเป็น data type นี้ กำหนดไม่ชัดโดย
//let x: any;
// let x: number = 5; 
// console.log(x);
// -----------------------------------------------------
let id: number = 5;
let myName: string = "Anurak";
let isPublished: boolean = true;

let x: any = "hello";
console.log("X : " + typeof(x) + " " + x);

x = 3<3;
console.log("X : " + typeof(x) + " " + x);
console.log("\n");
console.log("Id is : " + id + " | Type variable is : " + typeof(id));
console.log("My Name is : " + myName + " | Type variable is : " + typeof(myName));
console.log("isPublished : " + isPublished + " | Type variable is : " + typeof(isPublished));
console.log("\n");

// ${} String Template in Ty and Js || EL (Expression Language) in Java
// ใช้ Quote แบบ backtick `
let age: number = 20;
console.log(`My name is ${myName}. I am ${age} years old.`);

//Collection Type
let ids: number[];
ids = [1,2,3,4,5];

let arr: any[];
arr = [1,"2",true,3.5];

let friendsName: string[];
friendsName = ["Wasok","Kong","JR","MUCH","MUANG"];

console.log(friendsName);
console.log("\n");
//Loop (iterate)

ids.forEach(i => {
    console.log(`Id : ${i}`);
});
console.log("\n");
console.log(`Hello myname is : ${myName}`);
friendsName.forEach(i =>{
    console.log(`-${i}`);
})
console.log("\n");

let salray: number[] = [1000,2000,5000,10000];
let commission: number[] = [];

salray.forEach((s)=>{
    commission.push(s*0.1);
})
console.log(commission);
console.log("\n");

let bonus: number[] = [];
//โบนัส ถ้าเงินเดือน น้อยกว่า 1000 ได้โบนัส 2 เท่าของเงินเดือน ถ้า 1001-5000 ได้ 1.5 ถ้า 5001 - 10000 โบนัส 1.2 เท่า 10001 ขึ้นไป ได้ 1 เท่าของเงินเดือน
salray.forEach((s)=>{
    if(s<=1000){
        bonus.push(s*2);
    }
    else if(s<=5000){
        bonus.push(s*1.5);
    }
    else if(s<=10000){
        bonus.push(s*1.2);
    }
    else{
        bonus.push(s);
    }
});
console.log(bonus);
console.log("\n");

//Tuple = 1record
let prod1: [number, string, string, number];
prod1 = [1, "Chocolate", "Pack", 100];
prod1.forEach(p=>{
    console.log(p);
})
console.log("\n");

let products: [number, string, string,number][];
products = [
    [1,"Strawberry","psc",20],
    [2,"Apple","psc",25],
    [3,"Banana","psc",10],
    [4,"Kiwi","psc",30],
    [5,"Orange","psc",25],
];

console.log("All Products");
products.forEach(p=>{
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]} Baht`);
})
console.log("\n");

let students : [string, string, number, number, number][];
students = [
    ["1001", "Kongpop", 16, 40, 0],
    ["1002", "Jakrit", 18, 42, 0],
    ["1003", "Chalermchai", 14, 48, 0],
    ["1004", "Tanad", 11, 38, 0],
    ["1005", "Chawanwit", 20, 50, 0],
]

students.forEach(s=>{
    s[4] = s[3] + s[2];
    console.log(`Id : ${s[0]}, Total ${s[4]}`);
});
console.log("\n");

//enum
enum Direction1{
    Up=1,
    Down=2,
    Left=3,
    Right=4
};

console.clear();
console.log(Direction1.Left);

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
};

console.clear();
console.log(Direction2.Left);

enum PapaerSize{
    A4 = 1,
    A5 = 2,
    A6 = 3
};

enum Oreintation{
    Portrait = 1,
    Landscape = 2
};

type Student= {
    id : number,
    name : string,
    tel : string,
    lineid? : string
}

let wasok: Student = {
    id : 101,
    name : "Wasok",
    tel : "081-9811991",
}
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
let sid: number | string;
sid = 101;
console.log(typeof(sid));
sid = "asdasdasd";
console.log(typeof(sid));

// function
function addNumber(x: number,y: number){
    return x+y;
}

function showLog(m: number| string): void{
    console.log(m);
}

showLog(10);
showLog("Ten");

//Interface Function โครงเปล่าๆ ของฟังก์ชั่น ที่ยังไม่ได้กำหนดการทำงาน
interface MathFunc{
    (x: number, y: number) : number;
}

const addNum : MathFunc = (a,b) => a+b;
const subNum : MathFunc = (a,b) => a-b;
console.clear();
console.log(addNum(1,2));
console.log(subNum(10,2));

//Interface Classes
interface Human{
    id: number,
    name: string,
    age: number,
    tel?: string,
    move(): string,
    eat(): string
};

const student : Human = {
    id: 123,
    name: "Simchai",
    age: 30,
    tel: "081-981191",
    move: function() : string{
        return "Runnig"
    },
    eat: function() : string{
        return "Meat"
    }
}
console.clear();
console.log(student.move());

const granMom : Human = {
    id: 9,
    name: "Pao",
    age: 98,
    tel: "0859851911",
    move: function() : string{
        return "Crawling";
    },
    eat: function() : string{
        return "Meat"
    }
}

console.clear();
console.log(granMom.move());

const boxerHuman : Human = {
    id: 102,
    name: "บัวขาว",
    age: 45,
    tel: "081-9811991",
    move: function() : string{
        return "Punch";
    },
    eat: function() : string{
        return "Fear"
    }
}
const pilotHuman : Human = {
    id: 104,
    name: "จอดดี้",
    age: 45,
    tel: "081-9811991",
    move: function() : string{
        return "Walk";
    },
    eat: () => "Mom U"
}
//Anurak
console.clear();
console.log(boxerHuman);
console.log(pilotHuman);

//Class
class Driver implements Human{
    id: number;
    name: string;
    age: number;
    
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    move(){
        return `${this.name} move by driving`;
    }

    eat(){
        return `${this.name} eates rice`;
    }
}

const d1 = new Driver(101,"Anurak",20);
console.clear();
console.log(d1.move());
console.log(d1.eat());


//Q1 สร้าง Tuple ของนักเรียน [id, name, mid, final, project, grade]
//                        [1, 'Name', 20, 25,30, " "]
//Output : <id>:<name>, Total: <mid+final+project>, Grade: <grade>
//Filename : Anurak_Q1.ts

//Q2 การบ้าน  implements 1 อาชีพ จาก Human
// แสดงการส้ราง object
//แสดงการ implements move() eat()
//Filename : Anurak_Q2.ts

//Generic ยังไม่สร้าง Type ตอนสร้าง Function
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let n1 = [1,2,3,4];
let n2 = ["A", "B", "C", "D"];

console.log(getArray([n1,n2]));
