document.addEventListener('DOMContentLoaded', () => {

    const planets = document.querySelectorAll('.planet');

    const infoBox = document.getElementById('info-box');
    const infoTitle = document.getElementById('info-title');
    const infofact = document.getElementById('info-fact');

    const planetData = {
        mercury: {
            name: "Mercury",
            fact: "A year on Mercury is just as 88 Earth days long, but a single day lasts for nearly 59 days!"
        },
        venus: {
            name: "Venus",
            fact: "Venus spins backwards compared to most other planets, meaning the sun rises in the west and sets in the east!"
        },
        earth: {
            name: "Earth",
            fact: "Earth is the only planet in our solar system not named after a mythological god or goddess—its name just means 'the ground'!"
        },
        mars: {
            name: "Mars",
            fact: "Mars is home to Olympus Mons, a giant shield volcano that is three times taller than Mount Everest!"
        },
        jupiter: {
            name: "Jupiter",
            fact: "Jupiter is a cosmic vacuum cleaner! Its massive gravity attracts and deflects comets and asteroids, protecting Earth from impacts."
        },
        saturn: {
            name: "Saturn",
            fact: "Saturn is less dense than water. If you could find a bathtub big enough to hold it, Saturn would actually float!"
        },
        uranus: {
            name: "Uranus",
            fact: "Uranus is the ultimate slacker—it rotates completely on its side like a rolling ball, likely due to a massive ancient collision!"
        },
        neptune: {
            name: "Neptune",
            fact: "Neptune has the most violent weather in the solar system, featuring whip-cracking winds that reach up to 1,200 miles per hour!"
        }
    };

    function showInfo(event) {
        const planetId = event.target.dataset.planet;
        const data = planeData[planetData];

        if (data) {
            infoTitle.textContent = data.name;
            infofact.textContent = data.fact;

            infoBox.classList.remove('hidden');
        }
    }

    function hideInfo() {
        infoBox.classList.add('hidden');

    }

    planets.forEach(planet => {
        planet.addEventListener('mouseenter', showInfo);
        planet.addEventListener('mouseleave', hideInfo);
    })
})