// class #6
//class access modifyer

class Animal {
    private _age: number = 0; //year
    //constructor(name: string, type: "dog" | "cat")
    constructor(
        public name: string, 
        public species: string, 
        public animalColor: string
    ){};

    get age():number {
        return this._age;
    }

    set age(newAge:number){
        if (newAge>20) {
            throw new Error("That is not possible :(");
        }
        this._age = newAge;
    }
    protected makeNoise(noise:string):void{
        console.log(noise);
    }
    //abstract makeNoise2(noise:string):void
}

const dog = new Animal("Perrito", "dog", "brown");

dog.age = 12;

console.log(dog.age);

////////////////////

class Gato extends Animal {
    constructor(name:string, species:string, color: string){
        super(name,species,color);
    }
    /*makeNoise(noise: string): void { //if you add protected at beggining method is not accessible:
        console.log(noise);
    }*/    
    eat(food:string):string{
        return `this ${this.name} is eating ${food}`
    }
}

const gato = new Gato("Puss", "British Short Hair", "orange");

gato.makeNoise("Fear me!"); //not accessible protected.

console.log(gato.eat("leche"));

//////////////interfaces obligan a heredar 
type Role = "team lead" | "sr developer" | "jr developer" | "Prj Mgt";

interface IWorker {
    task: string[];
    calculateSalary(): number;
    assignTasks(task:string[]):void;
}

class Workers implements IWorker {
    private salary: number = 1200;
    tasks: string[] = [];

    constructor(public name:string, public role: Role ){
        this.salary = baseSalary;
    }

    calculateSalary(): number |string {
        switch(this.salary) {
            case "jr developer":
                return this._salary = 1300
            case "sr developer":
                return this._salary = 3500
            case "team lead":
                return this._salary = 4200
            case "Prj Mgt":
                return this._salary = 6000
            default:
                return "should study";
        }
    }

    assignTasks(task: string[]): void {
        task.forEach((newTask) => this.tasks.push(newTask));
    }
}

const worker = new Worker("Lala", "team lead");

worker.calculateSalary();
worker.assignTasks(["ask for a reunion", "check pull requests"]);