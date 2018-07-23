const Queue = function() {
  let items = new WeakMap();
  class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue = function(item) {
      items.get(this).push(item);
    };

    dequeue = () => {
      return items.get(this).shift();
    };

    front = () => {
      return items.get(this)[0];
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

  return Queue;
};
