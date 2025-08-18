import axios from "axios";

// axios instance – אם תרצי, תחליפי ל־baseURL אמיתי בהמשך
export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 8000,
});

// טיפוס “עדכון” בפיד
export type UpdateItem = {
    id: number;
    title: string;
    body: string;
    createdAt: string; // ISO
};

// פונקציה שמביאה עדכונים (דמו) ומייצרת תאריכים אחרונים
export async function fetchUpdates(limit = 6): Promise<UpdateItem[]> {
    const res = await api.get(`/posts?_limit=${limit}`);
    const now = Date.now();
    return res.data.map((p: any, idx: number) => ({
        id: p.id,
        title: p.title,
        body: p.body,
        // דמו: מפזר זמנים ב- 0–90 דקות אחורה
        createdAt: new Date(now - (idx + 1) * 15 * 60 * 1000).toISOString(),
    }));
}
