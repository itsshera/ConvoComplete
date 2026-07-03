import { makeQuickSummary } from '../src/prototype/summary.js';
import { findActionItems } from '../src/prototype/action-items.js';
import { titleCase, clipText, formatPercent } from '../src/utils/format.js';

function assert(name, condition) {
  if (!condition) {
    throw new Error(`test failed: ${name}`);
  }
  console.log(`ok - ${name}`);
}

const transcript = `
Nina: please send the revised note tomorrow.
Kabir: sure, I will send it.
Nina: also schedule a meeting for friday.
`;

const summary = makeQuickSummary(transcript);
const actions = findActionItems(transcript);

assert('summary has content', summary.length > 10);
assert('action parser finds lines', actions.length >= 2);
assert('title case works', titleCase('hello WORLD') === 'Hello World');
assert('clip text works', clipText('abcdef', 4) === 'a...');
assert('percent works', formatPercent(0.73) === '73%');

console.log('all smoke tests passed');
