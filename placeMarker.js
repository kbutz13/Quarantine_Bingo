
window.onload=function(){
  let boxes = document.querySelectorAll('div[id^="box"]');
  let clearButton = document.getElementById("clear");
  // Now, we use forEach to trigger a function for each id beginning with "box"  (we are Looping over each box... aka adding listeners to each box)
  boxes.forEach(function(box) {

// Add click listener to the current box
  // Pass the event to the callback function
	box.addEventListener('click', function() {

  	// 'event.target' is the target of our click -
    // the specific box we clicked on. Add the 
    // 'marked' class to that box
    box.classList.toggle('marked');
  });
});

clearButton.addEventListener("click",function(){
  boxes.forEach(function(box){
    box.classList.remove("marked");
  })

});
}


//// Next, when there are 5 divs in a row with class "marker" are on them, trigger an event 

