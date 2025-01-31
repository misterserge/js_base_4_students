//before
const arr = [1, 2, 3, 4];

function munSquared(num){
    return num * num;
}

function divideOn2(num){
    return num / 2;
}

function copyArrAndSquare(arr) {
    const output = [];
    for(i = 0; i < arr.length; i ++) {
        output.push( arr[i] ** 2 );
    }
    return output;
}

function copyArrAndDivideOn2(arr) {
    const output = [];
    for(i = 0; i < arr.length; i ++) {
        output.push( arr[i] ** 2 );
    }
    return output;
}

//after
function copyArrAndDoSomething(arr, instructions) {
    const output = [];
    for(i = 0; i < arr.length; i ++) {
        output.push( instructions(arr[i]) );
    }
    return output;
}
//shorter
function copyArrAndDoSomethingMap(arr, instructions) {
    return arr.map( (el) => instructions(el) );
}

copyArrAndDoSomething(arr, munSquared);
copyArrAndDoSomething(arr, divideOn2);