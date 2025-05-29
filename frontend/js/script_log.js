document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("login_form");
  if(form){
  form.addEventListener("submit", validateForm);
  }
});

function validateForm(event){
    event.preventDefault(); 
    const form = document.getElementById("login_form");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    fetch('http://localhost:3000/api/auth/login',{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: data.email, 
        password: data.password })

    })
    .then(Response => Response.json())
    .then(data => {
        if(data.message === 'Đăng nhập thành công'){
            document.getElementById('message').innerText = '✅ ' + data.message;
            console.log('User: ', data.user);

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', data.user.email);

            window.location.href="../htmls/course.html";

            


        }else{
            document.getElementById('message').innerText = '❌ ' + data.message;
        }
    })
    .catch(error =>{
        console.log('Lỗi fetch: ', error);
        document.getElementById('message').innerText = '❌ Không thể kết nối tới máy chủ.';
    });
}

