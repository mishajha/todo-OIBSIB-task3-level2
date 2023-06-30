function addTask() {
    var taskInput = document.getElementById("taskInput");
    var datetimeInput = document.getElementById("datetimeInput");

    var task = taskInput.value.trim();
    var completionDateTime = new Date(datetimeInput.value);

    if (task !== "" && !isNaN(completionDateTime)) {
      var listItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onchange = function() {
        listItem.classList.toggle("task-done", checkbox.checked);
      };

      var taskSpan = document.createElement("span");
      taskSpan.textContent = task;

      var detailsSpan = document.createElement("span");
      detailsSpan.className = "task-details";
      detailsSpan.textContent = completionDateTime.toLocaleString();

      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        listItem.remove();
      };

      listItem.appendChild(checkbox);
      listItem.appendChild(taskSpan);
      listItem.appendChild(detailsSpan);
      listItem.appendChild(deleteButton);
      document.getElementById("taskList").appendChild(listItem);

      taskInput.value = "";
      datetimeInput.value = "";
    }
  }

  function updateDateTime() {
    var datetime = document.getElementById("datetime");
    var currentDate = new Date();
    datetime.textContent = currentDate.toLocaleString();
  }

  // Update date and time every second
  setInterval(updateDateTime, 1000);