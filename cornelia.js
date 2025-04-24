
document.addEventListener("DOMContentLoaded", () => {
  const finalDeck = drawDeckWithMilestones(prompts, milestones);
  let currentIndex = 0;

  const output = document.getElementById("output");
  const counter = document.getElementById("promptCounter");
  const button = document.getElementById("nextPromptBtn");

  function showNextPrompt() {
    if (currentIndex < finalDeck.length) {
      const p = finalDeck[currentIndex];
      let html = `<h2>${p.title}</h2><p>${p.text}</p><ul>`;
      for (const [key, val] of Object.entries(p.options)) {
        html += `<li><strong>${key}:</strong> ${val}</li>`;
      }
      html += `</ul><p><em>Token Effect:</em> ${p.token_effect}</p>`;
      output.innerHTML = html;
      counter.innerText = `Card ${currentIndex + 1} of ${finalDeck.length}`;
      currentIndex++;
    } else {
      output.innerHTML = "<p><strong>No more prompts to draw.</strong></p>";
      counter.innerText = "";
    }
  }

  button.addEventListener("click", showNextPrompt);
});
