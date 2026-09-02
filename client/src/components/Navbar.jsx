import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link
          to="/"
          className="brand"
          aria-label="SmileCraft Dental Clinic home"
        >
          <span className="brand-mark">S</span>
          <div>
            <strong>SmileCraft</strong>
            <small>Dental Clinic</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/book-appointment" className="btn btn-primary nav-cta">
          Book Appointment
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
