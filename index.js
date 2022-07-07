class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)

    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    } else {
      return Math.min(...this.items)

    }
  }

  sum() {
    if (!this.items.length) {
      return 0
    } else {
      return this.items.reduce((acc, cur) => acc + cur)
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
