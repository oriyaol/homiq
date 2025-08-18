import "../styles/stat-card.css";

type Props = { label: string; value: number | string; hint?: string };

export default function StatCard({ label, value, hint }: Props) {
    return (
        <div className="card stat-card">
            <div className="stat-card__label">{label}</div>
            <div className="stat-card__value">{value}</div>
            {hint ? <div className="stat-card__hint">{hint}</div> : null}
        </div>
    );
}
