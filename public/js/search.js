let listHTML = "";
let modalTableHTML = "";
let modalInfoHTML = "";
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
  let resultID = $('.search-link').data('id');
  $("#detailModal").show();
  $.ajax({
    type: "GET",
    url: `/api/result/${resultID}`
  }).then(function(data) {
      createHTMLModal(data);
  });
});

// When the user clicks on <span> (x), close the modal
$(document).on("click", ".close", function(event){
  $("#detailModal").hide();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("detailModal")) {
    $("#detailModal").hide();
  };
};
  
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

function createHTMLList(obj){
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

function createHTMLModal(objArray){
  objArray.forEach(obj => {
    //done to catch albums with no images
    let img = obj.Img === null ? "../img/RTJ2.jpg" : obj.Img
    modalTableHTML = `${modalTableHTML}
      <tr>
        <td>${obj.Name}</td>
        <td>${obj.stock}</td>
        <td>${obj.stock}</td>
        <td>0</td>
      </tr>`
    modalInfoHTML = `
      <div class="col-lg-6 albumCoverPic">
        <img src="${img}" alt="Album art here" style="height: 250px; width:250px">
      </div>
      <div class="col-lg-6 albumInfo">
        <ul class="albumInfoList">
          <li>Album: ${obj.Album}</li>
          <li>Artist: ${obj.Artist}</li>
          <li>Year: ${obj.Year}</li>
          <li>Genre: ${obj.Genre}</li>
        </ul>
      </div>`
    $("#albuminfo").html(modalInfoHTML);
    $("#albumstock").html(modalTableHTML)
  });
}