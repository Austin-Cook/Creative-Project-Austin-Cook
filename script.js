// Code for the food dictionary at the bottom of menu.html
document.getElementById('definitionSubmit').addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("toLookUp").value;
  let results = ""
  if (value === "")
    return;
  if (value.includes(" ")) {
    results += "<p>Sorry, only one word items are supported by the dictionary</p>"
    document.getElementById("definition").innerHTML = results; //This may have an issue being innerHTML
    return;
  }
  console.log(value);
  
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      
      results += "<p>";
      results += json[0].meanings[0].definitions[0].definition;
      results += "</p>";
      
      document.getElementById("definition").innerHTML = results;
    });
});
// End of code for food dictionary
