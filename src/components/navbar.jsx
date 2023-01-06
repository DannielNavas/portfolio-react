import { NavLink } from "react-router-dom";
export function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <strong>DannielDev</strong>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Certificados
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
