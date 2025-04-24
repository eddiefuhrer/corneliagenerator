
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
    }
];

let currentIndex = 0;
let shuffledPrompts = prompts.sort(() => 0.5 - Math.random());

function showNextPrompt() {
    const output = document.getElementById("output");
    const counter = document.getElementById("promptCounter");

    if (currentIndex < shuffledPrompts.length) {
        const p = shuffledPrompts[currentIndex];
        let html = `<h2>${p.title}</h2><p>${p.text}</p><ul>`;
        for (const [key, val] of Object.entries(p.options)) {
            html += `<li><strong>${key}:</strong> ${val}</li>`;
        }
        html += `</ul><p><em>Token Effect:</em> ${p.token_effect}</p>`;
        output.innerHTML = html;
        counter.innerText = `Prompt ${currentIndex + 1} of ${shuffledPrompts.length}`;
        currentIndex++;
    } else {
        output.innerHTML = "<p><strong>No more prompts to draw.</strong></p>";
        counter.innerText = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nextPromptBtn").addEventListener("click", showNextPrompt);
});
