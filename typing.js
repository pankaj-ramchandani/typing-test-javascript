const words =
  "Modern humans arrived on the Indian subcontinent from Africa no later than years ago Their long occupation initially in varying forms of isolation as hunter gatherers has made the region highly diverse second only to Africa in human genetic diversity ".split(
    " "
  );

const wordsCount = words.length;

function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordsCount) - 1;
  return words[randomIndex];
}

function formatWord(word) {
  return `<div class="word">
  <span class="letter">
  ${word.split("").join('</span><span class="letter">')}
</span>
</div>`;
}

function newGame() {
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML += formatWord(randomWord());
  }
}

newGame();
