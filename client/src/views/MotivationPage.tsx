import Navbar from "../components/Navbar";

function MotivationPage() {
  function handleAddButtonClicked() {
    const entrySection = document.querySelector(".entry-section");
    const p = document.createElement("p");
    p.classList.add("entry");
    p.innerText = "Hello";

    if (entrySection !== null) {
      entrySection.appendChild(p);
    }
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
              <p className="entry">I want to be a healthy person</p>
              <p className="entry">I want to be better at DSA</p>
            </div>
          </div>
        </section>
        <button onClick={handleAddButtonClicked} className="add-button">+</button>
      </div>
    </>
  )
}

export default MotivationPage;