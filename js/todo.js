$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .slideUp(300, function () {
      $(this).remove();
    });
  event.stopPropagation(); //to stop event bubbling.
});

$("input[type='text']").on("keypress", function (event) {
  if ((event.which === 13) & ($(this).val() !== "")) {
    var texttodo = $(this).val();
    $(this).val(""); //to clear the input.
    $("ul").append(
      "<li><span class='spanclass'><i class='fas fa-trash'></i></span> " +
        texttodo +
        "</li>"
    );
  }
});

$(".backside").click(function () {
  $("input").fadeIn();
  $("input").focus();
});

$("h1").click(function () {
  $("input").fadeToggle(1000);
});
