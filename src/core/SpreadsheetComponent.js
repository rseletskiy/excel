import {DOMListener} from '@core/DOMListener';

export class SpreadsheetComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  // return component template
  toHTML() {
    return ''
  }

  init() {
    this.initDomListeners();
  }
}
