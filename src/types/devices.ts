// src/types/devices.ts
export type DeviceType = 'light' | 'plug' | 'thermostat';

export type Device = {
    id: string;
    name: string;
    type: DeviceType;
    on: boolean;
};
