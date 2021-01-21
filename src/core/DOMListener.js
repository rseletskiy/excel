export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DOMListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    console.log(this.listeners)
  }

  removeDomListeners() {

  }
}
