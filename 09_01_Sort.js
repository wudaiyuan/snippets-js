class ArrayList {
  constructor() {
    this.array = [];
  }

  swap(index1, index2) {
    [this.array[index1], this.array[index2]] = [this.array[index2], this.array[index1]];
  }

  bubbleSort() {
    let length = this.array.length;
    this.array.forEach((element, index, array) => {
      for (let i = 0; i < length - 1 - index; i++) {
        if (array[i] > array[i + 1]) {
          this.swap(i, i + 1);
        }
      }
    });
  }
}
