class Game {
    constructor() {
       this.maxRetryCount = 6;
       this.hiddenSign = '_';
       this._retryCount = 0;
       this.triedLetters = [];
       this.nameToGuess = '';
       this._hiddenName = '';
       this.restart();
    }

    static guessResult = {
        ALREADY_USED : 0,
        SUCCESS : 1,
        DOES_NOT_EXIST : 2,
        GAME_OVER : 3,
        WORD_GUEST : 4
    }

    restart() {
        this._retryCount = 0;
        this.triedLetters = [];

        this.getRandomName();
    }

    guess(letter) {
      let lu = letter.toUpperCase();

      if(this.triedLetters.includes(lu)) {
          return Game.guessResult.ALREADY_USED;
      }

      this.triedLetters.push(lu);

      if(this.nameToGuess.toUpperCase().includes(lu)) {

        let nameToGuessArray = this._hiddenName.split('');

        for (let index = 0; index < this.nameToGuess.length; index++) {
            if(this.nameToGuess.toUpperCase()[index] == lu) {
                nameToGuessArray[index] = lu;
            }
        }

        this._hiddenName = nameToGuessArray.join('');

        return (this._hiddenName.indexOf(this.hiddenSign) < 0 ? Game.guessResult.WORD_GUEST : Game.guessResult.SUCCESS);

      } else {
          ++this._retryCount;
          return (this._retryCount == this.maxRetryCount ? Game.guessResult.GAME_OVER : Game.guessResult.DOES_NOT_EXIST);
      }

    }

    getRandomName() {
        let names = [];
        names.push('dog');
        names.push('cat');
        names.push('Finland');

        let wordIndex = Math.floor((Math.random() * names.length));

        this.nameToGuess = names[wordIndex];

        this._hiddenName = '';

        for (let index = 0; index < this.nameToGuess.length; index++) {
            this._hiddenName += this.hiddenSign;
        }
    }

    get hiddenName() {
        return this._hiddenName;
    }

    get retryCount() {
        return this._retryCount;
    }

    get name() {
        return this.nameToGuess;
    }
}