// First way of accessing element
document.querySelector('#title').innerHTML += " Hossam Abouadma"

// Second way of accessing element
// document.getElementById('title')

//change css
// document.querySelector('#title').style.fontSize = '16px'

// function changeTitleToRed() {
//     document.querySelector('#title').style.color = 'red'
//     console.log('clicked')
// }

function toggleDarkMode() {
    document.querySelector('body').classList.toggle('dark-theme')
}
