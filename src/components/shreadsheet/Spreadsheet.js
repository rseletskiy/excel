import {$} from '@core/dom';

export class Spreadsheet {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'exel');
    this.components.forEach(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
    })

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
