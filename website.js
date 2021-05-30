//other javascript
//image slider 
const slider = document.querySelector(".slider input");
  const img = document.querySelector(".images .img-2");
  const dragLine = document.querySelector(".slider .drag-line");
  slider.oninput = ()=>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%"
    img.style.width = sliderVal + "%"
  }

//menu button
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  }
//main javascript project

