// here we need three things donne here
/* 
1. targeting the html, that we need to update when the logic hits, that is 0
2. having the two function, one for the minu and one for the plus
*/
let count = 0;
const countHeader = document.getElementById("count");
countHeader.innerHTML = count;

const add = document.getElementById("plus");
const minus = document.getElementById("minus");

add.addEventListener("click", () => {
  count++;
  countHeader.innerHTML = count;
});

minus.addEventListener("click", () => {
  count--;
  countHeader.innerHTML = count;
});
