import { logger } from '../utils/logger';
import LogViewer from '../components/LogViewer';

export default function Home() {
    return (
        <div className="container">
            <h1>🏠 Homiq</h1>
            <p>Welcome Homiq</p>

            <div className="card" style={{ marginTop: "1rem" }}>
                <h3 style={{ marginTop: 0 }}>Quick Actions</h3>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                    <button className="btn" onClick={() => logger.info('Quick Action: Good Morning triggered')}>
                        ☀️ Good Morning
                    </button>
                    <button className="btn" onClick={() => logger.info('Quick Action: Movie Night triggered')}>
                        🎬 Movie Night
                    </button>
                </div>
            </div>

            <div className="card" style={{ marginTop: "1rem" }}>
                <h3 style={{ marginTop: 0 }}>Status</h3>
                <p>אין עדיין נתוני מכשירים — נתחיל להוסיף בהמשך.</p>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <LogViewer />
            </div>
        </div>
    );
}
