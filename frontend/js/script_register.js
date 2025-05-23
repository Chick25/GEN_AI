document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("signup_form");
  if(form){
  form.addEventListener("submit", validateForm);
  }
});

function validateForm(event) {
  event.preventDefault(); // Quan trọng!

  const form = document.getElementById("signup_form");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const password = data.password || "";
  const errorMessage = document.getElementById("error-message");

  const lengthValid = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (!lengthValid || !hasUppercase || !hasNumber) {
    errorMessage.textContent = "Mật khẩu phải có ít nhất 8 ký tự, 1 chữ hoa và 1 số.";
    return;
  }

  errorMessage.textContent = "";

  fetch('http://localhost:8000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    })
  })
    .then(async res => {
      const text = await res.text();
      try {
        const json = JSON.parse(text);
        alert("Đăng ký thành công! ID người dùng: " + json.user?.id);
      } catch (err) {
        console.error("Phản hồi không phải JSON:", text);
        alert("Lỗi không mong đợi từ server.");
      }
    })
    .catch(error => {
      alert("Lỗi khi gửi form: " + error.message);
      console.error('Fetch Error:', error);
    });
}


//////////////////////////
// function sendPrompt() {
//   const prompt = document.getElementById('prompt').value;

//   fetch('http://127.0.0.1:8000/api/generate', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({ prompt })
//   })
//   .then(res => res.json())
//   .then(data => {
//     document.getElementById('output').textContent = JSON.stringify(data, null, 2);
//   })
//   .catch(err => {
//     console.error('Lỗi:', err);
//     document.getElementById('output').textContent = 'Lỗi khi gọi API: ' + err;
//   });
// }
