// Smooth page transition handler
function smoothNavigate(url) {
    document.body.classList.add('page-transitioning');
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Add smooth transitions to all navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Handle all navigation links
    document.querySelectorAll('a.nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Only apply transition for internal navigation
            if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !link.classList.contains('active')) {
                e.preventDefault();
                smoothNavigate(href);
            }
        });
    });

    // Handle project/post cards and thought items
    document.querySelectorAll('a.card, a.thought-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            smoothNavigate(link.href);
        });
    });

    // Handle "View All" buttons
    document.querySelectorAll('a.btn-secondary').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                smoothNavigate(href);
            });
        }
    });
});
