// src/components/DeviceCard.tsx
import "../styles/devices.css";
import type { Device } from "../types/devices";
import { Lightbulb, Plug, Thermometer, Power } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    device: Device;
    onToggle: (id: string) => void;
};

const TypeIcon = {
    light: Lightbulb,
    plug: Plug,
    thermostat: Thermometer,
} as const;

export default function DeviceCard({ device, onToggle }: Props) {
    // fallback כדי למנוע קריסה אם device.type לא תואם
    const Icon =
        (TypeIcon as Record<string, React.ComponentType<any>>)[device.type] ??
        Lightbulb;

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
                    {/* מציג גם את החדר אם מוגדר */}
                    <div className="device-card__meta">
                        {(device.room ?? device.type)} • {device.on ? "On" : "Off"}
                    </div>
                    <div className="device-card__name">{device.name}</div>
                    <div className="device-card__meta">
                        {prettyType(device.type)} • {device.on ? "On" : "Off"}
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
    if (t === "light") return "Light";
    if (t === "plug") return "Plug";
    if (t === "thermostat") return "Thermostat";
    return String(t);
}
