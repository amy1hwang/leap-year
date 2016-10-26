var count = function(string) {
  var counter = 0;
  if (string.search(/[^a-zA-Z\s]+/) != -1) {
  return "Enter only alphebat letters.";
} else if (string.search(/^[aeiou\s]$/gi) === -1) {

  var vowels = ["a", "e", "i", "o", "u"];
  var letters = string.split("");
  // console.log(letters)
  vowels.forEach(function (vowel){
    letters.forEach(function(letter){
      if (vowel === letter){
        counter += 1;
      }
    })
  })
  return counter;
}
  }

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputs = $("#input").val();
    //count(inputs)
    $(".output").text(count(inputs));
  })
})
