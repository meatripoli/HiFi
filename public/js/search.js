$(document).ready(function () {
  let listHTML = "";
  // Set input focus when user navigates to pages
  $("#textBox").focus();

  ////code below is for submitting the album search

  $(".searchButton").on("click", function (event) {
    event.preventDefault();
    var searchInput = $("#textBox").val();
    $.ajax({
      type: "GET",
      url: `/api/albums/${searchInput}`
    }).then(function (data) {
      createHTMLList(data);
    });
  });

  $(document).on("click", ".search-link", function (event) {
    let resultID = "";
    event.preventDefault();
    resultID = $(this).data('id');
    $("#detailModal").show();
    $.ajax({
      type: "GET",
      url: `/api/result/${resultID}`
    }).then(function (data) {
      createHTMLModal(data);
    });
  });

  // When the user clicks on <span> (x), close the modal
  $(document).on("click", ".close", function (event) {
    $("#detailModal").hide();
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == document.getElementById("detailModal")) {
      $("#detailModal").hide();
    };
  };

  // AJAX for pagination on search page
  $(".page-link").on("click", function () {
    var buttonValue = $(this).text()
    $("#searchlist").html("");
    $.ajax({
      type: "GET",
      url: `/api/albums/page/${buttonValue}`
    }).then(function (data) {
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

  function createHTMLList(obj) {
    obj.forEach(element => {
      if (element.id === 0) {
        alert(`Album ${element.Album} was not found`);
      } else {
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

    function createHTMLModal(objArray) {
      let modalTableHTML = "";
      let modalInfoHTML = "";
      objArray.forEach(obj => {
        //done to catch albums with no images
        let img = obj.Img === null ? "../img/RTJ2.jpg" : obj.Img
        // Stock tab html
        modalTableHTML = `${modalTableHTML}
        <tr>
          <td>${obj.Name}</td>
          <td>${obj.stock}</td>
          <td>${obj.stock}</td>
          <td>0</td>
        </tr>`
      // Album art html
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
      // Review tab html
      let employee1 = "Alex";
      let employee2 = "Esteban";
      reviewHTML = `
      <div class="card">
        <div class="card-header">
          ${employee2}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p><b>${obj.Album}</b> feels like an early Christmas present to everyone who likes good
              music. ${obj.Artist} continues to amaze in new ways with this record!</p>
          </blockquote>
        </div>
      </div>
      <div class="card">
      <div class="card-header">
        ${employee1}
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
      <p><b>${obj.Album}</b> is another set of coherent, well-sequenced set of tracks without any major
          drop-offs, all the more impressive for its length. It's
          flexible, ever-moving, a record that could have come from no one else.</p>
        </blockquote>
      </div>
    </div>
      `
      $("#albuminfo").html(modalInfoHTML);
      $("#albumstock").html(modalTableHTML);
      $("#review").html(reviewHTML);
    });
  }
});