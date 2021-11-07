//this variable contains my name 
let myName: string = "Elliott";


// This variable contains the number of states
const states: number = 50;


//Variable sum is the sum of 5 and 4
let sum = console.log(5 + 4);

//Hello World
class Greeter {
    constructor(public greeting: string) {
    }

    greet() {
        alert(this.greeting);
    };
};

let newGreeting = new Greeter("Hello World");
newGreeting.greet();


//Age Check Verification 
class AgeCheck {
    constructor(public name: string, public age: number) {
    }

    checkAge() {
        if (this.age < 21) 
        alert(`Sorry ${this.name}, you aren't old enough to view this page!`);
    };
};

let checkCharles = new AgeCheck("Charles", 21);
checkCharles.checkAge();

let checkAbby = new AgeCheck("Abby", 27);
checkAbby.checkAge();

let checkJames = new AgeCheck("James", 18);
checkJames.checkAge();

let checkJohn = new AgeCheck("John", 17);
checkJohn.checkAge();


//Favorite vegetable log
class VegetableList {
    constructor(public faveVeg: string[]) {
    }
    
    logVeg() {
        for(let i = 0; i < this.faveVeg.length; i++) {
            console.log(this.faveVeg[i]);
        };
    };
};

const newVegList = new VegetableList(["onions", "peppers", "spinich"]);
newVegList.logVeg();


//logging pet name and breed 
class Pet {
    constructor(public name: string, public breed: string) {
    }

    logPet() {
        console.log(this.name);
        console.log(this.breed);
    };
};

let newPet = new Pet("Pumpkin", "Tabby");
newPet.logPet();


//Object Array age check
let checkAgeArray: AgeCheck[] = [
    new AgeCheck ("Daisy", 13),
    new AgeCheck ("Mae", 35),
    new AgeCheck ("Katrina", 23),
    new AgeCheck ("Fauna", 25),
    new AgeCheck ("Bones", 12)
];

for (let i = 0; i < checkAgeArray.length; i++) {
   checkAgeArray[i].checkAge();
};


//get string length
class MsgMeasure {
    constructor(public msg: string) {
    }
    getLength() {
        if (this.msg.length % 2 == 0) {
            console.log("The world is nice and even!");
        } else {
            console.log("The world is an odd place!");
        };
    };
};

let newMeasure = new MsgMeasure("Hello World");
newMeasure.getLength();
