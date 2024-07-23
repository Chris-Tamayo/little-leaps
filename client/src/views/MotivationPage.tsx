import MotivationSection from "../components/motivation/MotivationSection";
import Navbar from "../components/layout/Navbar";

function MotivationPage() {
  return (
    <>
      <div className="flex">
        <Navbar/>
        <MotivationSection/>
      </div>
    </>
  )
}

export default MotivationPage;