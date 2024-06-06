import "../styles/Navbar.css";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <>
      <nav className="h-screen">
        <a href="/"><h1 className="nav-link">Little Leaps</h1></a>
        <ul>
          <NavbarLink href="/motivation" label="Motivation"/>
          <NavbarLink href="/building-habits" label="Building Habits"/>
          <NavbarLink href="/breaking-habits" label="Breaking Habits"/>
          <NavbarLink href="/progress" label="Progress"/>
        </ul>
      </nav>      
    </>
  )
}

export default Navbar;