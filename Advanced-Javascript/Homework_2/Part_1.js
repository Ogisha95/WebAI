$(document).ready(function () {
  let getBtn = $("#getBtn");
  let list = $("#unordered-list");

  getBtn.click(function () {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      method: "GET",
      success: function (data) {
        list.html("");
        for (let i = 0; i < 10; i++) {
          list.append(`<li>${data.results[i].name}</li>`);
        }

        console.log(data);
      },
      error: function (err) {
        console.log("Error:", err);
      },
    });
  });
});
