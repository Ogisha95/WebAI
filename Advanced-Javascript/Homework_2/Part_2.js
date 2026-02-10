let myBtn = document.getElementById("mybtn");
let tableDiv = document.getElementById("userTable");

myBtn.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((user) => {
      let tableHTML = `
        <table border="1">
          <tr><th>Name</th><td>${user.name}</td></tr>
          <tr><th>Username</th><td>${user.username}</td></tr>
          <tr><th>Email</th><td>${user.email}</td></tr>
          <tr><th>Phone</th><td>${user.phone}</td></tr>
          <tr><th>Website</th><td>${user.website}</td></tr>
        </table>
      `;
      tableDiv.innerHTML = tableHTML;
      console.log(user);
    })
    .catch((error) => console.log("Error:", error));
});
