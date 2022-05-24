const incrementbtn = document.getElementById("increase-btn");
const decrementbtn = document.getElementById("decrease-btn");
const count = document.getElementById("count");

let counter =0;
const increase = () => {
    count.innerHTML = ++counter;
}

const decrease = () =>{
    count.innerHTML = --counter;
}

incrementbtn.addEventListener("click", increase);
decrementbtn.addEventListener("click", decrease);