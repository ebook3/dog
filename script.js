let vvod = document.querySelector(".data");
let vyvod = document.querySelector(".rez");


function catrun() {
    catAge = vvod.value;
    catAge = Math.log(catAge) * 16 + 31;
    vyvod.value = catAge;
}



let button2 = document.querySelector(".btn2");
button2.addEventListener('click', catrun);