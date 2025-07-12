document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Show 'special' tab by default
    document.querySelector('#special').classList.add('active');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');

            // Remove active from all
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Add to current
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});