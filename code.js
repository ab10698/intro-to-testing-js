// helloWorld function
let test = true;
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input){
    if(input === undefined) {
        return "Hello World";
    } else if(input === true){
        return "Hello World";
    } else {
    return "Hello " + input;
    }
}

function isFive(input) {
    if (input === 5) {
        return true
    } else if (input === "5") {
        return false;
    }
}

// console.log(typeof sayHello());
