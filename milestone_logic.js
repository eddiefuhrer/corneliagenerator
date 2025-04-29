// Prompts array (already done - your 25 prompt cards)

// Milestones array
const milestones = [
  {
    title: "Milestone 1: The First Spark",
    text: "A fire breaks out in one of the lower decks. The town is blamed—no proof, just fear. Each player must decide who they think is responsible: the town or the ship's own paranoia. Player with the lowest TOWN score must make a public statement."
  },
  {
    title: "Milestone 2: The Visit",
    text: "Two town leaders arrive aboard the ship under a flag of peace. Captain Flanagan refuses to meet them. Players must decide: Support the refusal or attempt to intervene. Players who act are marked as traitors or heroes depending on alignment. +1 shift on both SHIP↔TOWN and INNOVATION↔TRADITION."
  },
  {
    title: "Milestone 3: Elmer’s Fall",
    text: "During the night, Elmer falls overboard. His body is never recovered. No one takes credit. Everyone takes sides. Each player must decide: accident, message, or justice? If the majority blame the Town, all shift +1 SHIP. If the majority blame the Ship, all shift +1 TOWN."
  },
  {
    title: "Milestone 4: The Truth Unravels",
    text: "Pages from a hidden journal circulate. Someone has known the truth about the fog all along. The group must debate what to do: burn the pages, publish them, or hide them again. Outcome shifts INNOVATION↔TRADITION axis collectively."
  }
];

// Track milestone progress
let milestoneIndex = 0;

// Function to draw next milestone
function drawMilestone() {
  if (milestoneIndex < milestones.length) {
    const milestone = milestones[milestoneIndex];
    milestoneIndex++;
    displayCard(milestone); // ← Assuming you have a display function
  } else {
    alert("All milestones have already been drawn!");
  }
}
