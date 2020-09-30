game = new Game();

function guessClick() {
  
  let letter = $('#txtLetter').val();

  if(letter === '') {
     alert('Please enter letter');
     return;
  }

  let result = game.guess(letter);
  setUiValues();
}

function restartClick() {
   game.restart();
   setUiValues();
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