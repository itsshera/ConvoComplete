import { sampleTranscript, transcriptMeta } from '../prototype/sample-transcript.js';
import { makeQuickSummary } from '../prototype/summary.js';
import { findActionItems } from '../prototype/action-items.js';
import { formatPercent } from '../utils/format.js';

const summary = makeQuickSummary(sampleTranscript);
const actions = findActionItems(sampleTranscript);

console.log('--- convocomplete demo run ---');
console.log('customer:', transcriptMeta.customer);
console.log('owner:', transcriptMeta.owner);
console.log('summary:', summary);
console.log('actions:');

for (const action of actions) {
  console.log(`- ${action.text}`);
  console.log(`  owner: ${action.owner}`);
  console.log(`  confidence: ${formatPercent(action.confidence)}`);
}
