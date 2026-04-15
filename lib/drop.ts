// Drop timing logic. The next ANOMALY drop is always 2 weeks from "start date" cycle.
// Deterministic based on clock.

const DROP_CYCLE_DAYS = 14;
const BASE_EPOCH = new Date('2026-04-14T20:00:00+09:00').getTime();

export function getNextDropTime(): number {
  const now = Date.now();
  const elapsed = now - BASE_EPOCH;
  const cycleMs = DROP_CYCLE_DAYS * 24 * 60 * 60 * 1000;
  const cyclesPast = Math.floor(elapsed / cycleMs);
  return BASE_EPOCH + (cyclesPast + 1) * cycleMs;
}

export function getCurrentDropNumber(): number {
  const now = Date.now();
  const elapsed = now - BASE_EPOCH;
  const cycleMs = DROP_CYCLE_DAYS * 24 * 60 * 60 * 1000;
  return 7 + Math.floor(elapsed / cycleMs) + 1;
}

export function formatCountdown(targetMs: number, now: number = Date.now()) {
  const diff = Math.max(0, targetMs - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    mins: String(mins).padStart(2, '0'),
    secs: String(secs).padStart(2, '0'),
    raw: diff,
  };
}
