import Navbar from "../components/Navbar";

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


    div.appendChild(input);

    // Handle blur
    input.addEventListener("blur", () => {
      if (input.value === "") {
        div.remove();
      } else {
        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-input-button");

        div.appendChild(deleteButton);

        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("material-symbols-outlined");
        deleteIcon.innerHTML = "close";

        deleteButton.appendChild(deleteIcon);

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
    })

    // Handle 'enter' pressed
    input.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        input.blur();
      }
    })

    if (entrySection !== null) {
      entrySection.appendChild(div);
      input.focus();
    }
  }

  function handleFormSubmit() {

  }
  
  return (
    <>
      <div className="flex">
        <Navbar/>
        <section className="flex justify-center w-full">
          <div className="w-1/2">
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