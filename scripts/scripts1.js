const pets = [
  { name: "Luna", type: "cat", age: 2 },
  { name: "Toby", type: "dog", age: 4 },
  { name: "Nala", type: "rabbit", age: 1 },
  { name: "Rocky", type: "dog", age: 3 },
  { name: "Mia", type: "cat", age: 5 }
];

const btn = document.getElementById('petBtn');
const info = document.getElementById('petInfo');

function showRandomPet() {
  const index = Math.floor(Math.random() * pets.length);
  const pet = pets[index];
  const message = `Meet ${pet.name}, a ${pet.age}-year-old ${pet.type} looking for a loving home.`;
  localStorage.setItem('lastPet', JSON.stringify(pet));
  info.textContent = message;
}

btn?.addEventListener('click', showRandomPet);

const saved = localStorage.getItem('lastPet');
if (saved) {
  const pet = JSON.parse(saved);
  info.textContent = `Last viewed: ${pet.name}, ${pet.age} years old ${pet.type}.`;
}

const previewForm = document.getElementById('previewForm');
previewForm?.addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! We'll get in touch soon.");
  previewForm.reset();
});
