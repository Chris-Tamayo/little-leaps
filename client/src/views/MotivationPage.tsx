import Navbar from "../components/Navbar";
import { DateTime } from "luxon";

function MotivationPage() {
  function handleAddButtonClicked() {
    const entrySection = document.querySelector(".entry-section");

    // Entry container
    const div = document.createElement("div");
    div.classList.add("entry");

    // Text input
    const input = document.createElement("input");
    input.classList.add("entry-input");
    input.placeholder = "ex. I want to be a healthy eater";

    addTextInputEventListeners(input, div);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("entry-button");

    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("material-symbols-outlined");
    deleteIcon.innerHTML = "close";

    deleteButton.appendChild(deleteIcon);

    addDeleteButtonEventListeners(deleteButton, div);

    // Add entry to entry section
    div.appendChild(input);
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

  function addDeleteButtonEventListeners(deleteButton: HTMLButtonElement, div: HTMLDivElement) {
    deleteButton.addEventListener("click", () => {
      div.remove();
    })

    div.addEventListener("mouseover", () => {
      deleteButton.style.display = "block";
    })

    div.addEventListener("mouseout", () => {
      deleteButton.style.display = "none";
    })
  }
  
  return (
    <>
      <div className="flex">
        <Navbar/>
        <section className="flex justify-center w-full">
          <div className="w-1/2">
            <p className="date">{DateTime.now().toLocaleString(DateTime.DATE_HUGE)}</p>
            <h1 className="section-heading">Motivation</h1>
            <p>What kind of person do you aspire to be?</p>
            <div className="entry-section">
            </div>
            <div className="flex justify-center">
              <button onClick={handleAddButtonClicked} className="add-button">+</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MotivationPage;