document.addEventListener("DOMContentLoaded", function() {
    // Example dynamic content loading
    const docs = [
        { title: "Beginer Robotics ", description: "Follow this documentation if you are beginer to Robotics", link: "https://ashishnith.github.io/ficTECH--Docs/" },
        { title: "CyberSecurity & EthicalHacking", description: "--Documentations will be available soon--", link: "" },
        { title: "Amazing Projects", description: "--Will be available soon--", link: "" }
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