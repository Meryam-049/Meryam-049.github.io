const setDateFormat = "mm-dd-yy";

$(document).ready(function(){
    // JQuery tooltip
    $('.tool').tooltip();

    // Correct phone num
    $('#phone').change(function(){
        if(isPhoneNum("phone")){
            document.getElementById("phone").style = "background-color: #cef4db;";
        } else {
            document.getElementById("phone").style = "background-color: #ffe2c4;";
        }
    });

    // Correct card num
    $('#numcard').change(function(){
        if(isNumCard("numcard")){
            document.getElementById("numcard").style = "background-color: #cef4db;";
        } else {
            document.getElementById("numcard").style = "background-color: #ffe2c4;";
        }
    });

    // Feedback about correct phone and card
    $('#bookbtn').click(function(){
        if(!isPhoneNum("phone") || !isNumCard("numcard")){
            if(!isPhoneNum("phone")){
                document.getElementById("wrongPhone").style.display = "block";
            }
            if(!isNumCard("numcard")){
                document.getElementById("wrongNum").style.display = "block";
            }
        } else {
            document.getElementById("success").style.display = "block";
        }
    });

    var mecano = '';
    var days = [''];

    function getDays(day){
        var mecano = $('input[name="mecano"]:checked').val();

        if (mecano == "benoit"){
            return [(day == 1 || day == 3 || day == 5), ''];
        } else {
            return [(day == 2 || day == 4 || day == 5), ''];
        }
    }

    // Configure datepicker
    $("#datepicker").datepicker({
        dateFormat : setDateFormat,
        minDate: 0,
        maxDate: "+2M",
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: function(date){
            console.log("Enter");
            var day = date.getDay();
            return getDays(day);
        }
    });
});


// IS PHONE NUMBER
// 10 char et que des chiffres
function isPhoneNum(htmlcomp){
    var phone = /^\d{10}$/;
    var num = document.getElementById(htmlcomp).value;

    return phone.test(num);
}


// IS CREDIT CARD NUMBER
// 16 char et que des chiffres
function isNumCard(htmlcomp){
    var card = /^\d{16}$/;
    var num = document.getElementById(htmlcomp).value;

    return card.test(num);
}

// DATES Benoit
// Code de StackOverflow https://stackoverflow.com/questions/4376987/disable-all-sundays-in-jquery-ui-calendar
function benoitWorks(date){
    console.log('benoitWorks');
    var day = date.getDay();
    return [(day == 1 || day == 3 || day == 5), ''];
}

// DATES Amine
function amineWorks(date){
    console.log('amineWorks');
    var day = date.getDay();
    return [(day == 2 || day == 4 || day == 5), ''];
}

// JQuery checkbox
$( function() {
    $( ".choixmeca" ).checkboxradio();
  } );

// JQuery datepicker
$( function() {
  $( "#datepicker" ).datepicker();
} );
