const newsData = [
    {
        img: 'img/banner/banner5.jpg',
        title: 'Đà Nẵng thúc đẩy chuyển đổi số trong năm 2025',
        date: '12/03/2025',
        description: 'TP Đà Nẵng triển khai nhiều giải pháp thúc đẩy chuyển đổi số, cải cách hành chính và phát triển kinh tế số trong năm 2025.',
        link: 'https://www.quanlynhanuoc.vn/2025/03/06/giai-phap-thuc-day-chuyen-doi-so-trong-bo-may-chinh-quyen-thanh-pho-da-nang-hien-nay/'
    },
    {
        img: 'img/banner/banner7.jpg',
        title: 'Lễ hội pháo hoa quốc tế Đà Nẵng 2025',
        date: '12/03/2025',
        description: 'Lễ hội pháo hoa quốc tế Đà Nẵng 2025 sẽ diễn ra với nhiều hoạt động hấp dẫn, thu hút du khách trong và ngoài nước.',
        link: 'https://diff.vn/'
    },
    {
        img: 'img/banner/banner6.jpg',
        title: 'Đà Nẵng xây dựng thành phố',
        date: '12/03/2025',
        description: 'Dự án thành phố thông minh tại Đà Nẵng đang được đẩy nhanh tiến độ.',
        link: 'https://www.baodanang.vn/kinhte/202412/da-nang-tien-phong-xay-dung-thanh-pho-thong-minh-3995667/'
    },
    {
        img: 'img/banner/banner6.jpg',
        title: 'Đà Nẵng mở rộng khu công nghệ cao',
        date: '15/03/2025',
        description: 'TP Đà Nẵng lên kế hoạch mở rộng khu công nghiệp công nghệ cao để thu hút đầu tư quốc tế và tạo việc làm.',
        link: 'https://congnghiepmoitruong.vn/da-nang-mo-rong-cac-khu-cong-nghiep-don-dau-lan-song-dau-tu-moi-14627.html'
    },
    {
        img: 'img/banner/banner7.jpg',
        title: 'Du lịch Đà Nẵng phục hồi mạnh mẽ năm 2025',
        date: '16/03/2025',
        description: 'Ngành du lịch Đà Nẵng ghi nhận sự tăng trưởng vượt bậc nhờ các chính sách kích cầu và sự kiện quốc tế.',
        link: 'https://sungroup.com.vn/tin-tuc/du-lich-da-nang-2025-hua-hen-bung-no-voi-nhung-duong-bay-quoc-te-moi-7002'
    },
    {
        img: 'img/banner/banner5.jpg',
        title: 'Đà Nẵng tổ chức hội nghị quốc tế',
        date: '17/03/2025',
        description: 'Hội nghị quốc tế về môi trường tại Đà Nẵng nhằm thảo luận các giải pháp bảo vệ hệ sinh thái và phát triển bền vững.',
        link: 'https://danang.gov.vn/w/da-nang-khang-dinh-nghiem-tuc-thuc-hien-cac-cam-ket-quoc-te-ve-moi-truong-i'
    },
    {
        img: 'img/banner/cauvang.jpg',
        title: 'Cải cách hành chính Đà Nẵng đạt nhiều thành tựu',
        date: '18/03/2025',
        description: 'Đà Nẵng tiếp tục dẫn đầu cả nước về cải cách hành chính, nâng cao hiệu quả phục vụ người dân và doanh nghiệp.',
        link: 'https://danang.gov.vn/vi/w/hieu-qua-thiet-thuc-tu-nhung-sang-kien-mo-hinh-cai-cach-hanh-chinh'
    },
    {
        img: 'img/banner/banner4.jpg',
        title: 'Đà Nẵng phát triển giao thông thông minh',
        date: '19/03/2025',
        description: 'Hệ thống giao thông thông minh tại Đà Nẵng được triển khai để giảm ùn tắc và nâng cao trải nghiệm đô thị.',
        link: 'https://baodanang.vn/chuyen-trang-ky-niem/dau-an-va-thanh-tuu/202503/giao-thong-da-nang-huong-den-thanh-pho-thong-minh-4002909/'
    },
];

