
export default function Header() {
    return (
        <header style={{ padding: "1rem 0", borderBottom: "1px solid #1f2937" }}>
            <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>Homiq</strong>
                <nav style={{ display: "flex", gap: "1rem" }}>
                    <a href="#" aria-disabled="true" style={{ opacity: 0.6, pointerEvents: "none" }}>Devices</a>
                    <a href="#" aria-disabled="true" style={{ opacity: 0.6, pointerEvents: "none" }}>Settings</a>
                </nav>
            </div>
        </header>
    );
}
