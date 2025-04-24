const milestones = [
  {
    "title": "Milestone 1: The First Spark",
    "text": "A fire breaks out in the supply hold. Both sides accuse each other.",
    "options": {
      "SHIP": "Blame the town's scouts for infiltration.",
      "TOWN": "Blame poor oversight by the guards.",
      "TRADITION": "Defer to the elders to investigate.",
      "INNOVATION": "Start your own inquiry among the youth."
    },
    "token_effect": "Spend 1 token to find a burnt object that reveals a clue."
  },
  {
    "title": "Milestone 2: The Broken Bridge",
    "text": "The only working passage between ship and island collapses.",
    "options": {
      "SHIP": "Secure the ship from potential raids.",
      "TOWN": "Begin building an alternative route.",
      "TRADITION": "Blame modern tools for weakening the structure.",
      "INNOVATION": "Design a floating replacement raft."
    },
    "token_effect": "Spend 1 token to discover who last used the bridge."
  },
  {
    "title": "Milestone 3: Elmer\u2019s Fall",
    "text": "Elmer is found missing. Rumors spread fast.",
    "options": {
      "SHIP": "Assume he betrayed the crew and fled.",
      "TOWN": "Suspect Flanagan's people of foul play.",
      "TRADITION": "Refuse to speculate without evidence.",
      "INNOVATION": "Start a movement to document the truth."
    },
    "token_effect": "Spend 1 token to learn what he left behind in secret."
  },
  {
    "title": "Milestone 4: Anna\u2019s Letter",
    "text": "A torn-up letter in Anna\u2019s handwriting is found in the town square.",
    "options": {
      "SHIP": "Say it\u2019s forged to incite unrest.",
      "TOWN": "Declare it proof of her loyalty.",
      "TRADITION": "Say she should\u2019ve gone through the proper channels.",
      "INNOVATION": "Use it to rally independent voices."
    },
    "token_effect": "Spend 1 token to reconstruct what the full letter said."
  },
  {
    "title": "Milestone 5: The Fog Shifts",
    "text": "For the first time in weeks, the fog briefly clears.",
    "options": {
      "SHIP": "Use it to launch a patrol mission.",
      "TOWN": "Take it as a sign of hope.",
      "TRADITION": "Warn people not to trust unnatural events.",
      "INNOVATION": "Organize a spontaneous peace dialogue."
    },
    "token_effect": "Spend 1 token to spot something in the distance."
  }
];


function drawDeckWithMilestones(promptDeck, milestoneDeck) {
    let shuffledPrompts = [...promptDeck].sort(() => 0.5 - Math.random()).slice(0, 25);
    let shuffledMilestones = [...milestoneDeck].sort(() => 0.5 - Math.random()).slice(0, 5);
    let finalDeck = [];

    for (let i = 0; i < 30; i++) {
        if ((i + 1) % 6 === 0) {
            finalDeck.push(shuffledMilestones.shift());
        } else {
            finalDeck.push(shuffledPrompts.shift());
        }
    }

    return finalDeck;
}
