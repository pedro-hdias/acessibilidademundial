/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Spike McLarty | http://www.dosadi.com/ */

function copyDate() {
  var cpyrt = document.getElementById("copyright")
  if (cpyrt) {
     cpyrt.firstChild.nodeValue = (new Date()).getFullYear();
  }
}

window.onload = copyDate;
