import Navbar from "../components/Navbar";

function MotivationPage() {
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
        <button className="add-button">+</button>
      </div>
    </>
  )
}

export default MotivationPage;