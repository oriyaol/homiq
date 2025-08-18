// src/types/devices.ts
export type DeviceType = 'light' | 'plug' | 'thermostat';

export type Device = {
    id: string;
    name: string;
    type: "light" | "plug" | "thermostat";
    on: boolean;
    room?: "living" | "bedroom" | "kitchen" | "hall"; // חדש (אופציונלי)
};
