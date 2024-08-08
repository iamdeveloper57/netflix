// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBNUwLszhi1UEvky3B8mUcc7UENnCsHIoU",
    authDomain: "netflix-d2838.firebaseapp.com",
    projectId: "netflix-d2838",
    storageBucket: "netflix-d2838.appspot.com",
    messagingSenderId: "1097940949634",
    appId: "1:1097940949634:web:6c12d05ed0672f31aab29b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);


  let btn = document.querySelector(".getstartbtn");

  btn.addEventListener("click", function (){
    let email = document.querySelector(".email").value;
    // const encodedEmail = encodeURIComponent(email);
    const userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   if(email === ""){
   alert("fill the field");
   }
   else{
    set(ref(db, 'usersemail/' + userId), {
        email:email
    });
    alert("email added");
    document.querySelector(".email").value = "";
   }

  });
  