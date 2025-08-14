import { useEffect, useState } from 'react';
import { logger } from '../utils/logger';

type Entry = { level: 'debug' | 'info' | 'warn' | 'error'; message: string; ts: number };

export default function LogViewer() {
    const [entries, setEntries] = useState<Entry[]>([]);
    useEffect(() => {
        return logger.subscribe(e => {
            setEntries(prev => [...prev.slice(-199), { level: e.level, message: e.message, ts: e.ts }]);
        });
    }, []);
    return (
        <div className="card" style={{ maxHeight: 180, overflow: 'auto', fontSize: 12 }}>
            <strong>Logs</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                {entries.map((e, i) => (
                    <li key={i}>[{new Date(e.ts).toLocaleTimeString()}] {e.level.toUpperCase()}: {e.message}</li>
                ))}
            </ul>
        </div>
    );
}
