interface Human{
    id: number,
    name: string,
    age: number,
    tel?: string,
    move(): string,
    eat(): string
}

class Developer implements Human{
    id: number;
    name: string;
    age: number;
    tel?: string;

    constructor(id: number, name: string, age: number, tel?: string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.tel = tel;
    }

    move(){
        return `${this.name} Move by StackOverflow, GitClone.`;
    }
    
    eat(){
        return `${this.name} drinking Coffee everday.`;
    }
}

const dev1 = new Developer(1118700004771,"Anurak",20,"082-3632737");
console.clear();
console.log(dev1.move());
console.log(dev1.eat());