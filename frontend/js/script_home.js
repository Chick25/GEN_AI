document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navUl = document.querySelector('.header_home_menu');

    if (hamburger && navMenu && navUl) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('show');
            navUl.classList.toggle('active');
        });

        // Đóng menu khi nhấp ra ngoài
        document.addEventListener('click', function (event) {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('show');
                navUl.classList.remove('active');
            }
        });
    } else {
        console.error("Không tìm thấy một trong các phần tử: hamburger, navMenu, hoặc navUl");
    }
});