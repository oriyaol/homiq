import type { Device } from '../types/devices';

type Props = {
    device: Device;
    onToggle: (id: string) => void;
};

const typeEmoji: Record<Device['type'], string> = {
    light: '💡',
    plug: '🔌',
    thermostat: '🌡️',
};

export default function DeviceCard({ device, onToggle }: Props) {
    return (
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 20 }}>{typeEmoji[device.type]}</span>
                <div>
                    <div style={{ fontWeight: 600 }}>{device.name}</div>
                    <div style={{ opacity: 0.8, fontSize: 12 }}>
                        {device.type} • {device.on ? 'On' : 'Off'}
                    </div>
                </div>
            </div>
            <button className="btn" onClick={() => onToggle(device.id)} aria-pressed={device.on}>
                {device.on ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
}
