var config = {
    apiKey: "AIzaSyBjrb-E7yl9T6KIE5hbQovVJPcHivxloXg",
    authDomain: "slac-cde86.firebaseapp.com",
    databaseURL: "https://slac-cde86.firebaseio.com",
    storageBucket: "slac-cde86.appspot.com",
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    function sendEmail() {
      var em = document.getElementById('em').value;
      var up = {}
      up[em] = true; 
      if(em != " ") {
        firebase.database().ref('emails/').push().set( {
          "email" : em
        });
        myFun();
      }

    }