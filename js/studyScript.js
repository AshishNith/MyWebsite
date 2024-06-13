document.addEventListener("DOMContentLoaded", function() {
    // Example dynamic content loading
    const docs = [
        { title: "HTML Basics", description: "Introduction to HTML." },
        { title: "CSS Fundamentals", description: "Learn the basics of CSS." },
        { title: "JavaScript Guide", description: "Getting started with JavaScript." }
    ];

    const docContainer = document.querySelector(".doc-container");
    
    docs.forEach(doc => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${doc.title}</h3>
            <p>${doc.description}</p>
        `;
        docContainer.appendChild(card);
    });
});
