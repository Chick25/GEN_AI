function sendPrompt() {
  const prompt = document.getElementById('prompt').value;
  const output = document.getElementById('output');
  output.textContent = "Đang xử lý...";

  fetch('http://127.0.0.1:8000/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ prompt })
  })
  .then(response => response.json())
  .then(data => {
    if (data.response) {
      output.textContent = data.response;
    } else if (data.error) {
      output.textContent = "Lỗi: " + data.error;
    } else {
      output.textContent = "Phản hồi không xác định.";
    }
  })
  .catch(error => {
    output.textContent = 'Lỗi khi gọi API: ' + error;
    console.error(error);
  });
}
