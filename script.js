
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Currency switcher
const currencyButtons = document.querySelectorAll(".currency-button");
const prices = document.querySelectorAll(".price");

currencyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const currency = button.dataset.currency;

    currencyButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    prices.forEach(price => {
      price.textContent = price.dataset[currency.toLowerCase()];
    });
  });
});

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Replace this with your actual email address
  const businessEmail = "meganyjoan.a@gmail.com";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Project enquiry: " + service);

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\nService: " + service +
    "\n\nProject details:\n" + message
  );

  window.location.href =
    "mailto:" + businessEmail +
    "?subject=" + subject +
    "&body=" + body;
});

// Automatic footer year
document.getElementById("year").textContent = new Date().getFullYear();
