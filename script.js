const recommendations = {
    beach: "Beach recommendations: Maldives Beach and Bali Beach.",
    temple: "Temple recommendations: Angkor Wat and Golden Temple.",
    pakistan: "Country recommendation: Pakistan.",
    japan: "Country recommendation: Japan."
};

function searchRecommendation() {
    const input = document.getElementById("searchInput").value
        .trim()
        .toLowerCase();

    const result = document.getElementById("searchResult");

    if (input === "") {
        result.innerHTML = "<p>Please enter a destination or category.</p>";
        return;
    }

    if (
        input.includes("beach") ||
        input.includes("maldives") ||
        input.includes("bali")
    ) {
        result.innerHTML =
            "<h2>Beach Recommendation</h2><p>" +
            recommendations.beach +
            "</p>";

    } else if (
        input.includes("temple") ||
        input.includes("angkor") ||
        input.includes("golden")
    ) {
        result.innerHTML =
            "<h2>Temple Recommendation</h2><p>" +
            recommendations.temple +
            "</p>";

    } else if (input.includes("pakistan")) {
        result.innerHTML =
            "<h2>Country Recommendation</h2><p>" +
            recommendations.pakistan +
            "</p>";

    } else if (input.includes("japan")) {
        result.innerHTML =
            "<h2>Country Recommendation</h2><p>" +
            recommendations.japan +
            "</p>";

    } else {
        result.innerHTML =
            "<h2>Recommendation</h2>" +
            "<p>No matching destination found. Try beach, temple, Pakistan, or Japan.</p>";
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
