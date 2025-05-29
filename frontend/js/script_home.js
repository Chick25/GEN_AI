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


function openModal(){
    document.getElementById('modalOverlay').style.display='flex';
    currentQuestion =0;
    correctCount =0;
    showQuestion();
}

function closeModal(){
    document.getElementById('modalOverlay').style.display='none';
}

function showQuestion(){
    const q = questions[currentQuestion];
    document.getElementById('modalText').innerText = q.question;
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    selectedAnswer = null;

    for (const key in q.options){
        const p = document.createElement('p');
        p.innerText = `${key}.${q.options[key]}`;
        p.className = "option";
        p.onclick = () => selectOption(p, key);
        container.appendChild(p);
    }

}

// function selectOption(element, value){
//     document.querySelectorAll(".option").forEach(opt => opt.classLis.remove("selected"));
//     element.classList.add("selected");
//     selectedAnswer = value;
// }

// function submitAnswer() {
//     if (!selectedAnswer) {
//       alert("Vui lòng chọn một đáp án.");
//       return;
//     }

//     const isCorrect = selectedAnswer === questions[currentQuestion].correct;
//     if (isCorrect) correctCount++;

//     currentQuestion++;

//     if (currentQuestion < questions.length) {
//       showQuestion();
//     } else {
//       showResult();
//     }
// }

// function showResult() {
//     const modalText = document.getElementById("modalText");
//     const container = document.getElementById("optionsContainer");
//     modalText.innerText = `Bạn đã trả lời đúng ${correctCount}/${questions.length} câu.`;
//     container.innerHTML = ""; // Xóa đáp án
// }



// const questions =[
//     {
//         question: 'LLM hoạt động như thế nào để tạo ra văn bản phù hợp theo ngữ cảnh?',
//         options: {
//             A: "Dựa vào cảm xúc con người",
//             B: "Dựa trên các hình ảnh",
//             C: "Dựa vào thống kê ngẫu nhiên",
//             D: "Dựa trên mẫu và cấu trúc đã học",
//         },
//         correct :'D'
//     },
//     {
//         question: "Công nghệ inpainting trong các mô hình tạo hình ảnh AI được sử dụng để làm gì?",
//         options:{
//             A: "Mở rộng hình ảnh bằng cách tạo thêm phần bên ngoài của hình gốc",
//             B: "Chuyển đổi phong cách từ một hình ảnh sang hình ảnh khác",
//             C: "Xây dựng lại hoặc phục hồi các phần bị thiếu hoặc bị hư hỏng trong hình ảnh",
//             D: "Tạo hình ảnh hoàn toàn mới từ lời nhắc văn bản",
//         },
//         correct : 'C'
        
//     },
//     {
//         question: "Một trong những khả năng nổi bật của các trình tạo mã dựa trên AI như GitHub Copilot là gì?",
//         options:{
//             A: "Thiết kế giao diện người dùng tự động",
//             B: "Phát hiện virus trong hệ điều hành",
//             C: "Đề xuất dòng mã và giải pháp theo thời gian thực dựa trên ngữ cảnh",
//             D: "Dịch văn bản tự nhiên sang ngôn ngữ địa phương",
//         },
//         correct: 'C'
//     },
//     {
//         question:"Trong các công cụ âm thanh AI tổng quát, công cụ TTS (Text-to-Speech) chủ yếu được sử dụng để làm gì?",
//         options:{
//             A:"Phân tích cảm xúc trong âm nhạc",
//             B:"Chuyển đổi văn bản thành giọng nói có âm thanh tự nhiên",
//             C:"Tạo video từ ảnh tĩnh",
//             D:"Hòa trộn các bản nhạc nền",
//         },
//         correct :'B'
//     }

// ];

// let currentQuestion = 0;
// let correctCount = 0;
// let selectedAnswer = null;

