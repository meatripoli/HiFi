$(document).ready(function() {
  var loginForm = $("form#login");
  var emailInput = $("input#username");
  var passwordInput = $("input#password");
  const popup = $('[data-toggle="popover"]');

  popup.popover({
    html: true,
    content: function() {
      return $('#popover-content').html();
    }
  });
  $("#username").focus();

  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

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
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
