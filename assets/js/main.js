var config = {
    apiKey: 'AIzaSyDOiqvIINcgTDYCMls3K22MZLIelE_b7aA',
    authDomain: 'first-firebase-project-cbdc4.firebaseapp.com',
    databaseURL: 'https://first-firebase-project-cbdc4.firebaseio.com',
    projectId: 'first-firebase-project-cbdc4',
    storageBucket: 'first-firebase-project-cbdc4.appspot.com',
    messagingSenderId: '774264846289'
  };
firebase.initializeApp(config);

var database = firebase.database()
var button = $('#submitEmployee')

$('#submitEmployee').on('click', function (event) {
  event.preventDefault()
  console.log('here')
  //get all form data
  var name = $('#nameInput').val().trim()
  var role = $('#roleInput').val().trim()
  var startDate = $('#yearInput').val().trim()
  var payRate = $('#payRateInput').val().trim()

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    payRate: payRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
  //send data to firebase
})

database.ref().on('child_added', function (snapshot) {
  var val = snapshot.val()
  addEmployee(val)
})

function addEmployee( obj ) {
  container = $('<div class="row">')
  container.append($('<div>').addClass('col-xs-3').text(obj.name))
  container.append($('<div>').addClass('col-xs-1').text(obj.role))
  container.append($('<div>').addClass('col-xs-2').text(obj.startDate))
  container.append($('<div>').addClass('col-xs-2').text(obj.startDate))
  container.append($('<div>').addClass('col-xs-2').text(obj.payRate))
  container.append($('<div>').addClass('col-xs-2').text(obj.payRate))
  container.appendTo('#current-employees-div')
}