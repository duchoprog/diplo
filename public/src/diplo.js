function sendMessage(){
    var a=1
}

function signInOrUp(){
    mail=document.getElementById("mail").value
    console.log(mail)
    name=document.getElementById("name").value
    console.log(name)
    pass=document.getElementById("pass").value
    console.log(pass)
    firebase.auth().signInWithEmailAndPassword(mail, pass).then(function(e){
      console.log(e.user.email)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)

        firebase.auth().createUserWithEmailAndPassword(mail, pass).then(function(e){
          console.log(e)
        })
        .catch(function(error) {
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