const policyData = [
    {
        img: 'img/hero-carousel/anh1.png',
        title: 'Chính sách hỗ trợ doanh nghiệp',
        date: '15/04/2025',
        description: 'Đà Nẵng ban hành chính sách hỗ trợ vốn và đào tạo cho các doanh nghiệp nhỏ',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=789012'
    },
    {
        img: 'img/hero-carousel/anh 2.jpg',
        title: 'Ưu đãi thuế cho ngành công',
        date: '16/04/2025',
        description: 'Chính quyền Đà Nẵng đưa ra các ưu đãi thuế nhằm thu hút đầu tư.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=345678'
    },
    {
        img: 'img/hero-carousel/anh 3.png',
        title: 'Chính sách bảo vệ môi trường',
        date: '17/04/2025',
        description: 'Đà Nẵng triển khai các biện pháp bảo vệ môi trường, khuyến khích sử dụng.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=901234'
    },
    {
        img: 'img/hero-carousel/anh1.png',
        title: 'Hỗ trợ khởi nghiệp sáng tạo',
        date: '18/04/2025',
        description: 'Chính sách mới hỗ trợ các startup công nghệ với quỹ đầu tư.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=567890'
    },
    {
        img: 'img/hero-carousel/anh 2.jpg',
        title: 'Chính sách phát triển du lịch',
        date: '19/04/2025',
        description: 'Đà Nẵng khuyến khích phát triển du lịch xanh, bảo tồn tài nguyên.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=234567'
    },
    {
        img: 'img/hero-carousel/anh 3.png',
        title: 'Ưu đãi cho doanh nghiệp.',
        date: '20/04/2025',
        description: 'Các doanh nghiệp xuất khẩu tại Đà Nẵng được hưởng ưu đãi về thuế.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=890123'
    },
    {
        img: 'img/hero-carousel/anh1.png',
        title: 'Chính sách phát triển',
        date: '21/04/2025',
        description: 'Đà Nẵng đầu tư vào giáo dục và đào tạo để cung cấp nhân lực chất lượng cao.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=432109'
    },
    {
        img: 'img/hero-carousel/anh 2.jpg',
        title: 'Quy định mới về quản lý đô thị',
        date: '22/04/2025',
        description: 'Đà Nẵng ban hành quy định quản lý đô thị thông minh, ứng dụng công nghệ.',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=765432'
    },
];

const infoOpportunityData = [
    {
        img: 'img/tt/tt1.png',
        link: 'https://binhdanai.1022.vn/'
    },
    {
        img: 'img/tt/tt2.png',
        link: 'https://1022.vn/chuyendoisodean06'
    },
    {
        img: 'img/tt/tt3.png',
        link: 'https://gopy.danang.gov.vn/'
    },
    {
        img: 'img/tt/tt1.png',
        link: 'https://1022.vn/chi-tiet-tin-tuc?danhmuc=1201'
    },
    {
        img: 'img/tt/tt2.png',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=123789'
    },
    {
        img: 'img/tt/tt3.png',
        link: 'https://www.danang.gov.vn/web/guest/chi-tiet-tin-tuc?id=456123'
    },
    {
        img: 'img/tt/tt4.png',
        link: 'https://tourism.danang.vn/'
    },
    {
        img: 'img/tt/tt2.png',
        link: 'https://dichvucong.danang.gov.vn/'
    },
];

const dailyInfoData = [
    {
        img: 'img/hero-carousel/daily1.jpg',
        title: 'Hội nghị xúc tiến đầu tư Đà Nẵng 2025',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily2.png',
        title: 'Chương trình chuyển đổi số Đà Nẵng',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily3.jpg',
        title: 'Cổng góp ý Đà Nẵng',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily4.jpg',
        title: 'Tin tức du lịch Đà Nẵng',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily5.jpg',
        title: 'Hỗ trợ doanh nghiệp vừa và nhỏ Đà Nẵng',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily6.jpg',
        title: 'Cơ hội việc làm tại Đà Nẵng 2025',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily1.jpg',
        title: 'Lễ hội văn hóa Đà Nẵng 2025',
        link: '#'
    },
    {
        img: 'img/hero-carousel/daily2.png',
        title: 'Hướng dẫn sử dụng dịch vụ công trực tuyến',
        link: '#'
    },
];

const partnersData = [
    {
        img: 'img/partners/anh1.jpg',
        link: 'https://www.arico.com.vn/',
        alt: 'Arico CATV'
    },
    {
        img: 'img/partners/anh2.jpg',
        link: 'https://vinasaver.com/',
        alt: 'Vina Saver'
    },
    {
        img: 'img/partners/anh5.jpg',
        link: 'https://www.fpt-software.com/',
        alt: 'FPT Software'
    },
    {
        img: 'img/partners/anh3.jpg',
        link: 'https://cskh.evncpc.vn/',
        alt: 'EVNCPC PC Đà Nẵng'
    },
    {
        img: 'img/partners/anh4.jpg',
        link: 'https://vnpt.com.vn/',
        alt: 'VNPT'
    },
    {
        img: 'img/partners/anh6.jpg',
        link: 'https://www.arico.com.vn/',
        alt: 'Arico CATV'
    },
    {
        img: 'img/partners/anh7.jpg',
        link: 'https://vinasaver.com/',
        alt: 'Vina Saver'
    },
];

