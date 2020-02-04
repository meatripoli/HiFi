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
      <tr>
      <td><a href="" class="search-link">${element.Album}</a></td>
      <td><a href="" class="search-link">${element.Artist}</a></td>
      <td>${element.Year}</td>
      <td>${element.Genre}</td>
      </tr>`
    }); 
    $("#searchlist").html(listHTML);
  }

  //12345678