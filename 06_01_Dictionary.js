class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  has(key) {
    return key in this.items;
  }

  get(key) {
    if (this.has(key)) {
      return this.items[key];
    } else {
      return undefined;
    }
  }

  clear() {}

  size() {}

  keys() {
    return Object.keys(this.items);
  }

  values() {
    return Object.values(this.items);
  }
}
