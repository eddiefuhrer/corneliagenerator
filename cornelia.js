const prompts = [
    {
        title: "The Other Side",
        text: "You find a drawing of a shoreline no one claims to have seen. It’s hidden inside an old crate.",
        options: {
            SHIP: "You turn it over to the guard.",
            TOWN: "You show it to someone from the island.",
            TRADITION: "You bury it. Some truths shouldn’t resurface.",
            INNOVATION: "You pin it in a public place."
        },
        token_effect: "Spend 1 token to discover who drew it."
    },
    {
        title: "A Child Asks You",
        text: "A child asks if the fog will ever go away.",
        options: {
            SHIP: "You say the fog keeps them safe.",
            TOWN: "You say the fog hides what Flanagan fears.",
            TRADITION: "You tell them not to question it.",
            INNOVATION: "You say one day, they’ll find the edge."
        },
        token_effect: "Spend 1 token to inspire them with a secret story."
    },
    {
        title: "Elmer’s Journal",
        text: "A page of Elmer’s journal slips from a stack. It’s written to someone he never named.",
        options: {
            SHIP: "You destroy it—his secrets died with him.",
            TOWN: "You share it with a town elder.",
            TRADITION: "You keep it for his daughter.",
            INNOVATION: "You pass it anonymously to a student."
        },
        token_effect: "Spend 1 token to read the full contents."
    },
    {
        title: "The Quiet Meeting",
        text: "Two figures from opposite sides speak in secret. You see it happen.",
        options: {
            SHIP: "You report them.",
            TOWN: "You ask to join them.",
            TRADITION: "You warn them the old ways never forgive betrayal.",
            INNOVATION: "You offer to pass messages."
        },
        token_effect: "Spend 1 token to learn what they were trading."
    },
    {
        title: "A Voice in the Fog",
        text: "You hear someone call your name while the fog rolls in. No one is there.",
        options: {
            SHIP: "You assume it’s a trick and tell the guard.",
            TOWN: "You follow the voice.",
            TRADITION: "You mark the place and return nightly.",
            INNOVATION: "You tell others. It might mean something."
        },
        token_effect: "Spend 1 token to find a buried artifact in the mist."
    }
];

const milestones = [
    "Milestone 1: The First Spark - A fire breaks out in one of the lower decks. The town is blamed—no proof, just fear.",
    "Milestone 2: The Visit - Two town leaders arrive aboard the ship under a flag of peace. Captain Flanagan refuses to meet them.",
    "Milestone 3: Elmer’s Fall - During the night, Elmer falls overboard. His body is never recovered. No one takes credit. Everyone takes sides."
];

function generatePrompts() {
    const output = document.getElementById('output');
    output.innerHTML = '';

    const selectedPrompts = prompts.sort(() => 0.5 - Math.random()).slice(0, 3);
    const selectedMilestones = milestones.sort(() => 0.5 - Math.random()).slice(0, 2);

    let html = '<h2>Prompts</h2>';
    selectedPrompts.forEach((p, i) => {
        html += `<h4>${i + 1}. ${p.title}</h4><p>${p.text}</p><ul>`;
        for (const [key, val] of Object.entries(p.options)) {
            html += `<li><strong>${key}:</strong> ${val}</li>`;
        }
        html += `</ul><p><em>Token Effect:</em> ${p.token_effect}</p>`;
    });

    html += '<h2>Milestones</h2><ul>';
    selectedMilestones.forEach(m => {
        html += `<li>${m}</li>`;
    });
    html += '</ul>';

    output.innerHTML = html;
}
