import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Formula extends SpreadsheetComponent {
  static className = 'excel__formula';

  toHTML() {
    return `
      <div class="formula-icon">fx</div>
      <div class="formula-input" contenteditable="true" spellcheck="false">
      </div>
    `
  }
}
