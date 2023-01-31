let tous = document.querySelector('#all');
let ventz = document.querySelector('#sale');
let locass = document.querySelector('#rental');
let meubless = document.querySelector('#furnished');

let chbrs = document.querySelector('.chambres');
let stds = document.querySelector('.studios');
let maiz = document.querySelector('.maisons');
let apptmts = document.querySelector('.appartements');
let ters = document.querySelector('.terrains');

tous.addEventListener("click", function() {
  chbrs.style.display = "block";
  stds.style.display = "block";
  maiz.style.display = "block";
  apptmts.style.display = "block";
  ters.style.display = "block";
});

ventz.addEventListener("click", function() {
  chbrs.style.display = "none";
  stds.style.display = "block";
  maiz.style.display = "block";
  apptmts.style.display = "block";
  ters.style.display = "block";
});

locass.addEventListener("click", function() {
  chbrs.style.display = "block";
  stds.style.display = "block";
  maiz.style.display = "block";
  apptmts.style.display = "block";
  ters.style.display = "block";
});

meubless.addEventListener("click", function() {
  chbrs.style.display = "block";
  stds.style.display = "block";
  maiz.style.display = "block";
  apptmts.style.display = "block";
  ters.style.display = "none";
});