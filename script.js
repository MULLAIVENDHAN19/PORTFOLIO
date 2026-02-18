const text = "MULLAI";
const title = document.getElementById("title");

text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${index * 0.15}s`;
    title.appendChild(span);
});

window.addEventListener("load", function(){

    // Play sound (some browsers require interaction)
    const sound = document.getElementById("introSound");
    sound.volume = 0.4;
    sound.play().catch(()=>{});

    setTimeout(function(){
        document.getElementById("loader").style.opacity="0";
        document.getElementById("loader").style.transition="1s ease";
        setTimeout(function(){
            document.getElementById("loader").style.display="none";
        },1000);
    },3800);
});
window.addEventListener("load", function(){
    setTimeout(function(){
        document.getElementById("loader").style.opacity="0";
        document.getElementById("loader").style.transition="0.8s";
        setTimeout(function(){
            document.getElementById("loader").style.display="none";
        },800);
    },2500);
});

// Scroll Reveal
function reveal(){
    let reveals=document.querySelectorAll(".reveal");

    for(let i=0;i<reveals.length;i++){
        let windowHeight=window.innerHeight;
        let elementTop=reveals[i].getBoundingClientRect().top;
        let elementVisible=100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
function reveal(){
    let reveals=document.querySelectorAll(".reveal");

    for(let i=0;i<reveals.length;i++){
        let windowHeight=window.innerHeight;
        let elementTop=reveals[i].getBoundingClientRect().top;
        let elementVisible=100;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
    }
}
const bgText = document.querySelector(".bg-text");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    bgText.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

window.addEventListener("scroll", reveal);

