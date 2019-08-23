/// Business Logic
function validateNumber(localUserNumber) {
  return !isNaN(localUserNumber) && localUserNumber >= 0;
}

function beepTranslator(localUserNumber, localUserName) {
  $("#result").text("");
  var outputArray = [];
  for (var i = 0; i < localUserNumber; i++) {
    if (i.toString().includes("3")) {
      outputArray.push(" I'm sorry, " + localUserName + ", I'm afraid I can't do that");
    } else if (i.toString().includes("2")) {
      outputArray.push(" Boop!");
    } else if (i.toString().includes("1")) {
      outputArray.push(" Beep!");
    } else {
      outputArray.push(" " + i.toString());
    }
  }
  return outputArray;
}

/// Front-End Logic

$(document).ready(function() {
  $("#userNumber").submit(function() {
    event.preventDefault();
    var userName = $("#userName").val();
    console.log(typeof(userName));
    // var charactersNotAllowed[ "!", "@", "#", "&", "(", ")", ")", "–", "[", "{", "}", " ] : ; ', ? / *]
    var userNumber = parseInt($("input#userNumber").val());
    if (validateNumber(userNumber) === false) {
      alert("DoEsNotCOmpUTE");
    } else {
      $("#result").text(beepTranslator(userNumber, userName));
    }
  });
});
