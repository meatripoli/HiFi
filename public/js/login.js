$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form#login");
  var emailInput = $("input#username");
  var passwordInput = $("input#password");

  // Set input focus when user navigates to pages
  $("#username").focus();

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/search");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
