import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Devices from "./pages/Devices";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Updates from "./pages/Updates";
import "./styles/globals.css";
// ...


<Route path="/updates" element={<Updates />} />

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}
<Route path="/devices" element={<Devices />} />
