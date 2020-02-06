$(document).ready(function() {
  // User create 
  var signUpForm = $("form#signup");
  var emailInput = $("input#emailInput");
  var passwordInput = $("input#passwordInput");
  //  Modal - Employee Create
  const employeeForm=$("form#employee");
  const firstName= $("input#firstname");
  const lastName= $("input#lastname");
  const favAlbum= $("input#favourite");

  // Set input focus when user navigates to pages
  $("#emailInput").focus();

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log(userData);

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    // emailInput.val("");
    // passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/users", {
      email: email,
      password: password
    })
      .then(function(data) {
        console.log(data);
        // $('#employeeModal').modal('toggle')
        // window.location.replace("/search");
      })
      .catch(handleLoginErr);
  }

  // Create Employee JS

  $(document).on('shown.bs.modal', function (e) {
    $("#firstname").focus();
  });

    
  employeeForm.on("submit", function(event) {
      event.preventDefault();
      const employee  = {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        favAlbum: favAlbum.val().trim()
      };
  
      if (!employee.firstName || !employee.lastName) {
        return;
      }
     
      createEmployee(employee.firstName, employee.lastName, employee.favAlbum);
    });

  function createEmployee(firstName, lastName, favAlbum) {
    $.post("/api/employee", {
      first_name: firstName,
      last_name: lastName,
      fav_album: favAlbum
    })
      .then(function(data) {
        window.location.replace("/search");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
