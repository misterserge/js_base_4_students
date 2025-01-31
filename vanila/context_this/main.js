function log(){
    setTimeout(() => {
        console.log(this)
    }, 200);
    const that = this
    setTimeout(function() {
        console.log(that)
    }, 200);
} 
//log()

function printThis(){
    console.log(this);
}
printThis()
const myObj = {x: 1, y:4}
printThis = printThis.bind(myObj)
printThis()

const person = {name: 'Serge', pfor: 'web-dev', hi() {console.log("hello, my name is", this.name)}}

person.hi();

const person2 = {name: 'Peter'}
person.hi.call(person2)
person2.hi = person.hi
person2.hi();

const numbers = [1,2,3]
console.log(Math.max.apply(null, numbers))
console.log(Math.max.call(null, ...numbers))
