const planner = document.getElementById("planner");
const workHours = [9,10,11,12,13,14,15,16,17];
const now = new Date();
const currentHour = now.getHours();

function formatHour(hour) {
  return hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`;
}

workHours.forEach(hour => {
  const row = document.createElement("div");
  row.className = "time-block";

  const hourDiv = document.createElement("div");
  hourDiv.className = "hour";
  hourDiv.textContent = formatHour(hour);

  const textarea = document.createElement("textarea");
  textarea.className = "task";
  textarea.id = `task-${hour}`;
  textarea.value = localStorage.getItem(`task-${hour}`) || "";

  // Time-sensitive styling
  if (hour < currentHour) textarea.classList.add("past");
  else if (hour === currentHour) textarea.classList.add("present");
  else textarea.classList.add("future");

  const button = document.createElement("button");
  button.className = "saveBtn";
  button.textContent = "Save";
  button.onclick = () => {
    localStorage.setItem(`task-${hour}`, textarea.value);
    alert("Task saved!");
  };

  row.appendChild(hourDiv);
  row.appendChild(textarea);
  row.appendChild(button);
  planner.appendChild(row);
});
