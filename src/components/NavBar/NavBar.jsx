import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const gettActiveStyles = ({ isActive }) => ({
    borderBottom: isActive && "3px solid #262626"
    // borderBottomRightRadius: isActive && "3px",
    // borderBottomLeftRadius: isActive && "3px"
  });
  return (
    <div className="nav_bar">
      <NavLink to="/" className="nav_element" style={gettActiveStyles}>
        Dashboard
      </NavLink>
      <NavLink to="/exercise" className="nav_element" style={gettActiveStyles}>
        Exercise
      </NavLink>
      <NavLink to="/food" className="nav_element" style={gettActiveStyles}>
        Food
      </NavLink>
      <NavLink to="/goal" className="nav_element" style={gettActiveStyles}>
        Goal
      </NavLink>
    </div>
  );
};
