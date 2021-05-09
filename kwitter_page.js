
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCIICT45R-pyvQ0Pr7AZzVkhOTjUatUirw",
      authDomain: "classtest-e1583.firebaseapp.com",
      projectId: "classtest-e1583",
      storageBucket: "classtest-e1583.appspot.com",
      messagingSenderId: "100039811812",
      appId: "1:100039811812:web:f9a836be38a216be3282f1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData()
{ 
firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
 firebase_message_id = childKey;
 message_data = childData;
//Start code

//End code
      } });  }); }
getData();
