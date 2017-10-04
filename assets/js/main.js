var config = {
    apiKey: “AIzaSyDdsF_ftWEWn6TJH4A02STvg2eqggNNqKs”,
    authDomain: “employeedata-95cee.firebaseapp.com”,
    databaseURL: “https://employeedata-95cee.firebaseio.com“,
    projectId: “employeedata-95cee”,
    storageBucket: “employeedata-95cee.appspot.com”,
    messagingSenderId: “1049794823131”
  };
firebase.initializeApp(config);

var database = firebase.database()

$(button).on('click', function () {
  //get all form data
  var name = $('#name').val().trim()
  var role
  var startDate
  var payRate

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    payRate: payRate
  })
  //send data to firebase
})

database.ref().on('value', function (snapshot) {
  var val = snapshot.val()
})