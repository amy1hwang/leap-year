var leapYear = function(year) {
  if (year%4 != 0 || year%100 === 0 && year%400 != 0) {
    return false;
  } else if (year%400 === 0) {
    return true;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    $(".year").text(input);
    $(".output").show(leapYear(input));
    $(".not").text("");
    if (leapYear(input) === false) {
      $(".not").text("NOT");
    }
  });
})
