
console.log('3 sekund kuting...');

// function setTimeout(){
//     console.log('Hello World');
// }
// setTimeout(3000)

// setTimeout(() => {
//     console.log('Hello World');
// },3000)

let a = setInterval(() => {
    console.log('Hello World');
},300)

setTimeout(() => {
    clearInterval(a)
},3000)
