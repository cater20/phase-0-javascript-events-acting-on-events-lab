const dodger = document.getElementById("dodger");
//dodger.style.left="180px"

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
     dodger.style.left = `${left - 1}px`;
   }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  false


  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
     dodger.style.left = `${left + 1}px`;
   }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "Arrowup") {
      moveDodgerRight();
    }
  });
  false