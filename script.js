alert(DONE)
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",function(e){
    e.preventDefault();// prevent page reload alert("Thanks for contacting me!");
});

//scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

//Show/hide button when scrolling 
window.onscroll = function() {
    if (window.scrollY>300) {
        scrollTopBtn.style.display="block";
    } else{
        scrollTopBtn.style.display="none"
    }
};

//scroll to top smoothly
scrollTopBtn.onclick=function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};