// import { json } from "express";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  child,
  get,
  getDatabase,
  ref,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(app);
const database = getDatabase(app);

const analytics = getAnalytics(app);

//auth

if (window.location.pathname === "/index.html") {
  const submitData = document.getElementById("submitData");

  submitData.addEventListener("click", () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userName = document.getElementById("name").value;

    console.log(email);

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //signIN
          var user = userCredential.user;

          //insert in DB
          set(ref(database, "users/" + user.uid), {
            userName: userName,
            email: email,
            password: password,
          })
          .then(() => {
              //data saved
              alert("Hello: User created successfully");
              
          })
            .then(()=>{
              console.log('killer' + user.uid, user);
              setSession(user.uid, user);
            })
            .catch((error) => {
              //error
              alert(error);
              alert("Hello: User creation failed");
            });
        })
        
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    }
  });
}

//login

if (window.location.pathname === "/login-form.html") {
  const loginData = document.getElementById("loginData");

  loginData.addEventListener("click", () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var userName = document.getElementById('name').value;

    console.log(email);

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert("Hello: User logged in successfully" + user.uid);
          // ...
          console.log(auth.currentUser.uid);
          var lgDate = new Date();

          update(ref(database, 'users/' + user.uid), {
              lastLogin : lgDate,
          });

          setSession(user.uid, user);
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }


  });
};
// const dbRef = ref(getDatabase());
  
function setSession(uid, user)  {
  get(child(ref(database), "users/" + uid)).then((snapshot) => {
    
    if (snapshot.exists()) {
      sessionStorage.setItem(
        "userInfo",
        JSON.stringify({
          name: snapshot.val().userName,
          // loginTime: snapshot.val().lastLogin
        })
      );

      sessionStorage.setItem("userCred", JSON.stringify(user));
      window.location.href="/home.html";
    } else {
      console.log("nooo");
    }
  });
}