// Get the modal
var modal = document.getElementById("detailModal");

// Get the button that opens the modal
var btn = $(".search-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.click(function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
  initEvents: function() {
    var obj = this;

    obj.dd.on("click", function(event) {
      $(this).toggleClass("active");
      event.stopPropagation();
    });
  }
}

$(function() {
  var dd = new DropDown($("#dd"));

  $(document).click(function() {
    // all dropdowns
    $(".wrapper-dropdown-5").removeClass("active");
  });
});
