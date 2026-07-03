export function cleanTranscript(input) {
  return String(input)
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n');
}

export function countSpeakers(input) {
  const speakers = new Set();
  const lines = cleanTranscript(input).split('\n');

  for (const line of lines) {
    const index = line.indexOf(':');
    if (index > 0) {
      speakers.add(line.slice(0, index).trim());
    }
  }

  return speakers.size;
}

export function getTranscriptStats(input) {
  const clean = cleanTranscript(input);
  const lines = clean ? clean.split('\n') : [];
  const wordCount = clean.split(/\s+/).filter(Boolean).length;

  return {
    lines: lines.length,
    words: wordCount,
    speakers: countSpeakers(clean)
  };
}
