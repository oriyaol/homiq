import "../styles/recent-logs.css";
import { useEffect, useState } from "react";
import { logger } from "../utils/logger";

type Entry = { level: "debug" | "info" | "warn" | "error"; message: string; ts: number };

export default function RecentLogs() {
    const [entries, setEntries] = useState<Entry[]>([]);
    useEffect(() => {
        const unsubscribe = logger.subscribe(e => {
            setEntries(prev => {
                const next = [...prev, { level: e.level, message: e.message, ts: e.ts }];
                return next.slice(-10);
            });
        });
        return () => { unsubscribe(); };
    }, []);

    return (
        <div className="card recent-logs">
            <div className="recent-logs__header">
                <h3 style={{ margin: 0 }}>Recent Activity</h3>
                <small style={{ opacity: 0.7 }}>{entries.length} items</small>
            </div>
            <ul className="recent-logs__list">
                {entries.length === 0 && <li className="recent-logs__empty">No recent activity</li>}
                {entries.map((e, i) => (
                    <li key={i} className="recent-logs__item">
                        [{new Date(e.ts).toLocaleTimeString()}] {e.level.toUpperCase()}: {e.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}
