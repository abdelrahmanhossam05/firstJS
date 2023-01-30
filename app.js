// // fetch('https://jsonplaceholder.typicode.com/users/1')
// const emailRef = document.querySelector('.email')
// // 1. Then
// // fetch('https://jsonplaceholder.typicode.com/users/1').then(response => {
// //     response.json().then(data => {
// //         emailRef.innerHTML = data.email;
// //     })
// // })

// // 2. Async/Await
// async function main() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await response.json()
//     emailRef.innerHTML = data.email
// }

// main();



// function sum(num1, num2){
//     return num1+num2;
// }

// console.log(sum(2, 4));

// function hoursintoseconds(hour){
//     return hour*3600;
// }

// console.log(hoursintoseconds(3));

// function calcPerimeter(base, height){
//     return 2*base + 2*height;
// }

// console.log(calcPerimeter(10, 2));

// function calcAreaTriangle(base, height){
//     return 0.5 * base * height;
// }

// console.log(calcAreaTriangle(20, 20));

// function appendFrontend(str){
//     return str + 'Frontend'
// }

// console.log(appendFrontend('hello'))

function sumGreaterThan100(num1, num2) {
    if(num1 + num2 > 100) return true;
    else return false;
}
console.log(sumGreaterThan100(51, 50));