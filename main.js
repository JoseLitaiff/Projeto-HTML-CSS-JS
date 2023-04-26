var counter = 0;

const counterDownButton = document.querySelector("#counter-down");
const counterUpButton = document.querySelector("#counter-up");

const refreshScreen = () =>{
  document.querySelector("h1").textContent = counter;
}; 

const counterDown= () => {
  counter--;
  refreshScreen();
};
const counterUp = () => {
  counter++;
  refreshScreen();
};

counterDownButton.addEventListener("click",  counterDown);

counterUpButton.addEventListener("click",  counterUp);

window.onload = refreshScreen;