// Hàm khởi tạo Swiper chung
function initializeSwiper({ containerClass, data, paginationContainerId, renderFunction, slidesPerViewDesktop = 4, paginationType = 'dot' }) {
    const container = document.querySelector(containerClass);
    const wrapper = container.querySelector('.swiper-wrapper');
    const paginationLine = document.getElementById(paginationContainerId);

    wrapper.innerHTML = renderFunction(data);

    const totalSlides = data.length;
    const visibleSlidesDesktop = slidesPerViewDesktop;
    const visibleSlidesMobile = 1;
    const totalGroupsDesktop = totalSlides - visibleSlidesDesktop + 1;
    const totalGroupsMobile = totalSlides - visibleSlidesMobile + 1;
    const isMobile = window.innerWidth < 576;
    const totalGroups = isMobile ? totalGroupsMobile : totalGroupsDesktop;

    for (let i = 0; i < totalGroups; i++) {
        const element = document.createElement('div');
        element.classList.add(paginationType === 'dash' ? 'pagination-dash' : 'pagination-dot');
        element.dataset.index = i;
        paginationLine.appendChild(element);
    }

    const swiper = new Swiper(containerClass, {
        slidesPerView: slidesPerViewDesktop,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
        direction: 'horizontal',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: slidesPerViewDesktop,
                spaceBetween: 20,
            },
        },
    });

    const updatePagination = () => {
        const elements = paginationLine.querySelectorAll(paginationType === 'dash' ? '.pagination-dash' : '.pagination-dot');
        elements.forEach(el => el.classList.remove('active'));
        const activeIndex = swiper.realIndex % totalGroups;
        elements[activeIndex].classList.add('active');
    };

    paginationLine.addEventListener('click', (event) => {
        const targetClass = paginationType === 'dash' ? 'pagination-dash' : 'pagination-dot';
        if (event.target.classList.contains(targetClass)) {
            const targetIndex = parseInt(event.target.dataset.index);
            swiper.slideToLoop(targetIndex);
            updatePagination();
        }
    });

    swiper.on('slideChange', updatePagination);
    swiper.on('autoplay', updatePagination);
    updatePagination();

    return swiper;
}

