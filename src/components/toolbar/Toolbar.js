import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Toolbar extends SpreadsheetComponent {
  static className = 'excel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
      <button type="button">
          <i class="material-icons">format_bold</i>
      </button>
      <button type="button">
          <i class="material-icons">format_italic</i>
      </button>
      <button type="button">
          <i class="material-icons">format_underline</i>
      </button>
      <button type="button">
          <i class="material-icons">format_align_left</i>
      </button>
      <button type="button">
          <i class="material-icons">format_align_center</i>
      </button>
      <button type="button">
          <i class="material-icons">format_align_right</i>
      </button>
    `
  }


  onClick(event) {
    console.log(event.target)
  }
}
