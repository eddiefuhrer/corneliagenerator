
document.addEventListener("DOMContentLoaded", () => {
  const normalDeck = [...prompts].sort(() => 0.5 - Math.random());
  const milestoneDeck = [...milestones].sort(() => 0.5 - Math.random());
  const output = document.getElementById("output");

  let promptIndex = 0;
  let milestoneIndex = 0;

  const promptBtn = document.getElementById("nextPromptBtn");
  const milestoneBtn = document.getElementById("nextMilestoneBtn");
  const finalBtn = document.getElementById("finalConfrontationBtn");

 function showCard(card) {
  let html = `<h2>${card.title}</h2><p>${card.text}</p>`;

  if (card.options) {
    html += `<ul>`;
    for (const [key, val] of Object.entries(card.options)) {
      html += `<li><strong>${key}:</strong> ${val}</li>`;
    }
    html += `</ul>`;
  }

  if (card.token_effect) {
    html += `<p><em>Token Effect:</em> ${card.token_effect}</p>`;
  }

  output.innerHTML = html;
}
  promptBtn.addEventListener("click", () => {
    if (promptIndex < normalDeck.length) {
      showCard(normalDeck[promptIndex]);
      promptIndex++;
    } else {
      output.innerHTML = "<p><strong>No more standard prompts to draw.</strong></p>";
    }
  });

  milestoneBtn.addEventListener("click", () => {
    if (milestoneIndex < milestoneDeck.length) {
      showCard(milestoneDeck[milestoneIndex]);
      milestoneIndex++;
    } else {
      output.innerHTML = "<p><strong>No more milestone prompts to draw.</strong></p>";
    }
  });

  finalConfrontationBtn.addEventListener("click", () => {
  showCard(finalConfrontation);
});

  finalBtn.addEventListener("click", () => {
    showCard(finalConfrontationCard);
  });
});
