const button = document.getElementById("loadUserBtn");
const table = document.getElementById("userTable");

button.addEventListener("click", getUser);

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (response.status !== 200) {
      throw new Error("Error");
    }

    const user = await response.json();

    table.innerHTML = `
      <tr>
        <th>Name</th>
        <td>${user.name}</td>
      </tr>
      <tr>
        <th>Username</th>
        <td>${user.username}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>${user.email}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>${user.phone}</td>
      </tr>
      <tr>
        <th>Website</th>
        <td>${user.website}</td>
      </tr>
      <tr>
        <th>Company</th>
        <td>${user.company.name}</td>
      </tr>
    `;
  } catch (error) {
    console.error("Error:", error);
  }
}
