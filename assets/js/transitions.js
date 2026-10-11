// Smooth page transition handler
function smoothNavigate(url) {
    document.body.classList.add('page-transitioning');
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// A page we navigated away from can be frozen into the browser's
// back-forward cache (bfcache) mid-fade, with 'page-transitioning'
// (opacity: 0) still applied — and since bfcache restores don't
// re-fire DOMContentLoaded, nothing would otherwise clear it.
//
// 'pagehide' fires right as the page is being hidden/cached, so we
// clear the class there, before the snapshot is taken. 'pageshow'
// fires on every show, including a bfcache restore, as a second
// safety net in case the snapshot was already taken with the class
// present (e.g. from a page loaded before this fix shipped).
window.addEventListener('pagehide', () => {
    document.body.classList.remove('page-transitioning');
});

window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-transitioning');
});

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
