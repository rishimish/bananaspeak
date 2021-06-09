var button = document.querySelector(".input-btn");
var inputText = document.querySelector(".input-text");
var output = document.querySelector(".output");

var url = "https://api.funtranslations.com/translate/minion.json";

function generateUrl(text) {
  return url + "?text=" + text;
}

function errorDisplay(error) {
  console.log("error", error);
  alert("error occcured");
}

function clickHandler() {
  var textValue = inputText.value;

  fetch(generateUrl(textValue))
    .then((Response) => Response.json())
    .then((json) => {
      var textOutput = json.contents.translated;
      output.innerText = textOutput;
    })
    .catch(errorDisplay);
}
button.addEventListener("click", clickHandler);
