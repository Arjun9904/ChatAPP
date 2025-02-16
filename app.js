const toggleMenuButton = document.getElementById('toggle-menu');
const leftMenu = document.querySelector('.left-menu');

toggleMenuButton.addEventListener('click', () => {
    leftMenu.classList.toggle('collapsed');
});

function adjustPageSize() {
    const container = document.querySelector('.container');
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992 && screenWidth <= 1600) {
        container.style.width = '90%';
    } else if (screenWidth >= 700 && screenWidth < 767) {
        container.style.width = '80%';
    } else if (screenWidth >= 600 && screenWidth < 700) {
        container.style.width = '75%';
    } else if (screenWidth <= 600) {
        container.style.width = '50%';
    } else {
        container.style.width = 'auto'; // Reset to default
    }
}

// Call the function on initial load and when the window resizes
adjustPageSize();
window.addEventListener('resize', adjustPageSize);
