// src/pages/Updates.tsx
import "../styles/updates.css";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { fetchUpdates, type UpdateItem } from "../services/api";
import { logger } from "../utils/logger";

const LIMIT = 6; // כמה פריטים להציג

export default function Updates() {
    const [items, setItems] = useState<UpdateItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                logger.info("Fetching updates feed…");
                const data = await fetchUpdates(); // בלי פרמטרים
                setItems(data);
                logger.info("Updates fetched", { count: data.length });
            } catch (e) {
                setError("Failed to load updates");
                logger.error("Updates fetch failed", { error: e });
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <div className="container">
                <div className="card updates-card">Loading…</div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="container">
                <div className="card updates-card">{error}</div>
            </div>
        );
    }

    const list = items.slice(0, LIMIT);

    return (
        <div className="container">
            <h1>📰 Updates</h1>
            <div className="updates-grid">
                {list.map((u) => (
                    <article key={u.version} className="card updates-card">
                        <h3 className="updates-title">v{u.version}</h3>
                        <div className="updates-meta">
                            {formatDistanceToNow(new Date(u.date), { addSuffix: true })}
                        </div>
                        <ul className="updates-notes">
                            {(u.notes ?? []).map((n, i) => (
                                <li key={i}>{n}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    );
}
