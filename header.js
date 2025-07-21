// JavaScript to handle sidebar
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    const closeBtn = document.querySelector('.closebtn');

    // Open sidebar when the menu button is clicked
    menuButton.addEventListener('click', function () {
        sidebar.style.width = '250px';
    });

    // Close sidebar
    closeBtn.addEventListener('click', function () {
        sidebar.style.width = '0';
    });

    // Show sidebar when hovering over the left edge of the header
    document.querySelector('header').addEventListener('mousemove', function (e) {
        if (e.clientX < 20) {
            sidebar.style.width = '250px';
        }
    });

    // Hide sidebar when cursor leaves the sidebar
    sidebar.addEventListener('mouseleave', function () {
        sidebar.style.width = '0';
    });
});
