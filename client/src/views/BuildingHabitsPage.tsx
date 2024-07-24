import BuildingHabitSection from "../components/building-habits/BuildingHabitSection";
import Navbar from "../components/layout/Navbar";

function BuildingHabitsPage() {
  return (
    <div className="flex">
      <Navbar/>
      <BuildingHabitSection />
    </div>
  )
}

export default BuildingHabitsPage;