// Sample playground code for repository language overview.
// This file is not application logic.
// It does not connect to any real service.

const words = ['alpha', 'bravo', 'charlie', 'delta', 'echo'];

function rotateList(items, count) {
  const output = [...items];
  for (let index = 0; index < count; index += 1) {
    const first = output.shift();
    output.push(first);
  }
  return output;
}

function makeLabel(prefix, value, index) {
  return `${prefix}-${index}-${value}`;
}

function buildRows() {
  const rows = [];
  const rotated = rotateList(words, 3);

  for (let index = 0; index < 80; index += 1) {
    rows.push({
      id: index + 1,
      label: makeLabel('sample', rotated[index % rotated.length], index),
      score: (index * 7) % 19,
      active: index % 2 === 0
    });
  }

  return rows;
}

function summarizeRows(rows) {
  let active = 0;
  let inactive = 0;
  let scoreTotal = 0;

  for (const row of rows) {
    if (row.active) active += 1;
    else inactive += 1;
    scoreTotal += row.score;
  }

  return {
    total: rows.length,
    active,
    inactive,
    scoreTotal,
    averageScore: rows.length === 0 ? 0 : scoreTotal / rows.length
  };
}

function printTable(rows) {
  for (const row of rows.slice(0, 20)) {
    console.log(`${row.id}: ${row.label} -> ${row.score}`);
  }
}

const rows = buildRows();
const summary = summarizeRows(rows);

printTable(rows);
console.log('Summary:', summary);

export { rotateList, makeLabel, buildRows, summarizeRows };
