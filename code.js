$(document).ready(function () {
  loadData();
});

function loadData() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/products",
    success: function (response) {
      for (let index = 0; index < response.length; index++) {
        const element = response[index];
        $("#tableBody").append(
          "<tr id=" +
            element.id +
            "><td>" +
            element.name +
            "</td><td>" +
            element.cost +
            "</td><td>" +
            "<button name='btn-upd' id=" +
            element.id +
            ">Update</button>" +
            "<button name='btn-rmv' id=" +
            element.id +
            ">Remove</button>" +
            "</td></tr>"
        );
      }
      loadButtons();
    },
    error: function () {
      alert("Error getting data");
    },
  });
}

function loadButtons() {
  $("#btn-post").on("click", function () {
    var item = {
      name: $("#product-name").val(),
      cost: $("#product-cost").val(),
    };
    postData(item);
  });
  $("#btn-upd").on("click", function () {
    var item = {
      name: $("#product-name-upd").val(),
      cost: $("#product-cost-upd").val(),
    };
    updateData(item);
  });
  $("[name='btn-rmv']").click(function () {
    var id = $(this).attr("id");
    console.log(id);
    deleteData(id);
  });
}

function postData(item) {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/products",
    data: item,
    success: function (response) {
      console.log(response);
    },
    error: function () {
      alert("Error getting data");
    },
  });
}

function updateData(item) {
  console.log(item);
}

function deleteData(id) {
  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/products/" + id,
  });
}
