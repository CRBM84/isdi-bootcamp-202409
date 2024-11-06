class Animal {
    #age = 1;

    #getAnimalInfo(){
        console.log("info about animal");
    }

    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }

    get age() {
        return this.#age;
    }
}

const dog = new Animal("perrito", "elTío", "chiquito");

console.log((dog.age=34));
console.log(dog.age);