////code below is for submitting the album search

$(".searchButton").on("click", function(event) {
    event.preventDefault();
    let newObj = {
      searchInput: $("#textBox").val()
    };
    console.log(newObj)
    $.ajax({
      type: "POST",
      url: "/search",
      data: newObj
    }).then(function(data) {
      console.log(data);
    });
  });
  