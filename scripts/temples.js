const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('footerInfo').textContent = 
  `© ${currentYear} 🌸 Ingrid Rios 🌸 Peru | Last modified: ${lastModified}`;

const hamburgerBtn = document.createElement("button");
hamburgerBtn.setAttribute("id", "hamburgerBtn");
hamburgerBtn.setAttribute("aria-label", "Toggle menu");
hamburgerBtn.innerHTML = "☰";

const nav = document.querySelector("nav");
nav.parentNode.insertBefore(hamburgerBtn, nav);

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburgerBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
