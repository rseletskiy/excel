import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Table extends SpreadsheetComponent {
  static className = 'excel__table';
  toHTML() {
    return `
      <div class="row">
          <div class="row-info"></div>
          <div class="row-data">
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
          </div>
      </div>

      <div class="row">
          <div class="row-info">1</div>
          <div class="row-data">
              <div class="cell selected" contenteditable="true">a1</div>
              <div class="cell" contenteditable="true">b2</div>
              <div class="cell" contenteditable="true">c3</div>
          </div>
      </div>
      <div class="row">
          <div class="row-info">2</div>
          <div class="row-data">
              <div class="cell" contenteditable="true">a1</div>
              <div class="cell" contenteditable="true">b2</div>
              <div class="cell" contenteditable="true">c3</div>
          </div>
      </div>
    `
  }
}
