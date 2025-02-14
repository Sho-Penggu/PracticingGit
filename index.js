document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("todo-input");
    const list = document.getElementById("lists");
  
    window.newElement = function () {
      const todoText = input.value.trim();
      if (todoText === "") {
        alert("Please enter a todo item.");
        return;
      }
      
      const li = document.createElement("li");
      li.textContent = todoText;
      
      const removeBtn = document.createElement("span");
      removeBtn.textContent = " ×";
      removeBtn.classList.add("remove");
      removeBtn.onclick = function () {
        li.remove();
      };
      
      li.appendChild(removeBtn);
      list.appendChild(li);
      input.value = "";
    };
  

    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        newElement();
      }
    });
  });