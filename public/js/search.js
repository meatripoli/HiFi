let listHTML = "";
// Set input focus when user navigates to pages
$("#textBox").focus();

////code below is for submitting the album search

$(".searchButton").on("click", function(event) {
  event.preventDefault();
  var searchInput= $("#textBox").val();
  console.log(searchInput);

  $.ajax({
    type: "GET",
    url: `/api/albums/${searchInput}`
  }).then(function(data) {
    console.log("inside client get req")
    createHTMLList(data);
  });
});

function createHTMLList(obj){
  console.log(obj);
  obj.forEach(element => {
    listHTML = `${listHTML}
    <tr data-id=${element.id}>
    <td><a href="" class="search-link">${element.Album}</a></td>
    <td><a href="">${element.Artist}</a></td>
    <td>${element.Year}</td>
    <td>${element.Genre}</td>
    </tr>`
  }); 
  $("#searchlist").html(listHTML);
}

  // AJAX for pagination on search page
  $(".page-link").on("click",function(){
    var buttonValue = $(this).text()
    $("#searchlist").html("");
    $.ajax({
      type: "GET",
      url: `/api/albums/page/${buttonValue}`
    }).then(function(data){
      console.log(data)
      
      for (let i = 0; i < data.length; i++) {
        let pageResults = `
        <tr data-id=${data[i].id}>
          <td><a href="" class="search-link">${data[i].Album}</a></td>
          <td><a href="">${data[i].Artist}</a></td>
          <td>${data[i].Year}</td>
          <td>${data[i].Genre}</td>
        </tr>`

        $("#searchlist").append(pageResults);
        
      }

    })
  })
