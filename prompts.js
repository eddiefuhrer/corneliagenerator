const prompts = [
  {
    title: "The Other Side",
    text: "You find a drawing of a shoreline no one claims to have seen. It’s hidden inside an old crate.",
    options: {
      "SHIP": "You turn it over to the guard.",
      "TOWN": "You show it to someone from the island.",
      "TRADITION": "You bury it. Some truths shouldn’t resurface.",
      "INNOVATION": "You pin it in a public place."
    },
    token_effect: "Spend 1 token to discover who drew it."
  },
  {
    title: "A Child Asks You",
    text: "A child asks if the fog will ever go away.",
    options: {
      "SHIP": "You say the fog keeps them safe.",
      "TOWN": "You say the fog hides what Flanagan fears.",
      "TRADITION": "You tell them not to question it.",
      "INNOVATION": "You say one day, they’ll find the edge."
    },
    token_effect: "Spend 1 token to inspire them with a secret story."
  },
  {
    title: "Elmer’s Journal",
    text: "A page of Elmer’s journal slips from a stack. It’s written to someone he never named.",
    options: {
      "SHIP": "You destroy it—his secrets died with him.",
      "TOWN": "You share it with a town elder.",
      "TRADITION": "You keep it for his daughter.",
      "INNOVATION": "You pass it anonymously to a student."
    },
    token_effect: "Spend 1 token to read the full contents."
  },
  {
    title: "The Quiet Meeting",
    text: "Two figures from opposite sides speak in secret. You see it happen.",
    options: {
      "SHIP": "You report them.",
      "TOWN": "You ask to join them.",
      "TRADITION": "You warn them the old ways never forgive betrayal.",
      "INNOVATION": "You offer to pass messages."
    },
    token_effect: "Spend 1 token to learn what they were trading."
  },
  {
    title: "A Voice in the Fog",
    text: "You hear someone call your name while the fog rolls in. No one is there.",
    options: {
      "SHIP": "You assume it’s a trick and tell the guard.",
      "TOWN": "You follow the voice.",
      "TRADITION": "You mark the place and return nightly.",
      "INNOVATION": "You tell others. It might mean something."
    },
    token_effect: "Spend 1 token to find a buried artifact in the mist."
  },
  {
    title: "Jak’s Sketchbook",
    text: "You stumble across one of Jak’s drawings. It depicts the ship in ruins.",
    options: {
      "SHIP": "You confront him.",
      "TOWN": "You steal it.",
      "TRADITION": "You say nothing—art is expression.",
      "INNOVATION": "You share it with a friend."
    },
    token_effect: "Spend 1 token to find a hidden sketch inside."
  },
  {
    title: "The Supplies Go Missing",
    text: "Rations disappear overnight. Suspicion falls on someone you care about.",
    options: {
      "SHIP": "You name them, even if you’re unsure.",
      "TOWN": "You claim responsibility to protect them.",
      "TRADITION": "You ask for a formal investigation.",
      "INNOVATION": "You propose a system where everyone shares rations equally."
    },
    token_effect: "Spend 1 token to find a clue that shifts the blame."
  },
  {
    title: "Ernest’s Warning",
    text: "Ernest says war is inevitable. You’re asked if you agree.",
    options: {
      "SHIP": "You say they must strike first.",
      "TOWN": "You say peace is still possible.",
      "TRADITION": "You defer to the elders.",
      "INNOVATION": "You offer a new path."
    },
    token_effect: "Spend 1 token to uncover something Ernest left behind in his home."
  },
  {
    title: "The Ritual",
    text: "A ceremony honoring the ship’s arrival begins. You’re asked to participate.",
    options: {
      "SHIP": "You take your place proudly.",
      "TOWN": "You sit out in silent protest.",
      "TRADITION": "You lead the opening prayer.",
      "INNOVATION": "You change the ritual mid-act."
    },
    token_effect: "Spend 1 token to learn the ritual’s true origin."
  },
  {
    title: "Cornelia’s Confession",
    text: "Cornelia pulls you aside. She says she doesn’t know if she believes in the rebellion anymore.",
    options: {
      "SHIP": "You tell her to stay silent and stay safe.",
      "TOWN": "You beg her not to give up.",
      "TRADITION": "You say rebellion is a phase.",
      "INNOVATION": "You share your own doubts."
    },
    token_effect: "Spend 1 token to reveal what happened the last time she tried to leave."
  },
  {
    title: "The Island Letter",
    text: "A crumpled letter from the town arrives with no return name. It’s addressed to you.",
    options: {
      "SHIP": "You turn it over to Flanagan immediately.",
      "TOWN": "You read it and write a secret response.",
      "TRADITION": "You seal it away, believing the past must remain buried.",
      "INNOVATION": "You post it publicly, demanding transparency."
    },
    token_effect: "Spend 1 token to learn who sent it."
  },
  {
    title: "Contraband Delivery",
    text: "You're asked to smuggle goods to a contact from the town who is waiting beyond the perimeter.",
    options: {
      "SHIP": "You report the plan before it begins.",
      "TOWN": "You make the delivery.",
      "TRADITION": "You warn the ship's elders discreetly.",
      "INNOVATION": "You suggest forming an open trade system instead."
    },
    token_effect: "Spend 1 token to discover the real contents of the package."
  },
  {
    title: "A Familiar Tune",
    text: "You hear someone humming a lullaby from the town. It’s not supposed to be known on the ship.",
    options: {
      "SHIP": "You ask who taught them and report it.",
      "TOWN": "You hum it back, hoping to connect.",
      "TRADITION": "You say nothing. Some things are better left unspoken.",
      "INNOVATION": "You teach it to others."
    },
    token_effect: "Spend 1 token to remember where you first heard it."
  },
  {
    title: "Unfamiliar Footprints",
    text: "Footprints are found in an off-limits part of the ship. They're not from any resident.",
    options: {
      "SHIP": "You assume infiltration and raise the alarm.",
      "TOWN": "You believe someone from the town came to warn you.",
      "TRADITION": "You block access to the area indefinitely.",
      "INNOVATION": "You follow them."
    },
    token_effect: "Spend 1 token to find a personal object left behind."
  },
  {
    title: "The Town’s Fire",
    text: "Smoke is spotted from the island. Some say it’s a message.",
    options: {
      "SHIP": "You believe it's a threat.",
      "TOWN": "You argue it’s a signal for peace.",
      "TRADITION": "You cite old stories that match the sign.",
      "INNOVATION": "You signal back with your own message."
    },
    token_effect: "Spend 1 token to decipher the fire pattern."
  },
  {
    title: "Town-Bound Dreams",
    text: "You’ve begun dreaming of life on the island. One image returns nightly.",
    options: {
      "SHIP": "You suppress the dreams and tell no one.",
      "TOWN": "You sketch or describe them to others.",
      "TRADITION": "You believe it’s a warning.",
      "INNOVATION": "You believe it’s a calling."
    },
    token_effect: "Spend 1 token to see a second vision."
  },
  {
    title: "A Symbol in the Dust",
    text: "A symbol from the town is drawn outside the ship’s lower entrance. You don’t know who made it.",
    options: {
      "SHIP": "You erase it quickly.",
      "TOWN": "You trace over it.",
      "TRADITION": "You take it as a bad omen.",
      "INNOVATION": "You leave a message in response."
    },
    token_effect: "Spend 1 token to learn what the symbol means."
  },
  {
    title: "The Town’s Offer",
    text: "Someone passes you a message that claims the town is ready to make peace. No one else has seen it.",
    options: {
      "SHIP": "You call it propaganda.",
      "TOWN": "You propose a ceasefire.",
      "TRADITION": "You consult a ship elder before acting.",
      "INNOVATION": "You attempt to initiate a secret summit."
    },
    token_effect: "Spend 1 token to contact the person who wrote it."
  },
  {
    title: "A Stranger in the Water",
    text: "You see someone swimming to the ship from the island before vanishing under the surface.",
    options: {
      "SHIP": "You raise the alarm and block the entrance.",
      "TOWN": "You lower a rope, hoping they’re alive.",
      "TRADITION": "You believe it’s a ghost or omen.",
      "INNOVATION": "You dive in after them."
    },
    token_effect: "Spend 1 token to find what they left behind."
  },
  {
    title: "The Town’s Book",
    text: "A book from the island finds its way to the ship’s library. It’s written in a dialect most can’t read.",
    options: {
      "SHIP": "You recommend its removal.",
      "TOWN": "You protect it and begin translating.",
      "TRADITION": "You suggest a vote on whether to keep it.",
      "INNOVATION": "You rewrite parts of it for others to understand."
    },
    token_effect: "Spend 1 token to learn who originally brought it aboard."
  },
  {
    title: "The Captain’s Shoes",
    text: "Captain Flanagan leaves behind a personal item during an inspection.",
    options: {
      "SHIP": "You return it immediately.",
      "TOWN": "You leave it where others can find it.",
      "TRADITION": "You give it to a ship elder, saying nothing.",
      "INNOVATION": "You hide it and use it to bargain later."
    },
    token_effect: "Spend 1 token to learn why Flanagan left it behind."
  },
  {
    title: "The Vanishing Bell",
    text: "The ship’s evening bell, rung every night for decades, disappears.",
    options: {
      "SHIP": "You offer to craft a new one, stricter and louder.",
      "TOWN": "You insist it’s a chance to change traditions.",
      "TRADITION": "You demand the bell’s return, no questions asked.",
      "INNOVATION": "You suggest a new ritual to replace it."
    },
    token_effect: "Spend 1 token to discover who stole it."
  },
  {
    title: "The Stolen Voice",
    text: "Someone records you saying something you didn't intend to share.",
    options: {
      "SHIP": "You blame the town for manipulating the tapes.",
      "TOWN": "You admit your mistake and call for understanding.",
      "TRADITION": "You deny the recording exists.",
      "INNOVATION": "You release the full recording yourself."
    },
    token_effect: "Spend 1 token to find out who spread the rumor."
  },
  {
    title: "The Broken Oath",
    text: "A friend swears loyalty to one side—then switches.",
    options: {
      "SHIP": "You expose their betrayal.",
      "TOWN": "You forgive them and welcome them back.",
      "TRADITION": "You insist oaths are sacred and irreversible.",
      "INNOVATION": "You argue change is natural."
    },
    token_effect: "Spend 1 token to discover their true motivations."
  },
  {
    title: "The Forgotten Room",
    text: "An abandoned room aboard the ship is found unlocked after years.",
    options: {
      "SHIP": "You seal it immediately.",
      "TOWN": "You explore it in secret.",
      "TRADITION": "You declare it cursed and warn others away.",
      "INNOVATION": "You propose turning it into a meeting place."
    },
    token_effect: "Spend 1 token to uncover who once lived there."
  }
];
