// Business Logic
function beepTranslator(localUserNumber) {
  var outputArray = [];
  for (var i = 0; i < localUserNumber; i++) {
    outputArray.push(i);
  }
}



/// Front-End Logic
$(document).ready(function() {
  $("form#userNumber").submit(function() {
    event.preventDefault();
    var userNumber = parseInt($('input#userNumber').val());
    console.log(userNumber);

  });
});
