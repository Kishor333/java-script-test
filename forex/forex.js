
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
  





let start = document.getElementById('start');
let fetchApiButtin = document.getElementById('fetchApi');
let mainCalcView = document.getElementById('main-calculator');
//fetch data from dataStore
async function fetchForexStore() {
    let getData = ref(database, '/forex');
    let fetchedData;
    
    await get(getData)
    .then((snapshot) => {
        if (snapshot.exists()) {
        fetchedData = snapshot.val();

        // Utilize the fetched data as needed
        // console.log("Fetched data:", fetchedData);
        
        

        // Example: Access a specific value within the data
        // const name = fetchedData.name; // Assuming a "name" property exists
        // console.log("User's name:", name);
        } else {
        console.log("No data found at the specified path.");
        }

        
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

    return fetchedData;
}

start.addEventListener("click", function() {
    fetchForexStore().then((res)=> {
        // console.log(res.updatedDate)
        mainCalcView.style.display = "flex";
        start.style.display = "none";
        checkMonthPassed(res.updatedDate);

        addOptionToSelec(res);
    })
}
)
function checkMonthPassed(lastDate) {
    const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000;
    let currentDate = new Date().getTime();
    // console.log(currentDate);
    // console.log(lastDate);
    let diff = currentDate - lastDate;
    // console.log(diff, oneMonthInMilliseconds);

    if (diff >= oneMonthInMilliseconds) {
        fetchApiButtin.style.display = "block";
    }
};

let optionListOne = document.getElementById('forexOne');
let optionListTwo = document.getElementById('forexTwo');
let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');

let currentForexOneValue;
let currentForexTwoValue;
let currencyOne;
let currencyTwo;


function addOptionToSelec(forexList) {
    
    // console.log(forexList);

    for (const [key, value] of Object.entries(forexList.conversion_rates)) {
        optionListOne.innerHTML += `<option value="${key}">${key}</option>`;
        optionListTwo.innerHTML += `<option value="${key}">${key}</option>`;
    }
    console.log(forexList.conversion_rates.BTN);
    
    optionListOne.value = forexList.base_code;
    optionListTwo.value = 'BTN';

    inputOne.value = forexList.conversion_rates[forexList.base_code];
    inputTwo.value = forexList.conversion_rates.BTN;
    currentForexOneValue = forexList.conversion_rates[forexList.base_code];
    currentForexTwoValue = forexList.conversion_rates.BTN;


function changeForexOption(currencySelect) {
    let selectedOne = optionListOne?.value;
    let selectedTwo = optionListTwo?.value;

    if(currencySelect == "firstInputChange") {
        currentForexOneValue = forexList.conversion_rates[selectedOne];
        currentForexTwoValue = forexList.conversion_rates[optionListTwo.value];
    }
    if(currencySelect == "secondInputChange") {
        currentForexTwoValue = forexList.conversion_rates[selectedTwo];
        currentForexOneValue = forexList.conversion_rates[optionListOne.value];
    }

    inputOne.value = currentForexOneValue / currentForexOneValue;
    inputTwo.value = currentForexTwoValue / currentForexOneValue;
    
    currentForexTwoValue = currentForexTwoValue / currentForexOneValue;

}



 function changeInputTwo() {

 }

optionListOne.addEventListener('change', () => changeForexOption('firstInputChange'))
    // let selectedOne = optionListOne?.value;
    // currentForexOneValue = forexList.conversion_rates[selectedOne];
    // currentForexTwoValue = forexList.conversion_rates[optionListTwo.value];

    // inputOne.value = currentForexOneValue / currentForexOneValue;
    // inputTwo.value = currentForexTwoValue / currentForexOneValue;
    
    // currentForexTwoValue = currentForexTwoValue / currentForexOneValue;



    // currentForexOneValue = currentForexOneValue /currentForexOneValue
//     console.log('value changed', selectedOne,currentForexOneValue);

//     console.log('current 1',currentForexOneValue)
// console.log('current 2',currentForexTwoValue)
// });

optionListTwo.addEventListener('change', ()=> changeForexOption('secondInputChange'));
    // let selectedTwo = optionListTwo?.value;

    // currentForexTwoValue = forexList.conversion_rates[selectedTwo];
    // currentForexOneValue = forexList.conversion_rates[optionListOne.value];

    // inputOne.value = currentForexOneValue / currentForexOneValue;
    // inputTwo.value = currentForexTwoValue / currentForexOneValue;

    // currentForexTwoValue = currentForexTwoValue / currentForexOneValue;

//     console.log('value changed', selectedTwo, currentForexTwoValue);
//     console.log('current 1',currentForexOneValue)
// console.log('current 2',currentForexTwoValue)
// });




inputOne.addEventListener('input', ()=>{
    let changedValue = inputOne.value;
    // console.log(changedValue * inputTwo.value);
    inputTwo.value = changedValue * currentForexTwoValue;
    // console.log(changedValue * forexList.conversion_rates.BTN);
});
}