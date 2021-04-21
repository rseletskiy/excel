import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Formula extends SpreadsheetComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  toHTML() {
    return `
      <div class="formula-icon">fx</div>
      <div class="formula-input" contenteditable="true" spellcheck="false">
      </div>
    `
  }

  onInput(event) {
    console.log('OnInput Formula', event);
  }

  onClick(event) {
    console.log('OnClick Formula', event);
  }
}
