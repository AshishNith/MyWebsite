function likePost(button) {
    const likeCountSpan = button.nextElementSibling;
    let currentCount = parseInt(likeCountSpan.textContent);
    currentCount++;
    likeCountSpan.textContent = currentCount + ' Likes';
}
