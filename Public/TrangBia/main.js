fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data)
.catch(error => console.error('Lỗi tải footer:', error));
const newsData = [
    {
        image: "https://bcp.cdnchinhphu.vn/334894974524682240/2024/8/31/laodong-1-1669817516845306088358-17250978358932015082895.jpg",
        title: "Chính sách mới có hiệu lực",
        description: "Cập nhật các chính sách mới áp dụng từ tháng 3/2025.",
        link: "#"
    },
    {
        image: "https://vivuhalong.com/wp-content/uploads/2023/11/cang-du-thuyen-tuan-chau-3.jpg",
        title: "Quy định về quản lý tàu du lịch",
        description: "Cập nhật quy định về tàu du lịch tại các bến cảng.",
        link: "#"
    },
    {
        image: "https://bcp.cdnchinhphu.vn/zoom/585_365/334894974524682240/2025/4/2/img0448-17435928912261743962953-18-0-1268-2000-crop-1743592948658991818781.jpg",
        title: "Thủ tướng: Phải đặt niềm tin...",
        description: "Chiều 2/4, Thủ tướng Chính phủ Phạm Minh Chính,đã chủ trì phiên họp lần thứ hai của Ban Chỉ đạo",
        link: "#"
    },
    {
        image: "https://file3.qdnd.vn/data/images/0/2022/03/24/vanphong/anhkyketcds%201-%201.jpg",
        title: "Hỗ trợ doanh nghiệp vừa và nhỏ",
        description: "Chính phủ ban hành các chính sách hỗ trợ doanh nghiệp.",
        link: "#"
    }
];

function renderNews() {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = newsData.map(news => `
        <div class="swiper-slide bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col">
            <img src="${news.image}" alt="${news.title}" class="w-full h-40 object-cover rounded-lg">
            <div class="flex-grow">
                <h3 class="text-lg font-bold mt-3">${news.title}</h3>
                <p class="text-gray-600 line-clamp-2">${news.description}</p>
            </div>
            <a href="${news.link}" class="text-purple-500 mt-2 block">Đọc thêm</a>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", function () {
    renderNews();
    new Swiper(".mySwiper", {
        slidesPerView: 1, // Mặc định hiển thị 1 tin (màn hình nhỏ)
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            700: { // Khi màn hình lớn hơn 600px
                slidesPerView: 3, // Hiển thị 3 tin tức
                spaceBetween: 20
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    // Nhấn icon để mở chat
    chatIcon.addEventListener("click", function () {
        chatBox.classList.toggle("hidden");
    });

    // Đóng chat
    closeChat.addEventListener("click", function () {
        chatBox.classList.add("hidden");
    });

    // Gửi tin nhắn
    sendBtn.addEventListener("click", function () {
        sendMessage();
    });

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let text = userInput.value.trim();
        if (text === "") return;

        // Hiển thị tin nhắn người dùng
        let userMsg = document.createElement("div");
        userMsg.classList.add("user-msg");
        userMsg.textContent = text;
        messages.appendChild(userMsg);

        // Xóa input sau khi gửi
        userInput.value = "";

        // Hiển thị phản hồi AI giả lập
        setTimeout(() => {
            let botMsg = document.createElement("div");
            botMsg.classList.add("bot-msg");
            botMsg.textContent = "Xin lỗi, tôi không hiểu.";
            messages.appendChild(botMsg);
        }, 1000);
    }
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const callBtn = document.getElementById('callBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        callBtn.style.display = 'block';
        scrollToTopBtn.style.display = 'block';  
    } else {
        callBtn.style.display = 'none';
        scrollToTopBtn.style.display = 'none';  
    }
};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function makeCall() {
    window.location.href = "tel:*1022";  
    callBtn.classList.add('shake');
    setTimeout(function() {
        callBtn.classList.remove('shake');  
    }, 1000);
}

window.onload = function() {
    callBtn.classList.add('shake');
};
