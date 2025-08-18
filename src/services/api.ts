// src/services/api.ts
import axios from "axios";
import type { Device } from "../types/devices";

// ---- Devices ----
export async function fetchDevices(): Promise<Device[]> {
    const { data } = await axios.get<Device[]>("/api/devices");
    return data;
}

export async function setDeviceState(id: string, on: boolean): Promise<Device> {
    const { data } = await axios.post<Device>(`/api/devices/${id}/toggle`, { on });
    return data;
}

// ---- Updates ----
export type UpdateItem = {
    version: string;   // "0.2.0"
    date: string;      // "2025-08-18"
    notes: string[];   // ["Add X", "Fix Y"]
};

export async function fetchUpdates(): Promise<UpdateItem[]> {
    const { data } = await axios.get<UpdateItem[]>("/updates.json", {
        headers: { "cache-control": "no-cache" },
    });
    return data;
}
