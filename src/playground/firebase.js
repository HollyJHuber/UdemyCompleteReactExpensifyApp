import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDvOhY5fQssJ__boyebQ8ehdJxSYpH8hDY",
  authDomain: "expensify-15569.firebaseapp.com",
  databaseURL: "https://expensify-15569.firebaseio.com",
  projectId: "expensify-15569",
  storageBucket: "expensify-15569.appspot.com",
  messagingSenderId: "16940661652"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed < expense deleted
database.ref('expenses')
  .on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

// child_changed < expense updated
database.ref('expenses')
  .on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  //child_added < new expense added
  database.ref('expenses')
  .on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: "new Tivo",
//   note: "Bolt replacement for Roamio",
//   amount: 79,
//   createdAt: '8/1/2018'
// });


// database.ref('notes/-LJpKSVP_NNO96cUa4Nd').update({
//   body: "pay bills"
// });

// database.ref('notes/-LJpKSVMmt1o6RRE-tnz').remove();

// database.ref('notes').push({
//   title: "To Do",
//   body: "finances"
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Murphy',
//     'job/title': 'lazy lout',
//     'job/company': 'Radical'
//   });
// }, 3500);


// database.ref('job/title')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('error fetching data', e)
//   });

// database.ref().set({
//   name: 'Monty',
//   age: 3,
//   favorites: 'bunnies',
//   job: {
//     title: 'killer',
//     company: "Acme"
//   },
//   location: {
//       city: 'Siberia',
//       country: 'United States'
//   }
// }).then(() => {
//   console.log ('first data saved!');
// }).catch((e) => {
//   console.log('error setting data', e);
// });

// database.ref().update({
//   favorites: 'treats',
//   'job/title': 'paid Assassin',
//   'location/city': 'Muskegon'
//});
// database.ref('isCat')
//   .remove()
//   .then(() =>{
//     console.log('is Cat removed');
//   }).catch((e) => {
//    console.log("could not remove isCat", e);
// });