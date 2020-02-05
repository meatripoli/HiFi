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

$(document).on("click", ".search-link", function(event) {
  event.preventDefault();
  console.log("pressing Album or Artist button");
  let resultID = $('.search-link').data('id');
  $("#detailModal").show();
  $.ajax({
    type: "GET",
    url: `/api/result/${resultID}`
  }).then(function(data) {
      console.log(data);
  });
});

// When the user clicks on <span> (x), close the modal
$(document).on("click", ".close", function(event){
  console.log("pressing X to close");
  console.log(event.target)
  $("#detailModal").hide();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("detailModal")) {
    console.log("pressing anywhere outside modal");
    $("#detailModal").hide();
  };
};
  
function createHTMLList(obj){
  console.log(obj);
  obj.forEach(element => {
    if (element.id === 0){
      alert(`Album ${element.Album} was not found`);
    }
    else{
      listHTML = `${listHTML}
      <tr>
      <td><a href="" class="search-link" data-id=${element.id}>${element.Album}</a></td>
      <td>${element.Artist}</td>
      <td>${element.Year}</td>
      <td>${element.Genre}</td>
      </tr>`;
    }
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
        for (let i = 0; i < data.length; i++) {
            let pageResults = `
            <tr>
            <td><a href="" class="search-link" data-id=${data[i].id}>${data[i].Album}</a></td>
            <td>${data[i].Artist}</td>
            <td>${data[i].Year}</td>
            <td>${data[i].Genre}</td>
            </tr>`
            $("#searchlist").append(pageResults);            
        }
    });
});