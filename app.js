//this variable contains my name 
var myName = "Elliott";
// This variable contains the number of states
var states = 50;
//Variable sum is the sum of 5 and 4
var sum = console.log(5 + 4);
//Hello World
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        alert(this.greeting);
    };
    ;
    return Greeter;
}());
;
var newGreeting = new Greeter("Hello World");
newGreeting.greet();
//Age Check Verification 
var AgeCheck = /** @class */ (function () {
    function AgeCheck(name, age) {
        this.name = name;
        this.age = age;
    }
    AgeCheck.prototype.checkAge = function () {
        if (this.age < 21)
            alert("Sorry " + this.name + ", you aren't old enough to view this page!");
    };
    ;
    return AgeCheck;
}());
;
var checkCharles = new AgeCheck("Charles", 21);
checkCharles.checkAge();
var checkAbby = new AgeCheck("Abby", 27);
checkAbby.checkAge();
var checkJames = new AgeCheck("James", 18);
checkJames.checkAge();
var checkJohn = new AgeCheck("John", 17);
checkJohn.checkAge();
//Favorite vegetable log
var VegetableList = /** @class */ (function () {
    function VegetableList(faveVeg) {
        this.faveVeg = faveVeg;
    }
    VegetableList.prototype.logVeg = function () {
        for (var i = 0; i < this.faveVeg.length; i++) {
            console.log(this.faveVeg[i]);
        }
        ;
    };
    ;
    return VegetableList;
}());
;
var newVegList = new VegetableList(["onions", "peppers", "spinich"]);
newVegList.logVeg();
//logging pet name and breed 
var Pet = /** @class */ (function () {
    function Pet(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    Pet.prototype.logPet = function () {
        console.log(this.name);
        console.log(this.breed);
    };
    ;
    return Pet;
}());
;
var newPet = new Pet("Pumpkin", "Tabby");
newPet.logPet();
//Object Array age check
var checkAgeArray = [
    new AgeCheck("Daisy", 13),
    new AgeCheck("Mae", 35),
    new AgeCheck("Katrina", 23),
    new AgeCheck("Fauna", 25),
    new AgeCheck("Bones", 12)
];
for (var i = 0; i < checkAgeArray.length; i++) {
    checkAgeArray[i].checkAge();
}
;
//get string length
var MsgMeasure = /** @class */ (function () {
    function MsgMeasure(msg) {
        this.msg = msg;
    }
    MsgMeasure.prototype.getLength = function () {
        if (this.msg.length % 2 == 0) {
            console.log("The world is nice and even!");
        }
        else {
            console.log("The world is an odd place!");
        }
        ;
    };
    ;
    return MsgMeasure;
}());
;
var newMeasure = new MsgMeasure("Hello World");
newMeasure.getLength();
