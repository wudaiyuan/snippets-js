class MySet {
  constructor() {
    this.items = {};
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(set) {
    let unionSet = new MySet();

    this.values().forEach(value => {
      unionSet.add(value);
    });

    set.values().forEach(value => {
      unionSet.add(value);
    });

    return unionSet;
  }

  intersection(set) {
    let intersectionSet = new MySet();

    this.values().forEach(value => {
      if (set.has(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(set) {
    let differenceSet = new MySet();

    this.values().forEach(value => {
      if (!set.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  subset(set) {
    if (this.size() > set.size()) {
      return false;
    } else {
      return this.values().every(value => {
        if (set.has(value)) {
          return true;
        }
        return false;
      });
    }
  }
}
