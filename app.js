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

function sum(num1, num2){
    return num1+num2;
}