// THEME TOGGLE
function toggleTheme(){
    document.body.classList.toggle("light");
}

// SCROLL REVEAL
function reveal(){
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();oaded successfully 🚀");
