export function todayKey(now = new Date()) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function plusDays(date, days) {
  const next = new Date(date.getTime());
  next.setDate(next.getDate() + days);
  return next;
}

export function simpleDueLabel(date, now = new Date()) {
  const diff = date.getTime() - now.getTime();
  const days = Math.round(diff / 86400000);

  if (days === 0) return 'today';
  if (days === 1) return 'tomorrow';
  if (days < 0) return 'overdue';
  return `in ${days} days`;
}
