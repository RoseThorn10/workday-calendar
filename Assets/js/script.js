// format date and time in header
var date = moment().format("LLLL");
$('#currentDay').text(date);

// get input from textarea
// save input to local storage as key(id), value(input) pair
$(document).ready(function() {
    $(".saveBtn").click(function(event) {   
        console.log("Start Event");

        // Get the element that received the event
        var targ = $( event.target );

        // it might be the icon, so check, and if so
        // get the parent (the button)
        if ( $(targ).attr("class") == "fas fa-save") {
            targ = $( targ ).parent();
        }

        // We have the button in targ, so get its sibling text box
        // and return the id or text as needed
        var txt = $( targ ).parent().children(".description").val();

        var key = $( targ ).parent().children(".description").attr("id");

        console.log(`key ${key}, value ${txt}`);
        localStorage.setItem(key, txt);

        
        
    });
        var currentHour = moment().hour();
    // get items from local storage and display in correct timeblocks
    for (var i = 9; i <= 17; i++) {
        if (i < 12) {
            var key = i + "am";
        } else if(i == 12){
            var key = i + "pm";
        }
         else {
            var key = (i - 12) + "pm";
        }
        
        // apply past, present, future classes according to time displayed in header
        if (i < currentHour) {
            $("#"+key).addClass("past") 
        } else if (i == currentHour) {
            $("#"+key).addClass("present") 
        } else {
            $("#"+key).addClass("future") 
        }
        var show = localStorage.getItem(key) 
        console.log(show);
        $("#" + key).val(show);
    };
    
});