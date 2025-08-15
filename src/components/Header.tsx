import { NavLink } from "react-router-dom";

export default function Header() {
    const active = ({ isActive }: { isActive: boolean }) =>
        ({ opacity: isActive ? 1 : 0.7 });

    return (
        <header style={{ padding: "1rem 0", borderBottom: "1px solid #1f2937" }}>
            <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>Homiq</strong>
                <nav style={{ display: "flex", gap: "1rem" }}>
                    <NavLink to="/" style={active}>Home</NavLink>
                    <NavLink to="/devices" style={active}>Devices</NavLink>
                    <NavLink to="/settings" style={active}>Settings</NavLink>
                </nav>
            </div>
        </header>
    );
}
