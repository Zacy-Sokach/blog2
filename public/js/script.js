document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    const postLinks = document.querySelectorAll('.post-link');
    postLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const postId = this.getAttribute('data-post-id');
            loadPost(postId);
        });
    });

    function loadPost(postId) {
        fetch(`/posts/${postId}.md`)
            .then(response => response.text())
            .then(data => {
                const postContainer = document.getElementById('post-container');
                postContainer.innerHTML = marked(data);
            })
            .catch(error => console.error('Error loading post:', error));
    }
});