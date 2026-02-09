const recipes = [
  { name: "Pasta", difficulty: "EASY", time: 20 },
  { name: "Burger", difficulty: "MEDIUM", time: 30 },
  { name: "Biryani", difficulty: "HARD", time: 60 },
  { name: "Salad", difficulty: "EASY", time: 10 },
  { name: "Pizza", difficulty: "MEDIUM", time: 25 },
];

let currentFilter = "ALL";
let currentSort = null;

// PURE FILTER FUNCTIONS
const filterFunctions = {
  ALL: (recipes) => recipes,
  EASY: (recipes) => recipes.filter(r => r.difficulty === "EASY"),
  MEDIUM: (recipes) => recipes.filter(r => r.difficulty === "MEDIUM"),
  HARD: (recipes) => recipes.filter(r => r.difficulty === "HARD"),
  QUICK: (recipes) => recipes.filter(r => r.time < 30),
};

// PURE SORT FUNCTIONS
const sortFunctions = {
  NAME: (recipes) => [...recipes].sort((a, b) => a.name.localeCompare(b.name)),
  TIME: (recipes) => [...recipes].sort((a, b) => a.time - b.time),
};

function updateDisplay() {
  const filtered = filterFunctions[currentFilter](recipes);
  const sorted = currentSort ? sortFunctions[currentSort](filtered) : filtered;

  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  sorted.forEach(recipe => {
    const li = document.createElement("li");
    li.textContent = `${recipe.name} — ${recipe.difficulty} — ${recipe.time} mins`;
    list.appendChild(li);
  });
}

function setFilter(filter) {
  currentFilter = filter;
  updateDisplay();
}

function setSort(sort) {
  currentSort = sort;
  updateDisplay();
}

updateDisplay();
