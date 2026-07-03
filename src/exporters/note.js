export function buildCrmNote(data) {
  const lines = [];
  const actionItems = data.actionItems || [];

  lines.push(`Customer: ${data.customer || 'unknown customer'}`);
  lines.push(`Owner: ${data.owner || 'unassigned'}`);
  lines.push('');
  lines.push('Summary');
  lines.push(data.summary || 'No summary available.');
  lines.push('');
  lines.push('Action Items');

  if (actionItems.length === 0) {
    lines.push('- No action items found');
  } else {
    for (const item of actionItems) lines.push(`- ${item.text}`);
  }

  return lines.join('\n');
}
