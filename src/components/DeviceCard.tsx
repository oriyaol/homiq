// src/components/DeviceCard.tsx
import { motion } from "framer-motion";
import {
    Lightbulb,
    Plug,
    Power,
    Thermometer,
    type LucideIcon,
} from "lucide-react";
import "../styles/devices.css";
import type { Device, DeviceType } from "../types/devices";

type Props = {
    device: Device;
    onToggle: (id: string) => void;
};

const TypeIcon: Record<DeviceType, LucideIcon> = {
    light: Lightbulb,
    plug: Plug,
    thermostat: Thermometer,
};

export default function DeviceCard({ device, onToggle }: Props) {
    const Icon = TypeIcon[device.type];

    return (
        <motion.div
            className="card device-card"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            whileHover={{ y: -2 }}
            role="region"
            aria-label={device.name}
        >
            <div className="device-card__left">
                <span className="device-card__icon">
                    <Icon size={18} aria-hidden />
                </span>
                <div>
                    <div className="device-card__name">{device.name}</div>
                    <div className="device-card__meta">
                        {prettyType(device.type)}
                        {device.room ? ` • ${prettyRoom(device.room)}` : ""} •{" "}
                        {device.on ? "On" : "Off"}
                    </div>
                </div>
            </div>

            <motion.button
                className={`btn ${device.on ? "" : "btn--primary"}`}
                whileTap={{ scale: 0.98 }}
                onClick={() => onToggle(device.id)}
                aria-pressed={device.on}
                title={device.on ? "Turn Off" : "Turn On"}
            >
                <span className="btn__icon">
                    <Power size={14} aria-hidden />
                </span>
                {device.on ? "Turn Off" : "Turn On"}
            </motion.button>
        </motion.div>
    );
}

function prettyType(t: Device["type"]) {
    switch (t) {
        case "light":
            return "Light";
        case "plug":
            return "Plug";
        case "thermostat":
            return "Thermostat";
        default:
            return String(t);
    }
}

function prettyRoom(r: NonNullable<Device["room"]>) {
    switch (r) {
        case "living":
            return "Living";
        case "bedroom":
            return "Bedroom";
        case "kitchen":
            return "Kitchen";
        case "hall":
            return "Hall";
    }
}
