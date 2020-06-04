function change(){
  var num = Math.floor(Math.random()*5)+1;  // number of images stored
  document.querySelector(".para").style.background= "url("+ num +".jpg)";
  document.querySelector(".para").style.backgroundSize= "100%";
  document.querySelector(".para").style.webkitBackgroundClip= "text";
  document.querySelector(".para").style.webkitTextFillColor= "rgba(255, 255, 255, 0.05)";
}
