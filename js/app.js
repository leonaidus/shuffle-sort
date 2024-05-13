const colors = ["#333333", "#EFEFEF", "#72C3DC", "#2B8EAD", "#6F98A8", "#BFBFBF", "#2F454E"];
let a = ""
function shuffleNumbers() {
  const parent = document.getElementById("number-block");
  const numbers = Array.from(parent.children);
  numbers.sort(() => Math.random() - 0.5); // Shuffle the numbers

  for (let i = 0; i < numbers.length; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    numbers[i].children[0].style.backgroundColor = colors[randomIndex];
    parent.appendChild(numbers[i]);
  }
}
function sortNumbers() {
  let i;
  const parent = document.getElementById("number-block");
  const numbers = Array.from(parent.children);
  numbers.sort((a, b) => {
    return parseInt(a.children[1].textContent) - parseInt(b.children[1].textContent);
  });

  for (i = 0; i < numbers.length; i++) {
    parent.removeChild(parent.children[0]);
    parent.appendChild(numbers[i].cloneNode(true));
  }
}

window.onload = function() {
  shuffleNumbers();
  sortNumbers();
};
