document.addEventListener("DOMContentLoaded", function () {
    const projects = [
      {
        title: "Project 1",
        description: "The description of each projects will bea available soon.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdt2bdOr6yNUso2UGqXJRcNpnjWeSlpumaw&s",
        link: "#"
      },
      {
        title: "Project 2",
        description: "The description of each projects will bea available soon.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdt2bdOr6yNUso2UGqXJRcNpnjWeSlpumaw&s",
        link: "#"
      },
      // Add more projects as needed
    ];
  
    const projectContainer = document.getElementById("projects");
  
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
  
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="buttons">
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
  
      projectContainer.appendChild(projectCard);
    });
  });
  