'use strict';

let controls = document.querySelector('.slider-controls');
let slides = document.querySelector('.slider-list');
let slidesItem = document.querySelectorAll('.slider-item');
let position = 0;
let width;

controls.addEventListener('change', function(evt) {
  let target = evt.target;
  
  moveSlide(target.value);
});

function moveSlide(slideIndex) {
  width = -100 / slidesItem.length;
  position = width * slideIndex;
  slides.style.transform = 'translateX(' + position + '%)';
}

function changeChecked() {
  let controlsInput = controls.querySelectorAll('.slider-input');

  for (let i = 0; i < controlsInput.length; i++) {
    
    if (controlsInput[i].checked === true) {
      controlsInput[i].checked = false;
      
      if (i < controlsInput.length - 1) {
        controlsInput[i += 1].checked = true;
        
        moveSlide(controlsInput[i].value);
      } else {
        controlsInput[0].checked = true;
        
        moveSlide(controlsInput[0].value);
      }
      
    }
    
  }
  
}

setInterval(changeChecked, 5000);