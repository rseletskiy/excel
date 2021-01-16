import {SpreadsheetComponent} from '@core/SpreadsheetComponent';

export class Header extends SpreadsheetComponent {
  static className = 'excel__header';
  toHTML() {
    return `
      <div class="table-name">
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#4F8C91"/>
              <rect y="100" width="100" height="100" fill="#045B62"/>
              <rect x="100" width="100" height="100" fill="#4F8C91"/>
              <rect x="200" width="100" height="100" fill="#9BBDC0"/>
              <rect x="200" y="100" width="100" height="100" fill="#4F8C91"/>
              <rect y="200" width="100" height="100" fill="#045B62"/>
              <rect y="300" width="100" height="100" fill="#045B62"/>
              <rect x="100" y="200" width="100" height="100" fill="#045B62"/>
              <rect x="200" y="300" width="100" height="100" fill="#4F8C91"/>
          </svg>
          <input type="text" value="New table">
      </div>
      <div class="btn-group">
          <button type="button">
              <i class="material-icons">delete</i>
          </button>
          <button type="button">
              <i class="material-icons">exit_to_app</i>
          </button>
      </div>
    `
  }
}
