document.addEventListener("DOMContentLoaded", function() {
    // Example dynamic content loading
    const docs = [
        { title: "HTML Basics", description: "Introduction to HTML.", link: "htmlBasics.html" },
        { title: "CSS Fundamentals", description: "Learn the basics of CSS.", link: "cssFundamentals.html" },
        { title: "JavaScript Guide", description: "Getting started with JavaScript.", link: "javaScriptGuide.html" }
    ];

    const docContainer = document.querySelector(".doc-container");
    
    docs.forEach(doc => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3><a href="${doc.link}" class="doc-link">${doc.title}</a></h3>
            <p>${doc.description}</p>
        `;
        docContainer.appendChild(card);
    });
});