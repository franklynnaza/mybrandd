const handleOnMouseMove = e => {
const {
    currentTarget: target}
    = e;
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}
for(const card of document.querySelectorAll(".container, .service-card")){
    card.onmousemove = e => handleOnMouseMove(e);
}  


const faqs = document.querySelectorAll(".action");

faqs.forEach((action) =>{
    action.addEventListener("click", () =>{
        action.classList.toggle("active")
    })
    
})

// JavaScript to handle the testimonial slider
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let currentTestimonialIndex = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.classList.add("active");
        } else {
          testimonial.classList.remove("active");
        }
      });
    }
  
    function showNextTestimonial() {
      currentTestimonialIndex++;
      if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
      }
      showTestimonial(currentTestimonialIndex);
    }
  
    // Show the first testimonial initially
    showTestimonial(currentTestimonialIndex);
  
    // Change testimonial every 5 seconds (adjust as needed)
    setInterval(showNextTestimonial, 5000);
  });
  





  const nav = document.querySelector(".navbar");
  const togglew = document.querySelector(".togglew");
  const polish =document.querySelector(".polish");
  const i =document.querySelectorAll("i");
 
      function menutoggle(){
nav.style.transform = "translateX(00px)"
 togglew.style.display=("none")
 nav.style.transition ="transform .5s"
 i.style.transform ="rotate(90deg)"
}

function tipl(){
    nav.style.transform = "translateX(2000px)"
    togglew.style.display=("initial")
    nav.style.transition ="transform .5s"
}

