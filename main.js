console.log("JavaScript is working!");

function showAll() {
  const spinner = document.getElementById("spinner-container");
  spinner.style.display = "none";
  const everything = document.getElementById("everything");
  everything.hidden = false;

  // creature moevement

  // function floatBullKelp() {
  //   const float = gsap.timeline({ repeat: -1, yoyo: true });
  //   float
  //move top left
  // .to(".bullkelp", 3, { y: "-=30", x: "+=20", rotation: "-=5", ease: Power1.easeInOut })

  // //move down right
  // .to(".bullkelp", 2, { y: "+=30", x: "-=20", rotation: "-=5", ease: Power1.easeInOut })

  // .to(".bullkelp", 3, { y: "-=20", rotation: "+=5", ease: Power1.easeInOut })

  // .to(".bullkelp", 3, { y: "+=20", rotation: "+=5", ease: Power1.easeInOut })

  //     .to(".bullkelp", 3, { y: "-=50", ease: Power1.easeInOut })
  //     .to(".bullkelp", 3, { y: "+=50", ease: Power1.easeInOut })
  //     .to(".bullkelp", 3, { y: "-=30", ease: Power1.easeInOut })
  //     .to(".bullkelp", 3, { y: "+=30", ease: Power1.easeInOut })
  //     .to(".bullkelp", 2, { y: "-=30", ease: Power1.easeInOut })
  //     .to(".bullkelp", 2, { y: "+=30", ease: Power1.easeInOut });

  //   // TweenLite.to(float, 27, { ease: Power1.easeInOut });
  // }
  // floatBullKelp();

  // function floatStick() {
  //   const float = gsap.timeline({ repeat: -1, yoyo: true });
  //   float
  //     .to(".stick", 3, { y: "-=15", ease: Power1.easeInOut })
  //     .to(".stick", 3, { y: "+=15", ease: Power1.easeInOut })
  //     .to(".stick", 3, { y: "-=10", ease: Power1.easeInOut })
  //     .to(".stick", 3, { y: "+=10", ease: Power1.easeInOut })
  //     .to(".stick", 2, { y: "-=10", ease: Power1.easeInOut })
  //     .to(".stick", 2, { y: "+=10", ease: Power1.easeInOut });
  // }
  // floatStick();

  // function floatStick2() {
  //   const float = gsap.timeline({ repeat: -1, yoyo: true });
  //   float
  //     .to(".stick2", 3, { y: "-=15", ease: Power1.easeInOut })
  //     .to(".stick2", 3, { y: "+=15", ease: Power1.easeInOut })
  //     .to(".stick2", 3, { y: "-=10", ease: Power1.easeInOut })
  //     .to(".stick2", 3, { y: "+=10", ease: Power1.easeInOut })
  //     .to(".stick2", 2, { y: "-=10", ease: Power1.easeInOut })
  //     .to(".stick2", 2, { y: "+=10", ease: Power1.easeInOut });
  // }
  // floatStick2();

  // function floatOtter() {
  //   const float = gsap.timeline({ repeat: -1, yoyo: true });
  //   float
  //     .to(".otter", 3, { y: "-=25", ease: Power1.easeInOut })
  //     .to(".otter", 3, { y: "+=25", ease: Power1.easeInOut })
  //     .to(".otter", 3, { y: "-=15", ease: Power1.easeInOut })
  //     .to(".otter", 3, { y: "+=15", ease: Power1.easeInOut })
  //     .to(".otter", 2, { y: "-=15", ease: Power1.easeInOut })
  //     .to(".otter", 2, { y: "+=15", ease: Power1.easeInOut });
  // }
  // floatOtter();

  // Function for vertical float animation (for bullkelp)
  // same stuff written above but neater

  function floatVertical(target, yMovements) {
    const float = gsap.timeline({ repeat: -1, yoyo: true });

    yMovements.forEach((movement) => {
      float.to(target, movement.duration, {
        y: movement.value,
        ease: Power1.easeInOut,
      });
    });
  }

  // Function for horizontal float animation (for stick, stick2, and otter)
  function floatHorizontal(target, xMovements) {
    const float = gsap.timeline({ repeat: -1, yoyo: true });

    xMovements.forEach((movement) => {
      float.to(target, movement.duration, {
        x: movement.value,
        ease: Power1.easeInOut,
      });
    });
  }

  // Animate .bullkelp (up and down)
  floatVertical(".bullkelp", [
    { duration: 3, value: "-=50" },
    { duration: 3, value: "+=50" },
    { duration: 3, value: "-=30" },
    { duration: 3, value: "+=30" },
    { duration: 2, value: "-=30" },
    { duration: 2, value: "+=30" },
  ]);

  // Animate .stick (left and right)
  floatHorizontal(".stick", [
    { duration: 3, value: "-=20" },
    { duration: 3, value: "+=20" },
    { duration: 3, value: "-=15" },
    { duration: 3, value: "+=15" },
    { duration: 2, value: "-=10" },
    { duration: 2, value: "+=10" },
  ]);

  // Animate .stick2 (left and right)
  floatHorizontal(".stick2", [
    { duration: 3, value: "-=20" },
    { duration: 3, value: "+=20" },
    { duration: 3, value: "-=15" },
    { duration: 3, value: "+=15" },
    { duration: 2, value: "-=10" },
    { duration: 2, value: "+=10" },
  ]);

  // Animate .otter (left and right)
  floatHorizontal(".otter", [
    { duration: 3, value: "-=25" },
    { duration: 3, value: "+=25" },
    { duration: 3, value: "-=20" },
    { duration: 3, value: "+=20" },
    { duration: 2, value: "-=15" },
    { duration: 2, value: "+=15" },
  ]);

  //bubbles//
  var action = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".problem-section",
        start: "top bottom",
        end: "+=750",
        scrub: 0.3,
      },
      defaults: { duration: 3, ease: "none" },
    })
    .to(".bubbles", 3, { y: "-=1500", ease: Power1.easeInOut });
}

