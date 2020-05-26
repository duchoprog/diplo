function sendMessage(){
    var a=1
}

function signInOrUp(){
    mail=document.getElementById("mail").value
    console.log(mail)
    pass=document.getElementById("pass").value
    console.log(pass)
    firebase.auth().signInWithEmailAndPassword(mail, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)

        firebase.auth().createUserWithEmailAndPassword(mail, pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)})
        
        // ...
      });
}
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     console.log("alguien logueado")
    } else {
      // User is signed out.
      // ...
    }
  });