var imgIndex = 1;

function guessClick() {
   var pic = document.getElementById('hangmanPic');
   pic.src = 'img/'+imgIndex+'.jpg';
   ++imgIndex;
}