//loading page// 
const loadPercent = document.getElementById("load-percent");
function incrementLoad() {
  // reverse later

  // const current = parseInt(loadPercent.textContent);
  // loadPercent.textContent = current + 2;
  // if (current + 2 < 100) {
  //   setTimeout(incrementLoad, 28);
  // } else {
  //   setTimeout(showAll, 300);
  // }
  showAll();
}
incrementLoad();

// Toggle Contact Form Visibility
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const form = document.getElementById("contact-form");
    form.classList.toggle("active");
    scrollToForm(form);
  });
});

// Smooth Scroll to Contact Form
function scrollToForm(form) {
  form.scrollIntoView({
    behavior: "smooth",
  });
}

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Basic form validation and alert for demonstration purposes
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
  contactForm.classList.remove("active");
});

//pop up//

// popup1 = document.getElementById("popup1");
// popupbutton1 = document.getElementById("popupbutton1");
// popupbutton1.addEventListener("click", () => {
//   popup1.active = !popup1.active;
// });

// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger);
// });

// pop up toggle
//kelp button
const popupkelp = document.getElementById("popupkelp");
const popupbuttonkelp = document.getElementById("popupbuttonkelp");
const indicatorkelp = document.getElementById("indicatorkelp");

popupbuttonkelp.addEventListener("click", () => {
  popupkelp.active = !popupkelp.active;

  let color = getComputedStyle(popupbuttonkelp).getPropertyValue("color");
  let backgroundColor = getComputedStyle(popupbuttonkelp).getPropertyValue("background-color");

  popupbuttonkelp.style.backgroundColor = color;
  popupbuttonkelp.style.color = backgroundColor;
  indicatorkelp.style.backgroundColor = backgroundColor;
});

//otter button
const popupotter = document.getElementById("popupotter");
const popupbuttonotter = document.getElementById("popupbuttonotter");
const indicatorotter = document.getElementById("indicatorotter");

popupbuttonotter.addEventListener("click", () => {
  popupotter.active = !popupotter.active;

  let color = getComputedStyle(popupbuttonotter).getPropertyValue("color");
  let backgroundColor = getComputedStyle(popupbuttonotter).getPropertyValue("background-color");

  popupbuttonotter.style.backgroundColor = color;
  popupbuttonotter.style.color = backgroundColor;
  indicatorotter.style.backgroundColor = backgroundColor;
});
//uni button
const popupuni = document.getElementById("popupuni");
const popupbuttonuni = document.getElementById("popupbuttonuni");
const indicatoruni = document.getElementById("indicatoruni");

popupbuttonuni.addEventListener("click", () => {
  popupuni.active = !popupuni.active;

  let color = getComputedStyle(popupbuttonuni).getPropertyValue("color");
  let backgroundColor = getComputedStyle(popupbuttonuni).getPropertyValue("background-color");

  popupbuttonuni.style.backgroundColor = color;
  popupbuttonuni.style.color = backgroundColor;
  indicatoruni.style.backgroundColor = backgroundColor;
});
//starfish - want to make this popup upwards
const popupstarfish = document.getElementById("popupstarfish");
const popupbuttonstarfish = document.getElementById("popupbuttonstarfish");
const indicatorstarfish = document.getElementById("indicatorstarfish");

popupbuttonstarfish.addEventListener("click", () => {
  popupstarfish.active = !popupstarfish.active;

  let color = getComputedStyle(popupbuttonstarfish).getPropertyValue("color");
  let backgroundColor = getComputedStyle(popupbuttonstarfish).getPropertyValue("background-color");

  popupbuttonstarfish.style.backgroundColor = color;
  popupbuttonstarfish.style.color = backgroundColor;
  indicatorstarfish.style.backgroundColor = backgroundColor;
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});
