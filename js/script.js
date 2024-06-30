
// typing animation -- homePage 

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#element', {
        strings: ['AI/ML Engineer','Robotics Engineer','Ethical Hacker'],
        typeSpeed: 80,
        backSpeed: 50, // Speed at which the text is deleted
        loop: true // Enable looping
    });
});

// typing animation -- aboutPage

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed('#element2', {
      strings: ["Hi! I'm Ashish Ranjan"],
      typeSpeed: 30,
      backSpeed: 10, // Speed at which the text is deleted
      loop: true // Enable looping
  });
});


function page4Animation() {
  var elemC = document.querySelector("#elem-container")
  var fixed = document.querySelector("#fixed-image")
  elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block"
  })
  elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none"
  })

  var elems = document.querySelectorAll(".elem")
  elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
          var image = e.getAttribute("data-image")
          fixed.style.backgroundImage = `url(${image})`
      })
  })
}



page4Animation()