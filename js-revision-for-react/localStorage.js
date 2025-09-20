console.log("Got it");

const handleAddToStorage = () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;

  const data = { name, id };

  localStorage.setItem(id, JSON.stringify(data));
};

// Get Item
const storedItem = localStorage.getItem(13);
console.log(storedItem);

const handleClear = () => {
  localStorage.clear();
};
