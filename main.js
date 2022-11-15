let bdwish = document.getElementById('bdwish');
bdwish.style.display = 'none';
let mid = document.getElementById('mid');
let btn = document.getElementById('btn');
let music = new Audio('mus.mp3');
let otherName = document.getElementById('otherName');
let abs = document.getElementById('abs');
let inputBox = document.getElementById('inputBox');

btn.addEventListener('click', () => {
  if (inputBox.value.length > 0) {
    mid.style.display = 'none';
bdwish.style.display='block';
abs.style.display = 'block';
otherName.innerHTML="( " + inputBox.value + " ) ";
   music.play();

  } else {
    alert(" Please Enter your Name");
  }

})
