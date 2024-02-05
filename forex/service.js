

let api = "https://v6.exchangerate-api.com/v6/ab1768ef61616c31b88d5543/latest/USD";

// let apiData = "https://js-test-dd7db-default-rtdb.firebaseio.com/user";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    child,
    get,
    getDatabase,
    ref,
    set,
    update,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// import { config } from "nodemon";

const firebaseConfig = {
    apiKey: "AIzaSyD4zLa7FfO8DVR7S04RBIkU0g884itmO5o",
    authDomain: "js-test-dd7db.firebaseapp.com",
    databaseURL: "https://js-test-dd7db-default-rtdb.firebaseio.com",
    projectId: "js-test-dd7db",
    storageBucket: "js-test-dd7db.appspot.com",
    messagingSenderId: "889176968753",
    appId: "1:889176968753:web:89ed1a71f5017842d80f10",
    measurementId: "G-SZY5NXVJL1",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
  const database = getDatabase(app);
  
//   const analytics = getAnalytics(app);
  





let fetchApiButtin = document.getElementById('fetchApi');


let forexData;


// const newData = {
//     name: "John Do",
//     age: 26
//     // ...other data properties
//   };


// create or update forex list in db
  async function writeOrUpdateForex(dataBasePath, dataObject) {
    try {
        const dataRef = ref(database, dataBasePath);
        await get(dataRef).then(snapshot=>{
            if(snapshot.exists) {
                update(dataRef, {...dataObject, updatedDate:  new Date().getTime()});
                console.log("Data will be updated at:", dataBasePath);
            }
            else {
                set(dataRef, dataObject);
                console.log("Data will be written to new path:", dataBasePath);
            }
        });
        return dataObject;
    }
    catch (error){
        console.error("Error writing or updating data:", error);
    }

  }


//   writeOrUpdateForex(dataBasePath, dataObject)

//   writeOrUpdateForex("/forex", newData)
//     .then((res) => {
//         // Data written or updated successfully
//         console.log('success:', res)
//     })
//     .catch((error) => {
//         // Handle errors here
//         console.log('there was an error in your code Kishor', error)
//     });


//fetch forex api
async function fetchForex() {
    let response = await fetch(api);
    let data = await response.json();
    // forexData = data;
    // console.log(data);
    // fetchForexStore();
    writeOrUpdateForex("/forex", data)
}


fetchApiButtin.addEventListener("click", fetchForex);

// console.log('fetched data 1', fetchedData)