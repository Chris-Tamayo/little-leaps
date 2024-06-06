import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="p-4 h-screen">
        <a href="/"><h1 className="nav-link">Little Leaps</h1></a>
        <a href="/motivation"><p className="nav-link">Motivation</p></a>
        <a href="/building-habits"><p className="nav-link">Building Habits</p></a>
        <a href="/breaking-habits"><p className="nav-link">Breaking Habits</p></a>
        <a href="/progress"><p className="nav-link">Progress</p></a>
      </nav>      
    </>
  )
}

export default Navbar;