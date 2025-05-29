document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navUl = document.querySelector('.header_home_menu');

    const isLoggedIn = localStorage.getItem('isLoggedIn', 'true');
    const email = localStorage.getItem('userEmail');

    const logoutBtn = document.getElementById('logoutBtn');

    if(isLoggedIn === 'true' && email){
        document.getElementById('loginBtn').style.display="none";
        document.getElementById('signupBtn').style.display="none";

        document.getElementById('userAvatar').style.display="flex";
        const userEmail  = document.getElementById('userEmail');

        userEmail.textContent = email;
       

    }

    if(logoutBtn){
        logoutBtn.addEventListener('click', function(){
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');

            window.location.href='index.html';

        });
    }

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


function goToCoursePage(){
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true'){
        window.location.href = "/frontend/htmls/course.html";

        
    }else{
        alert('Vui long dang nhap hoac dang ky');
    }
}

