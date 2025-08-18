import "../styles/header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <strong>Homiq</strong>
                <nav className="header__nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `header__link${isActive ? " active" : ""}`}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/devices"
                        className={({ isActive }) => `header__link${isActive ? " active" : ""}`}
                    >
                        Devices
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => `header__link${isActive ? " active" : ""}`}
                    >
                        Settings
                    </NavLink>
                    <NavLink to="/updates" className={({ isActive }) => `header__link${isActive ? " active" : ""}`}>Updates</NavLink>

                </nav>
            </div>
        </header>
    );
}
