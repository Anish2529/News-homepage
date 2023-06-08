const open = document.querySelector(".open")
const close = document.querySelector(".close")
const mobile = document.querySelector(".active-nav")
const body = document.querySelector(".scroll")

open.addEventListener("click",() =>{

    open.style.display = "none"
    close.style.display = "block"
    mobile.style.display = "flex"

    body.classList.toggle("overflow-hidden");
    body.classList.remove("overflow");
})

close.addEventListener("click",() =>{

    open.style.display = "block"
    close.style.display = "none"
    mobile.style.display = "none"


    body.classList.remove("overflow-hidden");
    body.classList.toggle("overflow");
})