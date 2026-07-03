const phrases = [
  'send proposal tomorrow',
  'customer had pricing concern',
  'schedule follow up next friday',
  'update crm after the call',
  'privacy question needs a clear answer',
  'demo was useful but needs polish'
];

const weights = {
  send: 3,
  proposal: 3,
  tomorrow: 2,
  customer: 1,
  pricing: 3,
  schedule: 3,
  follow: 3,
  crm: 3,
  privacy: 2,
  demo: 1
};

function scorePhrase(phrase) {
  const words = phrase.split(/\s+/);
  let score = 0;

  for (const word of words) {
    score += weights[word] || 0;
  }

  return score;
}

function rankPhrases(items) {
  return items
    .map((text) => ({ text, score: scorePhrase(text) }))
    .sort((a, b) => b.score - a.score);
}

for (const item of rankPhrases(phrases)) {
  console.log(item.score, item.text);
}

// FIXME: this is too keyword heavy. later try phrase groups instead.
