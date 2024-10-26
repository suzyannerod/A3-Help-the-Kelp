console.log("JavaScript is working!");

function showAll() {
  const spinner = document.getElementById("spinner-container");
  spinner.style.display = "none";
  const everything = document.getElementById("everything");
  everything.hidden = false;
}

const loadPercent = document.getElementById("load-percent");
function incrementLoad() {
  const current = parseInt(loadPercent.textContent);
  loadPercent.textContent = current + 2;
  if (current + 2 < 100) {
    setTimeout(incrementLoad, 28);
  } else {
    setTimeout(showAll, 300);
  }
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
