let addBtn = document.getElementById("addBtn");
let showBtn = document.getElementById("showBtn");
let inputTitle = document.getElementById("inputTitle");
let inputPriority = document.getElementById("inputPriority");
let inputColor = document.getElementById("inputColor");
let inputDescription = document.getElementById("inputDescription");
let reminderTable = document.getElementById("reminderTable");

let reminder = [];

addBtn.addEventListener("click", function () {
  let yourReminder = {
    title: inputTitle.value,
    priority: inputPriority.value,
    color: inputColor.value,
    description: inputDescription.value,
  };
  reminder.push(yourReminder);
  inputTitle.value = "";
  inputPriority.value = "";
  inputColor.value = "";
  inputDescription.value = "";

  console.log("Reminder added:", yourReminder);
  console.log("Current reminders array:", reminder);
});

function showReminders() {
  let tableHTML =
    "<table><tr><th>Title</th><th>Priority</th><th>Description</th></tr>";
  reminderTable.textContent = "";
  for (let i = 0; i < reminder.length; i++) {
    tableHTML += `<tr>
    <td style="color:${reminder[i].color}">${reminder[i].title}</td>
    <td>${reminder[i].priority}</td>
    <td>${reminder[i].description}</td>
</tr>`;
  }
  tableHTML += "</table>";
  reminderTable.innerHTML = tableHTML;
}

showBtn.addEventListener("click", showReminders);
