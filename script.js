let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

let counter = 0; 
function incrementor(){
    counter = counter +1; 
    
     var textheading = document.getElementById('headingLine').innerText;
    document.getElementById('headingLine').textContent =  "The number counter is " + counter;
   
    
}
function decrementor(){
    counter = counter -1; 
      document.getElementById('headingLine').textContent =  "The number counter is " + counter;
}