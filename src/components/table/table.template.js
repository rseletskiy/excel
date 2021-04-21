const CHAR_CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable="true"></div>
  `;
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `;
}

function createRow(content, index = '') {
  return `
     <div class="row">
        <div class="row-info">${index}</div>
        <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CHAR_CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CHAR_CODES.Z - CHAR_CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');
    
  rows.push(createRow(cols));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('');

    rows.push(createRow(cells, i + 1));
  }
  return rows.join('');
}
