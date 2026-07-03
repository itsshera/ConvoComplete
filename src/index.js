// first public prototype entry point
// this is small on purpose. the heavy stuff lives in modules.

import { sampleTranscript } from './prototype/sample-transcript.js';
import { makeQuickSummary } from './prototype/summary.js';
import { findActionItems } from './prototype/action-items.js';

function main() {
  const summary = makeQuickSummary(sampleTranscript);
  const actions = findActionItems(sampleTranscript);

  console.log('convocomplete prototype');
  console.log('summary:', summary);
  console.log('actions:', actions);
}

main();
