const myAge = 21

let result = null

if (myAge < 18) {
    result = 'Что на завтра по математике?'
} else {
    result = 'Вы совершеннолетний'
}

console.log (result)

myAge > 18 ? console.log ('Вы совершеннолетний') : console.log ('Что на завтра по математике?')


let age = 14

switch (age) {
    case 13: 
        alert('Вам еще нет 18')
        break
    case 14: 
        alert('Вам еще нет 18')
        break
    case 15: 
        alert('Вам еще нет 18')
        break
    case 16: 
        alert('Вам еще нет 18')
        break
    case 17: 
        alert('Вам еще нет 18')
        break
    case 18:
        alert ('Вы совершеннолетний')
        break
    case 19:
        alert ('Вы совершеннолетний')
        break
    case 20:
        alert ('Вы совершеннолетний')
        break
    case 21:
        alert ('Вы совершеннолетний')
        break
}