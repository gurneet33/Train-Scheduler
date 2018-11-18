
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAH56qRhsjke7F6afoL16FewHv-qPtE_5A",
    authDomain: "train-a75c5.firebaseapp.com",
    databaseURL: "https://train-a75c5.firebaseio.com",
    projectId: "train-a75c5",
    storageBucket: "",
    messagingSenderId: "748195688354"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

    // on click in front-end
  $("#submit-button").on("click",function(event){
    event.preventDefault();
  
    var formTrainName = $("#name-input").val().trim();
    var formDestination = $("#destination-input").val().trim();
    var formTrainTime = $("#train-time").val().trim();
    var formFrequency = $("#frequency-input").val().trim();
       


    // Save the train data in Firebase
  database.ref("train/").push({
    databaseTrainName : formTrainName,
    databaseDestination : formDestination,
    databaseFrequency : formFrequency,
    databaseTrainTime : formTrainTime
    

  }).then(function(){
        console.log("saved");
  });

})


// retreiving data from firebase

database.ref("train/").on("child_added", function(snapshot){
    var databaseObjeact =  snapshot.val();

    var tr = $("<tr>");
    var tname = $("<td>");
    var tdest = $("<td>");
    var tfreq = $("<td>");
    var tnext = $("<td>");
    var taway = $("<td>");

    tname.append(databaseObjeact.databaseTrainName)
    tdest.append(databaseObjeact.databaseDestination)
    tfreq.append(databaseObjeact.databaseFrequency)
    // tnext.append(databaseObjeact.databaseTrainName)
    // tname.append(databaseObjeact.databaseTrainName)
    tr.append(tname,tdest,tfreq)
    $("tbody").append(tr)
    // $("#tdest").append(databaseObjeact.databaseDestination)
})
    // retreiving data from firebase
// database.ref("train/").on("child_added", function(snapshot) {
//     var databaseObject = snapshot.val();

//    var tr = $("<tr>");
//    tr.addClass("table table-striped");
//    var tdName = $("<td>");
//    var tdRate = $("<td>");
//    var tdRole = $("<td>");
//    var tdDate = $("<td>");
//    var tdMonths = $("<td>");
//    var tdMonthlyRate = $("<td>");
   

//     tdName.append(databaseObject.databaseTrainName);
//     tdRate.append(databaseObject.databaseMinutesAway);
//     tdRole.append(databaseObject.databaseDestination);
//     tdDate.append(databaseObject.databaseFrequency);

//     var startDate = databaseObject.databaseFrequency;

//     //Todays date
//     var endDate = new Date(); 
    
//     var months = moment(new Date(endDate)).diff(new Date(startDate), 'months', true);
//     var monthsRounded = Math.round(months,2);

//     tdMonths.append(monthsRounded);

//     var monthlyRate = months * databaseObject.databaseMinutesAway;

//     var monthlyRateRounded = Math.round(monthlyRate,2);

//     tdMonthlyRate.append("$" + monthlyRateRounded);

//     tr.append(tdName,tdRate,tdRole,tdDate,tdMonths,tdMonthlyRate);

//     $("#results").append(tr);
//     // If any errors are experienced, log them to console.
// }, function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   });

  

  