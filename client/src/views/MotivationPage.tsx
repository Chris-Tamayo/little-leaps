import MotivationSection from "../components/MotivationSection";
import Navbar from "../components/Navbar";

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