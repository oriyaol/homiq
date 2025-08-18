import "../styles/updates.css";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { fetchUpdates, type UpdateItem } from "../services/api";
import { logger } from "../utils/logger";

export default function Updates() {
    const [items, setItems] = useState<UpdateItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                logger.info("Fetching updates feed…");
                const data = await fetchUpdates(6);
                setItems(data);
                logger.info("Updates fetched", { count: data.length });
            } catch (e) {
                setError("Failed to load updates");
                logger.error("Updates fetch failed", e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <div className="container"><div className="card updates-card">Loading…</div></div>;
    if (error) return <div className="container"><div className="card updates-card">{error}</div></div>;

    return (
        <div className="container">
            <h1>📰 Updates</h1>
            <div className="updates-grid">
                {items.map((u) => (
                    <article key={u.id} className="card updates-card">
                        <h3 className="updates-title">{u.title}</h3>
                        <p className="updates-body">{u.body}</p>
                        <div className="updates-meta">
                            {formatDistanceToNow(new Date(u.createdAt), { addSuffix: true })}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
