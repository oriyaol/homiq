// src/pages/Devices.tsx
import "../styles/devices.css";
import "../styles/tabs.css";
import { useState } from "react";
import type { Device } from "../types/devices";
import DeviceCard from "../components/DeviceCard";
import RoomsTabs from "../components/RoomsTabs";
import { logger } from "../utils/logger";

const initialDevices: Device[] = [
    { id: "d1", name: "Living Room Light", type: "light", on: true, room: "living" },
    { id: "d2", name: "Kitchen Plug", type: "plug", on: false, room: "kitchen" },
    { id: "d3", name: "Hall Thermostat", type: "thermostat", on: true, room: "hall" },
];

export default function Devices() {
    const [devices, setDevices] = useState<Device[]>(initialDevices);
    const [roomFilter, setRoomFilter] = useState<string>("all"); // ← חדש

    function toggleDevice(id: string) {
        setDevices((prev) => {
            const next = prev.map((d) => (d.id === id ? { ...d, on: !d.on } : d));
            const changed = next.find((d) => d.id === id)!;
            logger.info("Device toggled", {
                id: changed.id,
                name: changed.name,
                type: changed.type,
                on: changed.on,
            });
            return next;
        });
    }

    // סינון לפי חדר
    const filtered = roomFilter === "all"
        ? devices
        : devices.filter((d) => d.room === roomFilter);

    return (
        <div className="container">
            <h1>Devices</h1>
            <p>Manage your devices below.</p>

            {/* Tabs של חדרים */}
            <div style={{ margin: "8px 0 16px" }}>
                <RoomsTabs value={roomFilter} onChange={setRoomFilter} />
            </div>

            {/* רשימת המכשירים המסוננת */}
            <div className="devices__list">
                {filtered.map((d) => (
                    <DeviceCard key={d.id} device={d} onToggle={toggleDevice} />
                ))}
            </div>
        </div>
    );
}
