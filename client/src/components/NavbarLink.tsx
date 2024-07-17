import { Link } from "react-router-dom";

interface NavbarLinkProps {
  href: string,
  label: string,
  iconName: string
}

function NavbarLink({href, label, iconName}: NavbarLinkProps) {
  const path = window.location.pathname;

  return (
    <>
    <li className={path === href ? "active": ""}>
      <Link to={href}>
        <div className="flex items-center nav-link">
          <span className="material-symbols-outlined icon">{iconName}</span>
          <span>{label}</span>
        </div>
      </Link>
    </li>
    </>
  )
};

export default NavbarLink;