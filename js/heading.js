const header = document.querySelector("h1");

//change header on mouseover
header.addEventListener("mouseover", function(){
    header.innerText="(Un)inevitable Injuries";
})

header.addEventListener("mouseleave", function(){
    header.innerText="Inevitable Injuries";
})