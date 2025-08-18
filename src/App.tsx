import "./styles/globals.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Updates from "./pages/Updates";
// ...
import { SunOutlined, VideoCameraOutlined, ThunderboltOutlined } from '@ant-design/icons';


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
