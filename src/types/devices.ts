// src/types/devices.ts
export type DeviceType = 'light' | 'plug' | 'thermostat';
export type Room = 'living' | 'bedroom' | 'kitchen' | 'hall';

export type Device = {
    id: string;
    name: string;
    type: DeviceType; // שימוש ביוניון שהגדרת
    on: boolean;
    room?: Room;      // שימוש ביוניון לחדרים
};
