export function splitLines(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

export function makeQuickSummary(text) {
  const lines = splitLines(text);
  const useful = [];

  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower.includes('proposal')) useful.push(line);
    if (lower.includes('follow')) useful.push(line);
    if (lower.includes('pricing')) useful.push(line);
    if (lower.includes('privacy')) useful.push(line);
  }

  if (useful.length === 0) {
    return 'call had a discussion but no strong summary line was picked';
  }

  return useful.slice(0, 3).join(' ');
}
