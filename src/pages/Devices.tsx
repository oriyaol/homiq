import { useState } from 'react';
import type { Device } from '../types/devices';
import DeviceCard from '../components/DeviceCard';
import { logger } from '../utils/logger'; // ← חדש

const initialDevices: Device[] = [
    { id: 'd1', name: 'Living Room Light', type: 'light', on: true },
    { id: 'd2', name: 'Kitchen Plug', type: 'plug', on: false },
    { id: 'd3', name: 'Hall Thermostat', type: 'thermostat', on: true },
];

export default function Devices() {
    const [devices, setDevices] = useState<Device[]>(initialDevices);

    function toggleDevice(id: string) {
        setDevices(prev => {
            const next = prev.map(d => (d.id === id ? { ...d, on: !d.on } : d));
            const changed = next.find(d => d.id === id)!;
            // לוג מרוכז לאחר השינוי
            logger.info('Device toggled', {
                id: changed.id,
                name: changed.name,
                type: changed.type,
                on: changed.on,
            });
            return next;
        });
    }

    return (
        <div className="container">
            <h1>Devices</h1>
            <p>Manage your devices below.</p>

            <div style={{ display: 'grid', gap: 12 }}>
                {devices.map(d => (
                    <DeviceCard key={d.id} device={d} onToggle={toggleDevice} />
                ))}
            </div>
        </div>
    );
}
