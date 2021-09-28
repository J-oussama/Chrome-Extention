
let inputEl = document.querySelector(".input-field")
let textEl = document.getElementById("text-el")
function saveEl()
{ 
  textEl.innerHTML += `<a href='${inputEl.value}' target="_blank"> ${inputEl.value} </a><br>
  `
}