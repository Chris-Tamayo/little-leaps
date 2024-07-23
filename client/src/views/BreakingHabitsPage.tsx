import Navbar from "../components/layout/Navbar";

function BreakingHabitsPage() {
  const content = [
    <div>
      <p>Hello</p>
      <p>Goodbye</p>
    </div>,
    <div>
      <p>Thanks</p>
      <p>You're Welcome</p>
    </div>,
  ]

  return (
    <div className="flex">
        <Navbar/>
        <section className="flex justify-center w-full">
          <div className="w-1/2">
            <h1>Breaking Habits</h1>
            {content}
          </div>
        </section>
      </div>
  )
}

export default BreakingHabitsPage;