import "../styles/dashboard.css";
import { useMemo, useState } from "react";
import StatCard from "../components/StatCard";
import RecentLogs from "../components/RecentLogs";
import { logger } from "../utils/logger";
import type { Device } from "../types/devices";

import { Sun, Film } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const initialDevices: Device[] = [
    { id: "d1", name: "Living Room Light", type: "light", on: true },
    { id: "d2", name: "Kitchen Plug", type: "plug", on: false },
    { id: "d3", name: "Hall Thermostat", type: "thermostat", on: true },
];

type QuickAction = "morning" | "movie";

export default function Dashboard() {
    const [devices] = useState<Device[]>(initialDevices);
    const prefersReducedMotion = useReducedMotion();

    const stats = useMemo(() => {
        const total = devices.length;
        const on = devices.filter((d) => d.on).length;
        const off = total - on;
        return { total, on, off };
    }, [devices]);

    function runAction(kind: QuickAction) {
        logger.info(
            `Quick Action: ${kind === "morning" ? "Good Morning" : "Movie Night"} triggered`
        );
    }

    return (
        <div className="container">
            <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
            >
                📊 Dashboard
            </motion.h1>

            <motion.div
                className="dashboard__stats"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={prefersReducedMotion ? {} : { opacity: 1 }}
                transition={{ delay: 0.08, duration: 0.2 }}
            >
                <StatCard label="Total Devices" value={stats.total} />
                <StatCard label="On" value={stats.on} />
                <StatCard label="Off" value={stats.off} />
            </motion.div>

            <section className="card dashboard__card">
                <h3 className="dashboard__title">Quick Actions</h3>

                <div className="dashboard__actions">
                    <QuickActionButton
                        variant="primary"
                        icon={<Sun size={16} aria-hidden />}
                        onClick={() => runAction("morning")}
                    >
                        Good Morning
                    </QuickActionButton>

                    <QuickActionButton
                        icon={<Film size={16} aria-hidden />}
                        onClick={() => runAction("movie")}
                    >
                        Movie Night
                    </QuickActionButton>
                </div>
            </section>

            <div style={{ marginTop: 16 }}>
                <RecentLogs />
            </div>
        </div>
    );
}

function QuickActionButton({
    children,
    onClick,
    icon,
    variant = "default",
}: {
    children: React.ReactNode;
    onClick: () => void;
    icon?: React.ReactNode;
    variant?: "default" | "primary";
}) {
    return (
        <motion.button
            className={`btn ${variant === "primary" ? "btn--primary" : ""}`}
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            aria-label={typeof children === "string" ? children : undefined}
        >
            {/* מרווח קטן בין האייקון לטקסט, בלי inline-style */}
            {icon ? <span className="btn__icon">{icon}</span> : null}
            <span>{children}</span>
        </motion.button>
    );
}
