$(document).ready(function() {
 // Employee Create
  const employeeForm=$("form#e-form");
  const firstName= $("input#firstname");
  const lastName= $("input#lastname");
  const favAlbum= $("input#favourite");

  // Set input focus when user navigates to pages
  $("#emailInput").focus();

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
      $.post("/api/employees", {
        first_name: firstName,
        last_name: lastName,
        fav_album: favAlbum
      })
        .then(function(data) {
          console.log(data);
          // window.location.replace("/search");
        })
        .catch(handleLoginErr);
      };

    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
});
