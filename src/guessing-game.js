class GuessingGame {
    constructor() {
      this.leftBorder = 0;
      this.rightBorder = 0;
      this.medium = 0;
    }

    setRange(min, max) {
      this.leftBorder = min;
      this.rightBorder = max;
      this.chooseMedium(min, max);
    }

    guess() {
      return this.medium;
    }

    lower() {
      this.rightBorder = this.medium;
      this.chooseMedium(this.leftBorder, this.rightBorder);
    }

    greater() {
      this.leftBorder = this.medium;
      this.chooseMedium(this.leftBorder, this.rightBorder);
    }

    chooseMedium(min, max) {

        this.medium = Math.round((max - min) / 2) + min;
    }
}

module.exports = GuessingGame;
