import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

console.log(config)

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = []
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       })
  //     })
  //     console.log(expenses)
  //   })

// database.ref('expenses').push({
//   description: `Rent`,
//   note: `Last month's rent`,
//   amount: 500,
//   createdAt: 1000
// })

// database.ref('notes').push({
//   title: 'To do',
//   body: 'Go for a run'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('name').set('Andrew Mead')


// database.ref().set({
//   name: 'Jose Hernandez',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title:'Software Developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Berlin',
//     country: 'Germany',
//   }
// }).then(() => {
//   console.log('Data is saved.')
// }).catch((e) => {
//   console.log('Failed to save:', e)
// })

// database.ref('attributes').set({
//     height: 167,
//     weight: 65
// }).then(() => {
//   console.log('Data is saved again.')
// }).catch((e) => {
//   console.log('Failed to save:', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   "job/company": 'Amazon',
//   "location/city": 'Seattle'
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data removed')
//   }).catch((e) => {
//     console.log(e)
//   })