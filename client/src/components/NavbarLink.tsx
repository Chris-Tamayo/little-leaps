interface NavbarLinkProps {
  href: string,
  label: string
}

function NavbarLink({href, label}: NavbarLinkProps) {
  const path = window.location.pathname;

  return (
    <>
    <li className={path === href ? "active": ""}>
      <a href={href}>
        <p className="nav-link">{label}</p>
      </a>
    </li>
    </>
  )
};

export default NavbarLink;