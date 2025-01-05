document.querySelectorAll(".planet-box").forEach(box => {
    box.addEventListener("click", () => {
        const info = box.getAttribute("data-info");
        if (info) {
            const speech = new SpeechSynthesisUtterance(info);
            speech.lang = "en-US";
            window.speechSynthesis.speak(speech);
        }
    });
});

// Rotations
const planets = [
    { selector: '.mercury-group', duration: 3 },
    { selector: '.venus-group', duration: 5 },
    { selector: '.earth-group', duration: 7 },
    { selector: '.mars-group', duration: 9 },
    { selector: '.jupiter-group', duration: 11 },
    { selector: '.saturn-group', duration: 13 },
    { selector: '.uranus-group', duration: 15 },
    { selector: '.neptune-group', duration: 17 }
];

planets.forEach(planet => {
    const element = document.querySelector(planet.selector);
    element.style.animation = `rotate ${planet.duration}s linear infinite`;
});
