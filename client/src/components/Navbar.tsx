import "../styles/Navbar.css";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <>
      <nav className="h-screen">
        <a href="/"><h1 className="nav-link">Little Leaps</h1></a>
        <ul>
          <NavbarLink href="/motivation" label="Motivation" iconName="target"/>
          <NavbarLink href="/building-habits" label="Building Habits" iconName="check_circle"/>
          <NavbarLink href="/breaking-habits" label="Breaking Habits" iconName="cancel"/>
          <NavbarLink href="/progress" label="Progress" iconName="bar_chart"/>
        </ul>
      </nav>      
    </>
  )
}

export default Navbar;