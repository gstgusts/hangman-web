$(document).ready(function() {
   game = new Game();
   setUiValues();
});

function guessClick() {
  
  let letter = $('#txtLetter').val();

  $('#txtLetter').val('');

  if(letter === '') {
     alert('Please enter letter');
     return;
  }

  let result = game.guess(letter);

  switch (result) {
     case Game.guessResult.ALREADY_USED:
        alert('This letter is already used');
        break;
     case Game.guessResult.GAME_OVER:
        alert('Game over, word was: ' + game.name);
        handleInputAndButtonState(true);
        break;
     case Game.guessResult.WORD_GUEST:
        alert('Congrats!!!');
        handleInputAndButtonState(true);
        break;
  }

  setUiValues();
}

function restartClick() {
   game.restart();
   setUiValues();
   handleInputAndButtonState(false);
}

function setUiValues() {

   let pictureIndex = game.retryCount + 1;
   let imageUrl = 'img/'+pictureIndex+'.jpg';

   $('#hangmanPic').attr('src', imageUrl);

   $('#lblWordToGuess').text(getHiddenNameWithSpaces());
}

function getHiddenNameWithSpaces() {
   return game.hiddenName.split('').join(' ');
}

function handleInputAndButtonState(state) {
   $('#txtLetter').prop('disabled', state);
   $('#btnGuess').prop('disabled', state);
}