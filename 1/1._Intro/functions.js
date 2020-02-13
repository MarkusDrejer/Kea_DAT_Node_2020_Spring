function addition(a, b) {
    return a + b;
}

console.log(addition(2, 5));

//always use let and const over var as var is used in global scope

var example1 = 1 // can be used in global scope across several files and will therefore result in problems in e.g for loops
let example2 = 2; // is only defined and can be used in a block{} like a for loop
const example3 = 3; // Final, constant

function pokeMe() {
    console.log("Meow")
}

pokeMe();

function approachSomeone(someoneToPoke) {
    console.log("tip tap tip tap");
    someoneToPoke();
}

approachSomeone(pokeMe);

const introduce = (name) => {
    console.log("Hello my name is", name);
}

introduce("Markus");

const prepareIntroduction = (introducerFunction, name) => {
    console.log("Hmmhmhhhmmhhm");
    introducerFunction(name);
}

prepareIntroduction(introduce, "Markus");

const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

let myself = {
    hobby: pokeMe
};

aboutMe(myself);

const callLater = {
    toCall: (name) => console.log(name)
};

callLater.toCall("Nick");