/// Business Logic
function beepTranslator(localUserNumber) {
  var outputArray = [];
  for (var i = 0; i < localUserNumber; i++) {
    if (i.toString().includes("3")) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().includes("2")) {
      outputArray.push("Boop!");
    } else if (i.toString().includes("1")) {
      outputArray.push("Beep!");
    } else {
      outputArray.push(i.toString());
    }
  }
  return outputArray;
}



/// Front-End Logic

$(document).ready(function() {
  $("#userNumber").submit(function() {
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    $("#result").text(beepTranslator (userNumber));
  });
});
