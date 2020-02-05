let listHTML = "";
// Set input focus when user navigates to pages
$("#textBox").focus();

////code below is for submitting the album search

$(".searchButton").on("click", function(event) {
    event.preventDefault();
    var searchInput= $("#textBox").val();
    $.ajax({
      type: "GET",
      url: `/api/albums/${searchInput}`
    }).then(function(data) {
      createHTMLList(data);
    });
  });
  

  function createHTMLList(obj){
    console.log(obj);
    obj.forEach(element => {
      if (element.id === 0){
        alert(`Album ${element.Album} was not found`);
      }
      else{
        listHTML = `${listHTML}
        <tr data-id=${element.id}>
        <td><a href="" class="search-link">${element.Album}</a></td>
        <td><a href="" class="search-link">${element.Artist}</a></td>
        <td>${element.Year}</td>
        <td>${element.Genre}</td>
        </tr>`;
      }
    }); 
    $("#searchlist").html(listHTML);
  }

  //12345678