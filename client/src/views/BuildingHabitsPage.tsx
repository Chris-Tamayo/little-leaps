import Navbar from "../components/Navbar";
import { DateTime } from "luxon";

function BuildingHabitsPage() {
  function handleAddButtonClicked() {
    const entrySection = document.querySelector(".entry-section");

    // Entry container
    const div = document.createElement("div");
    div.classList.add("entry");

    // Text input
    const input = document.createElement("input");
    input.classList.add("entry-input");
    input.placeholder = "ex. Read 10 pages; Make bed; Run for 30 minutes";

    addTextInputEventListeners(input, div);

    // Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("entry-button");

    const editIcon = document.createElement("span");
    editIcon.classList.add("material-symbols-outlined");
    editIcon.innerHTML = "edit";

    editButton.appendChild(editIcon);

    addButtonEventListeners(editButton, div);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("entry-button");

    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-symbols-outlined");
    deleteIcon.innerHTML = "close";

    deleteButton.appendChild(deleteIcon);

    addButtonEventListeners(deleteButton, div);
    addDeleteButtonEventListeners(deleteButton, div);

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.classList.add("entry-checkbox");
    checkbox.type = "checkbox";

    addCheckboxEventListeners(checkbox, input);

    // Add entry to entry section
    div.appendChild(checkbox);
    div.appendChild(input);
    div.appendChild(editButton);
    div.appendChild(deleteButton);

    if (entrySection !== null) {
      entrySection.appendChild(div);
      input.focus();
    }
  }

  function addTextInputEventListeners(input: HTMLInputElement, div: HTMLDivElement) {
    input.addEventListener("blur", () => {
      // Remove entry if nothing was entered
      if (input.value === "") {
        div.remove();
      }
    })

    input.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        input.blur();
      }
    })
  }

  function addButtonEventListeners(button: HTMLButtonElement, div: HTMLDivElement) {
    div.addEventListener("mouseover", () => {
      button.style.display = "block";
    })

    div.addEventListener("mouseout", () => {
      button.style.display = "none";
    })
  }

  function addDeleteButtonEventListeners(deleteButton: HTMLButtonElement, div: HTMLDivElement) {
    deleteButton.addEventListener("click", () => {
      div.remove();
    })
  }

  function addCheckboxEventListeners(checkbox: HTMLInputElement, input: HTMLInputElement) {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        input.style.textDecoration = "line-through";
        input.style.color = "#aaaaaa";
      } else {
        input.style.textDecoration = "none";
        input.style.color = "black";
      }
    })
  }
  
  return (
    <div className="flex">
      <Navbar/>
      <section className="flex justify-center w-full">
        <div className="w-1/2">
          <p className="date">{DateTime.now().toLocaleString(DateTime.DATE_HUGE)}</p>
          <h1 className="section-heading">Building Habits</h1>
          <p>Check off habits you complete!</p>
          <div className="entry-section">
          </div>
          <div className="flex justify-center">
            <button onClick={handleAddButtonClicked} className="add-button">+</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BuildingHabitsPage;