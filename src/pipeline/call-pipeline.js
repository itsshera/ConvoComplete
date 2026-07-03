import { makeQuickSummary } from '../prototype/summary.js';
import { findActionItems } from '../prototype/action-items.js';
import { buildCrmNote } from '../exporters/crm-note.js';

export function processCallTranscript(input) {
  const startedAt = new Date().toISOString();
  const transcript = input.transcript || '';
  const summary = makeQuickSummary(transcript);
  const actionItems = findActionItems(transcript);
  const crmNote = buildCrmNote({
    customer: input.customer || 'unknown customer',
    owner: input.owner || 'unassigned',
    summary,
    actionItems
  });

  return {
    id: input.id || `call_${Date.now()}`,
    status: 'processed',
    startedAt,
    completedAt: new Date().toISOString(),
    summary,
    actionItems,
    crmNote
  };
}

export function getPipelineSteps() {
  return [
    'receive transcript',
    'clean transcript text',
    'build short summary',
    'extract action items',
    'prepare crm note',
    'return structured output'
  ];
}
