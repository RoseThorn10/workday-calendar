// format date and time in jumbotron
var date = moment().format("LLLL");
$('#currentDay').text(date);

// get input from textarea
// save input to local storage as key(id), value(input) pair
$(document).ready(function() {
    $(".saveBtn").click(function(event) {   
        console.log("Start Event");
        var txt = $( event.target ).parent().children(".description").val();

        var key = $( event.target ).parent().children(".description").attr("id");

        console.log(`key ${key}, value ${txt}`);
        localStorage.setItem(key, txt);

        
        
    });
});