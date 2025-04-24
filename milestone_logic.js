const milestones = [
  {
    "title": "Milestone: The First Spark",
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
    "title": "Milestone: The Broken Bridge",
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
    "title": "Milestone: Elmer\u2019s Fall",
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
    "title": "Milestone: Anna\u2019s Letter",
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
    "title": "Milestone: The Fog Shifts",
    "text": "For the first time in weeks, the fog briefly clears.",
    "options": {
      "SHIP": "Use it to launch a patrol mission.",
      "TOWN": "Take it as a sign of hope.",
      "TRADITION": "Warn people not to trust unnatural events.",
      "INNOVATION": "Organize a spontaneous peace dialogue."
    },
    "token_effect": "Spend 1 token to spot something in the distance."
  },
  {
    "title": "Milestone: The Disrupted Lesson",
    "text": "A teacher is publicly challenged in class, and the ship's children begin to question everything.",
    "options": {
      "SHIP": "Demand discipline for the disrespect shown.",
      "TOWN": "Encourage the debate to continue outside.",
      "TRADITION": "Remind the class of old codes of conduct.",
      "INNOVATION": "Start your own learning circle."
    },
    "token_effect": "Spend 1 token to learn what sparked the rebellion in the first place."
  },
  {
    "title": "Milestone: The Town Divides",
    "text": "A rift forms in the town between peaceful elders and younger radicals.",
    "options": {
      "SHIP": "Exploit the division to delay talks.",
      "TOWN": "Try to unify both sides before it spreads.",
      "TRADITION": "Take the elder side and urge calm.",
      "INNOVATION": "Align with the youth and push forward."
    },
    "token_effect": "Spend 1 token to influence which group gains more power."
  },
  {
    "title": "Milestone: A Guard Defects",
    "text": "A ship guard appears in town, claiming to want peace.",
    "options": {
      "SHIP": "Brand them a traitor and issue a warrant.",
      "TOWN": "Shelter them and question their motives.",
      "TRADITION": "Call for a council judgment.",
      "INNOVATION": "Ask them to testify about ship politics."
    },
    "token_effect": "Spend 1 token to uncover who knew about their defection before it happened."
  },
  {
    "title": "Milestone: The Masked Speaker",
    "text": "Someone wearing a mask interrupts a town gathering with a dangerous manifesto.",
    "options": {
      "SHIP": "Assume they\u2019re from the town and retaliate.",
      "TOWN": "Deny affiliation and investigate immediately.",
      "TRADITION": "Ask for secrecy to preserve order.",
      "INNOVATION": "Distribute the ideas and see who reacts."
    },
    "token_effect": "Spend 1 token to identify the speaker\u2014or inspire others to follow them."
  },
  {
    "title": "Milestone: The Vanishing Scout",
    "text": "A scout goes missing during a fog expedition\u2014leaving only their journal behind.",
    "options": {
      "SHIP": "Assume foul play and restrict travel.",
      "TOWN": "Send a rescue party with volunteers.",
      "TRADITION": "Declare the route cursed.",
      "INNOVATION": "Decode the journal for new clues."
    },
    "token_effect": "Spend 1 token to discover what the scout saw before vanishing."
  }
];

const finalConfrontationCard = {
  "title": "Final Milestone: The Confrontation",
  "text": "The fog parts. The ship and town stand at the edge of war. The choices you've made bring everyone to this moment.",
  "options": {
    "SHIP": "Push for complete control\u2014enforce Flanagan\u2019s vision.",
    "TOWN": "Demand full separation and freedom.",
    "TRADITION": "Insist on mediation by the elders.",
    "INNOVATION": "Propose a new society built by all generations."
  },
  "token_effect": "Spend 1 token to shift one final reputation before the ending is decided."
};


function drawDeckWithMilestones(promptDeck, milestoneDeck) {
    let shuffledPrompts = [...promptDeck].sort(() => 0.5 - Math.random()).slice(0, 25);
    let shuffledMilestones = [...milestoneDeck].sort(() => 0.5 - Math.random()).slice(0, 4);
    let finalDeck = [];

    for (let i = 0; i < 30; i++) {
        if ((i + 1) % 6 === 0 && i < 29) {
            finalDeck.push(shuffledMilestones.shift());
        } else if (i === 29) {
            finalDeck.push(finalConfrontationCard);
        } else {
            finalDeck.push(shuffledPrompts.shift());
        }
    }

    return finalDeck;
}
