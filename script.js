const recommendations = {
    beach: {
        title: "Beach Recommendations",
        items: [
            {
                name: "Maldives Beach",
                image: "images/beach1.svg",
                description: "Relax on the beautiful beaches of the Maldives."
            },
            {
                name: "Bali Beach",
                image: "images/beach2.svg",
                description: "Enjoy the tropical beaches and scenery of Bali."
            }
        ]
    },

    temple: {
        title: "Temple Recommendations",
        items: [
            {
                name: "Angkor Wat",
                image: "images/temple1.svg",
                description: "Explore the historic Angkor Wat temple in Cambodia."
            },
            {
                name: "Golden Temple",
                image: "images/temple2.svg",
                description: "Visit the famous Golden Temple in India."
            }
        ]
    },

    country: {
        title: "Country Recommendations",
        items: [
            {
                name: "Pakistan",
                image: "images/country1.svg",
                description: "Discover the landscapes, culture, and heritage of Pakistan."
            },
            {
                name: "Japan",
                image: "images/country2.svg",
                description: "Experience the culture, technology, and natural beauty of Japan."
            }
        ]
    }
};

function displayRecommendations(category) {
    const result = document.getElementById("searchResult");
    const recommendation = recommendations[category];

    result.innerHTML = `
        <h2>${recommendation.title}</h2>
        <div class="search-results-grid">
            ${recommendation.items.map(item => `
                <div class="search-result-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            `).join("")}
        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function searchRecommendation() {
    const input = document.getElementById("searchInput").value
        .trim()
        .toLowerCase();

    if (input === "") {
        document.getElementById("searchResult").innerHTML =
            "<p>Please enter a destination or category.</p>";
        return;
    }

    if (
        input.includes("beach") ||
        input.includes("beaches") ||
        input.includes("maldives") ||
        input.includes("bali")
    ) {
        displayRecommendations("beach");

    } else if (
        input.includes("temple") ||
        input.includes("temples") ||
        input.includes("angkor") ||
        input.includes("golden")
    ) {
        displayRecommendations("temple");

    } else if (
        input.includes("country") ||
        input.includes("countries") ||
        input.includes("pakistan") ||
        input.includes("japan")
    ) {
        displayRecommendations("country");

    } else {
        document.getElementById("searchResult").innerHTML =
            "<h2>Recommendation</h2>" +
            "<p>No matching destination found. Try beach, temple, or country.</p>";
    }
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResult").innerHTML = "";
}

function scrollToRecommendations() {
    document.getElementById("recommendations").scrollIntoView({
        behavior: "smooth"
    });
}
