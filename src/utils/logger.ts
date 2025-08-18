type Level = 'debug' | 'info' | 'warn' | 'error';

const levelOrder: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };
let currentLevel: Level = (import.meta.env.MODE === 'production') ? 'info' : 'debug';

type LogEntry = { level: Level; message: string; meta?: unknown; ts: number };
type Subscriber = (e: LogEntry) => void;
const subscribers = new Set<Subscriber>();

function emit(level: Level, message: string, meta?: unknown) {
    if (levelOrder[level] < levelOrder[currentLevel]) return;
    const entry: LogEntry = { level, message, meta, ts: Date.now() };

    const tag = `[Homiq][${level}]`;
    if (level === 'error') console.error(tag, message, meta ?? '');
    else if (level === 'warn') console.warn(tag, message, meta ?? '');
    else console.log(tag, message, meta ?? '');

    subscribers.forEach(fn => fn(entry));
}

export const logger = {
    setLevel(lvl: Level) { currentLevel = lvl; },
    subscribe(fn: Subscriber) {
        subscribers.add(fn);
        return () => {
            subscribers.delete(fn); // מחזיר boolean, אבל אנחנו לא מחזירים אותו הלאה
        };
    },
    debug(msg: string, meta?: unknown) { emit('debug', msg, meta); },
    info(msg: string, meta?: unknown) { emit('info', msg, meta); },
    warn(msg: string, meta?: unknown) { emit('warn', msg, meta); },
    error(msg: string, meta?: unknown) { emit('error', msg, meta); },
};

