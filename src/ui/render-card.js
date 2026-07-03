import { clipText, titleCase } from '../utils/format.js';

export function renderCallCard(call) {
  const title = titleCase(call.title || 'untitled call');
  const summary = clipText(call.summary || 'no summary yet', 140);
  const status = call.status || 'new';

  return [
    '----------------------------------------',
    title,
    `status: ${status}`,
    '',
    summary,
    '----------------------------------------'
  ].join('\n');
}

export function renderActionList(actions) {
  if (!actions || actions.length === 0) {
    return 'no action items found';
  }

  return actions
    .map((action, index) => `${index + 1}. ${action.text} [${action.owner}]`)
    .join('\n');
}
