function sum(a, b){
    return a + b;
}

var sum = function(a, b){
    return a + b;
}

function sum(a, b) {
    if (a === undefined) {  
        а = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}

// пример с одним аргументом
function square (number) {
    return number * number;
}

//пример без аргументов
function printHello() {
    console.log('hello');
}

var numbers = [1, 8, 3, 44, 9, 151, 18, 4];
numbers.sort(function(a, b) {
    return a - b;
});

numbers.sort(srtAbc);

function sortAbc(a, b){
    return a - b;
}

var person = {
    name: 'Jonh Doe',
    age: 44,
    languages: ['MHTL', 'CSS', 'Javascript'],
    greet: function(_this) {
        console.log(_this)
        this.languages.forEach(function(lang) {
            console.log(this.name, lang)
        })
    }
}

