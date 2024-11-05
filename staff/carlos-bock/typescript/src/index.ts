//import axios from "axios";
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

type Book = {
    title: string;
    author: string;
    comments?: string[];
};

/////////////Clase 2 ///////////////////


const theBook: Book = {
    title: "the book",
    author: "jiraiya",
    comments:[""]
};

const printBookInfo = (book: Book): void => {
    if (book.comments) {
        book.comments.forEach(data => console.log(data));
    }

    console.log(book.author, book.title);
}; 

printBookInfo(theBook);

type Student = {
    name: string;
    note: number | string;
};

function getStudentNote(student: Student):string {
    if (typeof student.note === "string") {
        return `${student.name} has ${student.note}`;
    }

    return `${student.name} has ${student.note.toString()}`
    //    return student.note.toString(); 
}

console.log(getStudentNote({name:"Juan", note: 91}));

//type never
const throwException = (message: string): never => { //nunca va retornar algo, pero es different que void, es más para errores, también en switch cases
    throw new Error(message); 
};

type CreditCardPayment = {
    method: "creditCard";
    cardNumber: string;
    cvv: string;
    experitationDate: string;
};

type PaypalPayment = {
    method: "paypal";
    email: string;
};

type BankTransferPayment = {
    method: "bankTransfer";
    accountNumber: string;
    routingNumber: string;
};


type Bizum = {
    method: "bizum"
    phoneNumber: number;
    ammount: number;
};

type CashPayment = {
    method: "cash";
    amount: number;
};

type Payment = 
| CreditCardPayment
| PaypalPayment
| BankTransferPayment
| CashPayment
| Bizum;


const processPayment = (payment: Payment):string => {
    switch(payment.method) {
        case "creditCard":
            return`processing payment with the ${payment.cardNumber}`;
        case "cash":
            return `processing the amount ${payment.amount} of cash`;
        case "paypal":
            return `processing payment with email ${payment.email}`;
        case "bankTransfer":
            return `processing payment on ${payment.accountNumber} account`;
        case "bizum":
            return `processing payment on ${payment.phoneNumber} account`;
        default:
                const neverHappend:never = payment; //switch cases también usan never
                return neverHappend;
    }
};

console.log(processPayment({method:"creditCard", cardNumber:"12325465465", cvv:"211", experitationDate:"12/06/2030"}));

//Enums

enum OrderStatus {
    DELIVERED,
    PENDING,
    CANCELED,
    SHIPPED,
}

function isDelivered(status:OrderStatus):boolean {
    return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(OrderStatus.PENDING));

enum GameDifficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
    INSANE = "insane",
};

function chooseDifficulty (difficulty: GameDifficulty):void {
    if (difficulty === GameDifficulty.EASY) {
        console.log("have fun!");
    } else if (difficulty === GameDifficulty.MEDIUM){
        console.log("enjoy the ride!");
    } else if (difficulty === GameDifficulty.HARD) {
        console.log("up for the challenge?");
    } else {
        console.log("Are you nuts?")
    }
}

console.log(chooseDifficulty(GameDifficulty.INSANE));


//tuples

const coordinates: [number, number] = [564654654, 654654.4454];

const coordinates2: Array<string | number> = ["654654", 564654654];

const coordinates3: (string | number)[] = [64654, "56465", 7897.654658]

const coordinates4: [string,number, string,number] = [
    "lat:", 56465.654,
    "lon:", 64564.55,
];


////////////// Clase 3 ///////////////

//type narrowing

const triple = (value:number | string): number | string => {
    if (typeof value === "string"){
        let result = "";
        for (let i = 0; i < 3; i++) {
            result+=value;
            
        }
        //value.split("").forEach((char)=> (result += char) );
    }
    
    return value ** 3;
}

console.log(triple(3));
console.log(triple("ja"));

type Cat = {
    meow():void;
};

type Wolf = { 
    bark():void; //es un lobo triste
};

const animalSound = (animal: Cat | Wolf):void => {
    if("meow" in animal) {
        console.log("Meeeowwww");

        return;
    };

    console.log("Aaaauuuuu!")
};

animalSound({bark(){
    "guagau";
},
});


// in operator
type Movie = {
    title: string;
    duration: number;
};

type TVShow ={
    title: string;
    numberOfEpisodes: number;
    episodeDuration: number;
};

type Multimedia = Movie | TVShow;

function getRunTime(multimedia: Multimedia): number {
    if ("numberOfEpisodes" in multimedia) {
        return multimedia.episodeDuration * multimedia.numberOfEpisodes;
    }

    return multimedia.duration;
}

const esreck: Movie = {
    title: "Shreck",
    duration: 90,
};

const tbbt: TVShow = {
    title: "The big ban theory",
    numberOfEpisodes: 279,
    episodeDuration: 48,
};

const esreckRunTime= getRunTime(esreck);
const tbbtRunTime = getRunTime(tbbt);

console.log("shreck run time->", esreckRunTime);
console.log("tbbt run time ->", tbbt);

// instanceOf operator

class Phone {
    constructor
    (public brand: string, public price: number) {}
}


class Phone2 {
    brand: string;
    price: number;
    popular: boolean = true;

    constructor (brand: string, price: number) {
        this.brand = brand;
        this.price = price;
    }
}

class Tablet {
    constructor(
        public brand: string,
        public price: number,
        public size: number
     ) {}
};

const phone = new Phone("Pixel", 450);
const table = new Tablet("Samsung", 583, 7);

const getDeviceInfo = (device: Phone | Tablet): string | number=> {
    if(device instanceof Phone){
        return device.brand;
    }
  return device.size;  
};

console.log(getDeviceInfo(phone));


//truthiness guards

const printLetter = (word:string | null):string => {
    if(!word){
        throw new Error("word not provided");
    }

    return word; 
};

console.log(printLetter("mehhh"));


type Fish = {
    swim(): string;
};

type Bird = {
    fly():string;
};

//type predicates
function isFish(animal: Fish| Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function moveAnimal(animal: Fish | Bird): string {
    if(isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}

console.log(moveAnimal({fly:() => "I blieve I can fly"}));

//Discriminated union

type Email = { 
    kind: "email",
    subject: string,
    recipient: string,
};

type Sms = {
    kind: "sms",
    phoneNumber: number;
    text: string;
};

type Telegram = {
    kind: "telegram";
    userId: string;
    username: string;
};

type NotifcationMsg = Email | Sms | Telegram;

function sendNotification(notification: NotifcationMsg):void {
    switch(notification.kind) {
        case "email":
            console.log(`Sending email to ${notification.recipient} with the subject ${notification.subject}`);
            break;
        
        case "sms":
            console.log(`Sending as to ${notification.phoneNumber}`);
            break;
        case "telegram":
            console.log(`sening message to ${notification.username}`);
            break;

        default:
            console.log("get a life O_o;");
    };
};

sendNotification({
    kind: "sms", 
    phoneNumber: 6546546546, 
    text:"help :(",
});