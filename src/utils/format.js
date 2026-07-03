export function titleCase(input) {
  return String(input)
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function clipText(input, maxLength = 120) {
  const value = String(input);
  if (value.length <= maxLength) return value;
  return value.slice(0, maxLength - 3) + '...';
}

export function formatPercent(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return '0%';
  return `${Math.round(num * 100)}%`;
}

export function padId(value, width = 4) {
  return String(value).padStart(width, '0');
}
