const sum =(a:number,b:number):number => a + b;

const result1 = sum(4,2);
const result2 = sum(12,2);

console.log("result1:>>", result1);
console.log("result2:>>", result2);

const multiply = (...rest:number[]): number =>{
    return rest.reduce((total, number) =>{
        total *= number;

        return total;
    });
};

const multiplyResult1 = multiply(2,4,5);
const multiplyResult2 = multiply(2,5,6);

console.log("multiplyresult1:>>", multiplyResult1);
console.log("multiplyresult2:>>", multiplyResult2);

type Person = { //type alias, custom type
    name: string;
    age: number;
}; //type para algunas empresas interface para otras (especialmente las OOP)

const pop: Person = {
    name: "Pep", // set to type string
    age: 23, // set to typ number
};

interface Dog { // parecido a java, es como un contrato que se tiene cumplir 
    name: string;
    age: number;
}

interface SpecialDog extends Dog { //hereda de otro interface
    skills: Array<string>; // also -> string[]
}

function printPerson (person:Person):void { //typing your parameters *** :void means no return value
    console.log(person);
}

printPerson({name:"Charly", age:39});

const person: Person[] = [
    {
        name: "Roby",
        age: 40,
    },
    {
        name: "Lara",
        age: 38,
    }
];

type Character = {
    name:string;
    kind: "barbarian" | "rogue" | "mage"; // type union in TS  **** type literals también  *** no es string
    score: number | string; // union type
}

const characterMakeNoise = (character: Character): string => {
    if (character.kind === "barbarian") {
        return `${character.kind} screams: Ahhhhh`;
    } else if (character.kind === "rogue") {
        return `${character.kind} says:...`;
    } else {
        return `${character.kind} stays: what's up`;
    }
};

const warrior: Character = {
    name: "Conan",
    score: 200,
    kind: "barbarian"
}

console.log(characterMakeNoise(warrior));


