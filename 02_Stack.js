const Stack = function() {
  let items = new WeakMap();
  class Stack {
    constructor() {
      items.set(this, []);
    }

    push = function(item) {
      items.get(this).push(item);
    };

    pop = () => {
      return items.get(this).pop();
    };

    peek = () => {
      return items.get(this)[this.items.length - 1];
    };

    isEmpty = () => {
      return items.get(this).length === 0;
    };

    size = () => {
      return items.get(this).length;
    };

    clear = () => {
      items.set(this, []);
    };

    print = () => {
      console.log(items.get(this).toString());
    };
  }

  return Stack;
};
