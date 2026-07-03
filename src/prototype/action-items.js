const actionWords = ['send', 'schedule', 'add', 'include', 'test', 'follow'];

export function findActionItems(text) {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const items = [];

  for (const line of lines) {
    const lower = line.toLowerCase();
    const hasAction = actionWords.some((word) => lower.includes(word));

    if (hasAction) {
      items.push({
        text: line,
        owner: guessOwner(line),
        status: 'open',
        confidence: roughConfidence(lower)
      });
    }
  }

  return items;
}

function guessOwner(line) {
  if (line.startsWith('Riya:')) return 'Riya';
  if (line.startsWith('Amit:')) return 'Amit';
  return 'unknown';
}

function roughConfidence(line) {
  let score = 0.35;
  if (line.includes('tomorrow')) score += 0.2;
  if (line.includes('friday')) score += 0.2;
  if (line.includes('will')) score += 0.15;
  if (line.includes('done')) score += 0.1;
  return Math.min(score, 0.95);
}
