// Set input focus when user navigates to pages
$("#textBox").focus();

////code below is for submitting the album search

$(".searchButton").on("click", function(event) {
    event.preventDefault();
    
      var searchInput= $("#textBox").val()

    console.log(searchInput)
    $.ajax({
      type: "GET",
      url: `/api/albums/${searchInput}`
    }).then(function(data) {
        console.log("inside client get req")
      //console.log(data);
    });
  });
  