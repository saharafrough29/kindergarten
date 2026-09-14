const navBtn=document.querySelector(".nav-btn")
const navMenu=document.querySelector(".nav-menu__mobile")

let navOpen=false
navBtn.addEventListener('click',function(){
    if(navOpen){
        navBtn.classList.remove("nav-btn--open")
        navMenu.classList.remove("nav-menu__mobile--open")
        navOpen=false
    }
    else{
        navBtn.classList.add("nav-btn--open")
        navMenu.classList.add("nav-menu__mobile--open")
        navOpen=true
    }
}


)