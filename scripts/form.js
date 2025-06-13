const currentYear = new Date().getFullYear();
document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🌸 Ingrid Rios 🌸 Peru`;

const lastModified = document.lastModified;
document.querySelector('footer p:nth-of-type(2)').innerHTML = `Last modified: ${lastModified}`;

const products = [
  { id: "prod001", name: "Product A" },
  { id: "prod002", name: "Product B" },
  { id: "prod003", name: "Product C" }
];

window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
