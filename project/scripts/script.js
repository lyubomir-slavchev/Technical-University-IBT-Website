var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}







const txt1 = document.getElementById("tbuser");
const txt2 = document.getElementById("tbuser1");

const BtnAdd = document.querySelector("#btn1");

const DivContainer = document.getElementById("review-form");

BtnAdd.addEventListener("click", addNew);

function addNew(){
  const newDiv = document.createElement("div");
  const newP1 = document.createElement("p")
  const newP2 = document.createElement("p")
  console.log("add");
  newDiv.classList.add('output-box');
  newP1.classList.add('output');
  newP1.setAttribute('id','output1')
  newP2.classList.add('output');
  newP2.setAttribute('id','output2')
  DivContainer.appendChild(newDiv);
  newDiv.appendChild(newP1);
  newDiv.appendChild(newP2);

newP1.innerHTML = txt1.value
newP2.innerHTML = txt2.value
}






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buy-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn.addEventListener("click",addtext)
function addtext(){
  const modaltxt =document.getElementById('modalp');
  modaltxt.innerHTML = txt1.value + " Thanks for your order";
}
