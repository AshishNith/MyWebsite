function likePost(button) {
    const likeCountSpan = button.nextElementSibling;
    let currentCount = parseInt(likeCountSpan.textContent);
    currentCount++;
    likeCountSpan.textContent = currentCount + ' Likes';
}

function readMore(topic) {
    const modal = document.getElementById('readMoreModal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalLink = document.getElementById('modal-link');

    let title, content, link;

    switch(topic) {
        case 'ai-ml':
            title = 'The Rise of AI and Machine Learning';
            content = 'Artificial Intelligence (AI) and Machine Learning (ML) are driving forces behind the new technological revolution. From automating complex tasks to enabling personalized experiences, AI and ML are shaping the future in unprecedented ways.';
            link = 'https://en.wikipedia.org/wiki/Machine_learning';
            break;
        case 'robotics':
            title = 'The Future of Robotics';
            content = 'Robotics is a fast-evolving field that is bringing us closer to a future where robots assist in daily life and work. Advances in AI and machine learning are enabling robots to perform tasks with greater precision and autonomy.';
            link = 'https://en.wikipedia.org/wiki/Robotics';
            break;
        case 'spacex':
            title = 'SpaceX: Revolutionizing Space Travel';
            content = 'SpaceX is at the forefront of private space exploration, developing reusable rockets that significantly reduce the cost of space travel. Their missions are paving the way for human colonization of Mars and beyond.';
            link = 'https://www.spacex.com/';
            break;
        case 'elon-musk':
            title = 'Elon Musk: Visionary Entrepreneur';
            content = 'Elon Musk is a key figure in modern technology and space exploration. His ventures, including SpaceX, Tesla, and Neuralink, are pushing the boundaries of what is possible and driving innovation in various industries.';
            link = 'https://en.wikipedia.org/wiki/Elon_Musk';
            break;
        case 'artemis':
            title = 'NASA\'s Artemis Program';
            content = 'NASA\'s Artemis program aims to return humans to the Moon and establish a sustainable presence there by the end of this decade. This initiative is a critical step toward future Mars exploration and deep space missions.';
            link = 'https://www.nasa.gov/specials/artemis/';
            break;
        case 'isro':
            title = 'ISRO: India\'s Space Ambitions';
            content = 'The Indian Space Research Organisation (ISRO) has achieved remarkable milestones in space technology. With missions like Chandrayaan and Mangalyaan, ISRO is positioning India as a major player in space exploration.';
            link = 'https://www.isro.gov.in/';
            break;
        case 'drdo':
            title = 'DRDO: Advancing Defense Technologies';
            content = 'The Defence Research and Development Organisation (DRDO) is crucial for India\'s defense capabilities. From missile systems to advanced electronics and cybersecurity, DRDO\'s innovations are essential for national security.';
            link = 'https://www.drdo.gov.in/';
            break;
    }

    modalTitle.textContent = title;
    modalContent.textContent = content;
    modalLink.href = link;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('readMoreModal');
    modal.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('readMoreModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}