// Hàm khởi tạo Swiper riêng cho "Thông Tin Cần Biết"
function initializeInfoSwiper({ containerClass, data, paginationContainerId, renderFunction }) {
    const container = document.querySelector(containerClass);
    const wrapper = container.querySelector('.swiper-wrapper');
    const paginationLine = document.getElementById(paginationContainerId);

    wrapper.innerHTML = renderFunction(data);

    const totalSlides = data.length;
    const visibleSlides = 1;
    const totalGroups = totalSlides - visibleSlides + 1;

    for (let i = 0; i < totalGroups; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        dot.dataset.index = i;
        paginationLine.appendChild(dot);
    }

    const swiper = new Swiper(containerClass, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        direction: 'horizontal',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const updatePagination = () => {
        const dots = paginationLine.querySelectorAll('.pagination-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        const activeIndex = swiper.realIndex % totalGroups;
        dots[activeIndex].classList.add('active');
    };

    paginationLine.addEventListener('click', (event) => {
        if (event.target.classList.contains('pagination-dot')) {
            const targetIndex = parseInt(event.target.dataset.index);
            swiper.slideToLoop(targetIndex);
            updatePagination();
        }
    });

    swiper.on('slideChange', updatePagination);
    swiper.on('autoplay', updatePagination);
    updatePagination();

    return swiper;
}

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    // Xử lý thay đổi màu header khi cuộn
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Xử lý trạng thái active cho menu ở header
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Xử lý trạng thái active cho menu ở sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-menu li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebarLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Hàm render cho "TIN MỚI"
    const renderNewsTicker = (data) => data.map(item => `
    <div class="swiper-slide">
        <div class="news-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="overlay"></div>
            <h3 class="news-title">${item.title}</h3>
        </div>
    </div>
`).join('');

    // Hàm render cho "TIN TỨC" và "CHÍNH SÁCH"
    const renderFullNews = (data) => data.map(item => `
        <div class="swiper-slide">
            <div class="news-card">
                <img src="${item.img}" alt="${item.title}">
                <h3 class="title">${item.title}</h3>
                <p class="description">${item.description}</p>
                <p class="date"><i class="fas fa-calendar-alt"></i> ${item.date}</p>
                <a href="${item.link}" class="read-more" target="_blank">Xem thêm</a>
            </div>
        </div>
    `).join('');

    // Hàm render cho "có thể bạn quan tâm"
    const renderInfoOpportunity = (data) => data.map(item => `
        <div class="swiper-slide">
            <a href="${item.link}" target="_blank" class="info-opportunity-card">
                <img src="${item.img}" alt="${item.title}" class="info-opportunity-img">
            </a>
        </div>
    `).join('');

    // Hàm render cho "MỖI NGÀY MỘT THÔNG TIN"
    const renderDailyInfo = (data) => data.map(item => `
        <div class="swiper-slide">
            <a href="${item.link}" class="daily-info-card">
                <img src="${item.img}" alt="${item.title}">
                <div class="daily-info-content">
                    <h3>${item.title}</h3>
                    <p>Xem thêm...</p>
                </div>
            </a>
        </div>
    `).join('');

    // Hàm render cho "ĐƠN VỊ HỢP TÁC"
    const renderPartners = (data) => data.map(item => `
        <div class="swiper-slide">
            <a href="${item.link}" target="_blank" class="partner-card">
                <img src="${item.img}" alt="${item.alt}">
            </a>
        </div>
    `).join('');

    // Khởi tạo Swiper cho "ĐƠN VỊ HỢP TÁC"
    initializeSwiper({
        containerClass: '.partnersSwiper',
        data: partnersData,
        paginationContainerId: 'partnersPaginationLine',
        renderFunction: renderPartners,
        slidesPerViewDesktop: 5,
        paginationType: 'dot',
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        }
    });

    // Khởi tạo Swiper cho "TIN MỚI"
    initializeSwiper({
        containerClass: '.mySwiper',
        data: newsData,
        paginationContainerId: 'paginationLine',
        renderFunction: renderNewsTicker,
        slidesPerViewDesktop: 3,
        paginationType: 'dash',
    });

    // Khởi tạo Swiper cho "TIN TỨC"
    initializeSwiper({
        containerClass: '.newsSwiper',
        data: newsData,
        paginationContainerId: 'newsPaginationLine',
        renderFunction: renderFullNews,
        slidesPerViewDesktop: 4,
        paginationType: 'dot',
    });

    // Khởi tạo Swiper cho "CHÍNH SÁCH"
    initializeSwiper({
        containerClass: '.policySwiper',
        data: policyData,
        paginationContainerId: 'policyPaginationLine',
        renderFunction: renderFullNews,
        slidesPerViewDesktop: 4,
        paginationType: 'dot',
    });

    // Khởi tạo Swiper cho "CÓ THỂ BẠN QUAN TÂM"
    initializeInfoSwiper({
        containerClass: '.infoOpportunitySwiper',
        data: infoOpportunityData,
        paginationContainerId: 'infoOpportunityPaginationLine',
        renderFunction: renderInfoOpportunity,
    });

    // Khởi tạo Swiper cho "MỖI NGÀY MỘT THÔNG TIN"
    initializeSwiper({
        containerClass: '.dailyInfoSwiper',
        data: dailyInfoData,
        paginationContainerId: 'dailyInfoPaginationLine',
        renderFunction: renderDailyInfo,
        slidesPerViewDesktop: 4,
        paginationType: 'dot',
    });

    // Xử lý sidebar
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('overlay');
    const mainMenuItems = document.querySelectorAll('.main-menu-item');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        if (window.innerWidth < 992) {
            mainMenuItems.forEach(item => item.style.display = 'block');
        } else {
            mainMenuItems.forEach(item => item.style.display = 'none');
        }
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 992) {
            mainMenuItems.forEach(item => item.style.display = 'block');
        } else {
            mainMenuItems.forEach(item => item.style.display = 'none');
        }
    });

    if (window.innerWidth < 992) {
        mainMenuItems.forEach(item => item.style.display = 'block');
    } else {
        mainMenuItems.forEach(item => item.style.display = 'none');
    }
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const callBtn = document.getElementById('callBtn');
window.onscroll = function () {
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
    window.location.href = "tel:0236.1022";
    callBtn.classList.add('shake');
    setTimeout(function () {
        callBtn.classList.remove('shake');
    }, 1000);
}

window.onload = function () {
    callBtn.classList.add('shake');
};

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