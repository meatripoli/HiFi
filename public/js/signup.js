$(document).ready(function() {
  // User create
  var signUpForm = $("form#signup");
  var emailInput = $("input#emailInput");
  var passwordInput = $("input#passwordInput");

  // Set input focus when user navigates to pages
  $("#emailInput").focus();

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }
    console.log(userData);
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/users", {
      email: email,
      password: password
    })
      .then(function(data) {
        console.log(data);
        window.location.replace("/employee/new");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
