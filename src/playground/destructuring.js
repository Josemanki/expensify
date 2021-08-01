//Objects

// const person = {
//     name: 'Jose',
//     age: 22,
//     location: {
//         city: 'Berlin',
//         temperature: 25
//     }
// }

// const { name, age } = person

// console.log(`${name} is ${age}.`)

// const { temperature: temp, city } = person.location

// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName) // Penguin / Self-Published


// Arrays

const address = ['Ruschestr. 12', 'Berlin', 'Germany', '10367']
const [, city, country = 'Berlin' ] = address;

console.log(`You are in ${city}, ${country}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [ itemName, , mediumPrice ] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)