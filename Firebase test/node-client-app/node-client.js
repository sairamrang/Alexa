var firebase = require("firebase-admin");
var serviceAccount = require('./service-account.json');

firebase.initializeApp({
    'credential': firebase.credential.cert(serviceAccount),
    'databaseURL': 'https://treasuretrove-ddd96.firebaseio.com/'
});

try{
    var ref = firebase.app().database().ref();
        

        var usersRef = ref.child("questions");
        // Create a new ref and log it’s push key
        var userRef = usersRef.push();
        console.log('user key', userRef.key);
        // Create a new ref and save data to it in one step
        var userRef = usersRef.push({
            profilePicUrl: 'x/images/profile_placeholder.png',
            text: 'first question from node client admin app ' + new Date()
        });

}
catch(error) {
    console.error(error);
  }
