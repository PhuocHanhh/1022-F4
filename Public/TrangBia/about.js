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

    // Xử lý chat
    const chatIcon = document.getElementById("chatIcon");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    chatIcon.addEventListener("click", function () {
        chatBox.classList.toggle("hidden");
    });

    closeChat.addEventListener("click", function () {
        chatBox.classList.add("hidden");
    });

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

        let userMsg = document.createElement("div");
        userMsg.classList.add("user-msg");
        userMsg.textContent = text;
        messages.appendChild(userMsg);

        userInput.value = "";

        setTimeout(() => {
            let botMsg = document.createElement("div");
            botMsg.classList.add("bot-msg");
            botMsg.textContent = "Xin lỗi, tôi không hiểu.";
            messages.appendChild(botMsg);
        }, 1000);
    }

    // Xử lý nội dung động cho about-sidebar
    const aboutLinks = document.querySelectorAll('.about-sidebar .about-link');
    const aboutContent = document.getElementById('about-content');

    // Nội dung cho từng mục
    const contents = {
        general: `
            <h2>Giới thiệu chung</h2>
            <p>Trung tâm Thông tin và giám sát, điều hành thông minh Đà Nẵng (tiền thân là Trung tâm Giao dịch công nghệ thông tin và Truyền thông (theo quyết định số 3316/2011 của UBND thành phố)
             và Trung tâm Thông tin dịch vụ công (theo Quyết định số 336/QĐ-UBND ngày 18/01/2016)). Trung tâm Thông tin và giám sát, điều hành thông minh Đà Nẵng là đơn vị đầu mối giám sát, vận hành 
             các hệ thống, ứng dụng cung cấp dịch vụ đô thị thông minh; thu thập, tổng hợp, phân tích dữ liệu và thông tin, báo cáo kịp thời phục công tác chỉ đạo, điều hành của lãnh đạo các cấp; tư vấn,
              hướng dẫn, cung cấp thông tin cho công dân và tổ chức phục vụ chính quyền đô thị tại thành phố Đà Nẵng.</p>
            <h3>Nhiệm vụ, chức năng chính được giao</h3>
            <ol>
                <li>Tổ chức vận hành hệ thống thiết bị, phần mềm và thực hiện giám sát các dịch vụ đô thị thông minh theo quy định, hướng dẫn của Bộ Thông tin và Truyền thông và UBND thành phố Đà Nẵng. 
                Xây dựng, tiếp nhận, cập nhật, triển khai, vận hành các ứng dụng dịch vụ đô thị thông minh phục vụ triển khai chuyển đổi số, xây dựng thành phố thông minh.</li>
                <li>Thu thập, tổng hợp thông tin, dữ liệu từ các OC chuyên ngành, OC quận huyện và các hệ thống ứng dụng, hệ thống internet vạn vật (IoT); xử lý, tổng hợp, phân tích dữ liệu, hiển thị trực quan, 
                thống kê, dự báo phục vụ chỉ đạo, điều hành của lãnh đạo các cấp; cung cấp, chia sẻ thông tin, số liệu cho các cơ quan liên quan phục vụ công tác quản lý nhà nước; công khai thông tin cho tổ chức, 
                công dân phục vụ triển khai chính quyền đô thị theo quy định.
                    Cung cấp thông tin, số liệu, kênh thông tin chỉ đạo, điều hành, tổng đài cuộc gọi khẩn cấp… để phục vụ Trung tâm chỉ huy trong trường hợp khẩn cấp.</li>
                <li>Phát hiện, cảnh báo sớm các sự kiện, tình huống đã diễn ra trong đô thị; thông báo cho các OC chuyên ngành, OC quận huyện; điều phối, giám sát các OC chuyên ngành, OC quận huyện xử lý các vụ việc 
                theo chức năng, nhiệm vụ được giao; tổng hợp tiến độ, kết quả và báo cáo lãnh đạo thành phố.</li>
                <li>Làm đầu mối liên kết các hệ thống thông tin của thành phố Đà Nẵng; tổ chức, thu nhận và xử lý dữ liệu thông tin kinh tế xã hội và dịch vụ công của tất cả các sở, ban, ngành, quận, huyện trên địa bàn
                 thành phố; cung cấp và giải đáp cho tổ chức, công dân các thông tin liên quan đến chính sách và dịch vụ hành chính công, liên quan đến kinh tế - xã hội của thành phố.
                    <br>- Theo dõi, giám sát và đánh giá quá trình giải quyết dịch vụ công trực tuyến của các sở, ban, ngành, quận, huyện, xã, phường; hướng dẫn và hỗ trợ tổ chức, công dân thực hiện dịch vụ công tại Bộ phận 
                    tiếp nhận và trả kết quả tập trung tại Trung tâm Hành chính thành phố hoặc trực tuyến; giúp tổ chức, công dân truy vấn tình trạng xử lý hồ sơ dịch vụ công; đánh giá mức độ hài lòng của tổ chức, công dân khi 
                    thực hiện dịch vụ công của thành phố.
                    <br>- Vận hành hệ thống tổng đài phục vụ cung cấp thông tin cho tổ chức, công dân. Tiếp nhận thông tin phản ánh, góp ý, kiến nghị của tổ chức, công dân để chuyển các cơ quan có thẩm quyền liên quan xử lý 
                    theo quy định.
                    <br>- Tổ chức các hoạt động tuyên truyền, quảng bá, truyền thông, sự kiện, thông tin cơ sở, điều tra, khảo sát, thu thập thông tin theo nhiệm vụ được giao.</li>
                <li>Thực hiện các dịch vụ hoặc liên doanh, liên kết với các tổ chức, cá nhân trong và ngoài nước liên quan đến lĩnh vực hoạt động của Trung tâm theo quy định của pháp luật.
                    <br>- Cung cấp dịch vụ nội dung thông tin trên mạng viễn thông di động theo quy định.
                    <br>- Thực hiện dịch vụ tư vấn, lập dự án thiết kế, giám sát, đào tạo chuyển giao các dự án đầu tư về trung tâm chăm sóc, hỗ trợ khách hàng (Call center/Contact center); cho thuê thiết bị, sản phẩm, 
                    dịch vụ về Call center/Contact center theo quy định.
                    <br>- Thực hiện dịch vụ tư vấn, triển khai, kiểm thử các giải pháp liên quan đến lĩnh vực chuyển đổi số và dịch vụ thông minh cho cơ quan, tổ chức.</li>
                <li>Thực hiện các nhiệm vụ khác do UBND thành phố và Giám đốc Sở Thông tin và Truyền thông giao.</li>
            </ol>
        `,
        technical: `
            <h2>Hạ tầng kỹ thuật</h2>
            <p>Trung tâm Thông tin và giám sát, điều hành thông minh được đầu tư Hệ thống giao tiếp điện tử (Contact Center) hiện đại, chuyên dụng cho chăm sóc khách hàng, bao gồm:</p>
            <ol>
                <li>Hệ thống tổng đài điện thoại IP và máy tính, điện thoại IP, v.v… bảo đảm cho 100 bàn/chỗ tiếp nhận và giải đáp thông tin;</li>
                <li>Cổng nhắn tin (SMS Gateway) với chức năng là nhà cung cấp nội dung trên mạng viễn thông – CP;</li>
                <li>Cổng Thông tin dịch vụ công (http://1022.vn) để người dân kịp thời tiếp cận các thông tin và thực hiện các dịch vụ công trực tuyến;</li>
                <li>10 Server (lưu trữ), Firewall (hệ thống tường lửa bảo mật), IPS (hệ thống chống xâm nhập trái phép), hệ thống ghi âm, v.v…;</li>
                <li>Các phần mềm và ứng dụng đồng bộ như: KM (quản lý thông tin dữ liệu), CRM (quản lý thông tin khách hàng), CMS (báo cáo, thống kê các giao dịch), Billing (tính cước giao dịch vào/ra), IVR/Voicemail (hướng dẫn người dân tự động);</li>
                <li>Các quy trình chuẩn trong tiếp nhận/giải đáp thông tin; chăm sóc khách hàng.</li>
            </ol>
            <img src="img/hatangkt.jpg" alt="Hạ tầng kỹ thuật Trung tâm 1022">
        `,
        services: `
            <h2>Các dịch vụ cung cấp</h2>
            <ol>
                <li>Dịch vụ về tổng đài chăm sóc, hỗ trợ khách hàng</li>
                <li>Dịch vụ tin nhắn, bao gồm: </li>
                    <p>2.1. Dịch vụ nhắn tin MT (Mobile Terminated): Cho phép người dùng chủ động nhắn tin đến thuê bao di động của khách hàng nhằm quảng bá các sự kiện, sản phẩm, dịch vụ mới; chăm sóc khách hàng; nhắc nhở thương hiệu; thông tin giảm giá, khuyến mại...</p>
                    <p>2.2. Dịch vụ nhắn tin MO (Mobile Originated): Phục vụ nhắn tin để tham gia bình chọn sản phẩm, cuộc thi; tra cứu giá sản phẩm, dịch vụ, tra cứu điểm thi, kết quả xổ số và các thông tin khác…</p>
                <li>Dịch vụ khảo sát, điều tra, thu thập thông tin.</li>
                <li>Dịch vụ tổ chức sự kiện, truyền thông, quảng bá.</li>
                <li>Dịch vụ Số hóa tài liệu.</li>
                <li> Dịch vụ nhập dữ liệu.</li>
            </ol>
        `,
        profiles: `
            <h2>Các hợp đồng dịch vụ</h2>
            <h3>I. Tổng đài hỗ trợ, chăm sóc khách hàng</h3>
            <p>Do UBND TP triển khai/ Tổng đài phục vụ công ích, miễn phí...</p>
            <table class="service-table">
                <thead>
                    <tr>
                        <th>TT</th>
                        <th>Các hoạt động DV</th>
                        <th>Các đơn vị đã hợp tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tổng đài Thông tin dịch vụ công Đà Nẵng</td>
                        <td>UBND thành phố Đà Nẵng</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tổng đài về thiên tai, bão, lũ</td>
                        <td>BCH Phòng, chống thiên tai và tìm kiếm cứu nạn TP Đà Nẵng và tỉnh Thừa Thiên Huế</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Kênh hỗ trợ, giải đáp số hóa truyền hình mặt đất (1900 9496)</td>
                        <td>
                            - Bộ Thông tin và Truyền thông (Trung tâm Thông tin – Cục Viễn thông)<br>
                            - UBND TP Đà Nẵng
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Tổng đài CSKH truyền hình cáp Sông Thu</td>
                        <td>Công ty Cổ phần Truyền hình cáp Sông Thu (nay là Truyền hình VTVCab Chi Nhánh Đà Nẵng)</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Tổng đài CSKH Garena</td>
                        <td>Công ty CP Thể thao Việt Nam – Garena</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Tổng đài Help Desk</td>
                        <td>
                            - FPT Software Đà Nẵng<br>
                            - Công ty DTT
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Tổng đài khảo sát tự động</td>
                        <td>Trung tâm Quốc gia nước sạch & vệ sinh môi trường nông thôn</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Tổng đài CSKH, xử lý sự cố</td>
                        <td>Trung tâm Phát triển hạ tầng công nghệ thông tin Đà Nẵng</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Tổng đài tuyển sinh chương trình học đại học từ xa, qua mạng, tài liệu</td>
                        <td>Tổ chức giáo dục Topica</td>
                    </tr>
                </tbody>
            </table>
            <h3>II. Dịch vụ tin nhắn</h3>
            <p>Do UBND TP triển khai/ Tổng đài phục vụ công ích, miễn phí...</p>
            <table class="service-table">
                <thead>
                    <tr>
                        <th>TT</th>
                        <th>Các hoạt động DV</th>
                        <th>Nội dung thực hiện</th>
                        <th>Các đơn vị đã hợp tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nhắn tin công vụ</td>
                        <td>
                            Nhắn tin SMS điều hành, thông báo đến các cơ quan Nhà nước trên địa bàn thành phố
                        </td>
                        <td>
                            UBND TP Đà Nẵng
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nhắn tin thông báo</td>
                        <td>
                            - Số, ban, ngành TP<br>
                            - UBND huyện Điện Bàn, Quảng Nam
                        </td>
                        <td>
                            - Tra cứu thông tin trạng xử lý hồ sơ<br>
                            - Tra cứu cơ sở sản xuất kinh doanh đã được cấp giấy chứng nhận An toàn thực phẩm<br>
                            - Tra cứu lộ trình xe buýt<br>
                            - Tra cứu phương tiện vi phạm pháp luật về trật tự an toàn giao thông<br>
                            - Tra cứu số điện thoại của các cơ quan, rao vặt
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nhắn tin tra cứu các dịch vụ công ích</td>
                        <td>
                            - Tra cứu số điện thoại vì phạm quy định về quảng cáo, rao vặt<br>
                            - Tra cứu thông tin về giá đất trên địa bàn thành phố Đà Nẵng
                        </td>
                        <td>
                            Xem hướng dẫn tra cứu các dịch vụ công ích tại Cổng thông tin công ích 1022 – http://1022.vn
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Nhắn tin thông báo thông tin phòng chống thiên tai, bão lũ,...</td>
                        <td>
                            - Đăng ký nhận gửi thông báo thiên tai trước giờ bắt đầu thời gian dự kiến<br>
                            - Đưa thông tin thiên tai đến người dân trước giờ bắt đầu<br>
                            - Nhắn tin thông báo thiên tai, bão lũ, đến các cơ quan, tổ chức trên địa bàn thành phố
                        </td>
                        <td>
                            Ban Chỉ huy Phòng, chống thiên tai và Tìm kiếm cứu nạn (PCTT và TKCN) TP Đà Nẵng và tỉnh Quảng Nam
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
        achievements: `
            <h2>Một số khách hàng tiêu biểu</h2>
            <ol>
                <li>Khối hành chính nhà nước</li>
                    <img src="img/hinh5-1.jpg" alt="Khối hành chính nhà nước">
                <li>Khối tổ chức phi chính phủ.</li>
                    <img src="img/hinh5-2.jpg" alt="Khối tổ chức phi chính phủ">
                <li>Khối doanh nghiệp</li>
                    <img src="img/hinh5-3.jpg" alt="Khối doanh nghiệp">
            </ol>
        `,
        capability: `
            <h2>Hồ sơ năng lực</h2>
            <h4>Các kênh giao tiếp:</h4>
            <ol>
            <li>Tổng đài: (0236) 1022 (7 nhánh)</li>
            <li>Facebook: <a href="https://www.facebook.com/tongdai1022" target="_blank">https://www.facebook.com/tongdai1022</a></li>
            <li>Zalo page: <a href="http://page.zaloapp.com/tongdai1022danang" target="_blank">http://page.zaloapp.com/tongdai1022danang</a></li>
            <li>Email: <a href="mailto:1022@danang.gov.vn">1022@danang.gov.vn</a></li>
            <li>Cổng thông tin: <a href="http://1022.vn" target="_blank">http://1022.vn</a></li>
            </ol>

            <h4>Thông tin hợp tác</h4>
            <h4>Lãnh đạo Trung tâm</h4>

            <table border="0" cellspacing="8">
            <tr>
                <td><strong>*Ông Nguyễn Văn Quốc</strong></td>
                <td><strong>: Giám đốc</strong></td>
            </tr>
            <tr>
                <td> - Điện thoại văn phòng</td>
                <td>: (84-236) 3996 979</td>
            </tr>
            <tr>
                <td> - Điện thoại di động</td>
                <td>: (84-90) 3257 085</td>
            </tr>
            <tr>
                <td> - E-mail</td>
                <td>: <a href="mailto:quocnv3@danang.gov.vn">quocnv3@danang.gov.vn</a></td>
            </tr>

            <tr><td colspan="2"><br></td></tr>

            <tr>
                <td><strong>*Bà Phạm Thị Từ Thu</strong></td>
                <td><trong>: Phó Giám đốc</trong></td>
            </tr>
            <tr>
                <td> - Điện thoại văn phòng</td>
                <td>: (84-236) 3996 677</td>
            </tr>
            <tr>
                <td> - Điện thoại di động</td>
                <td>: (84-90) 5101 519</td>
            </tr>
            <tr>
                <td> - E-mail</td>
                <td>: <a href="mailto:thuptt@danang.gov.vn">thuptt@danang.gov.vn</a></td>
            </tr>

            <tr><td colspan="2"><br></td></tr>

            <tr>
                <td><strong>*Ông Phan Hữu Can</strong></td>
                <td><strong>: Phó Giám đốc</strong></td>
            </tr>
            <tr>
                <td> - Điện thoại văn phòng</td>
            </tr>
            <tr>
                <td> - Điện thoại di động</td>
                <td>: 0913 490 056</td>
            </tr>
            <tr>
                <td> - E-mail</td>
                <td>: <a href="mailto:canph@danang.gov.vn">canph@danang.gov.vn</a></td>
            </tr>

            <tr><td colspan="2"><br></td></tr>

            <tr><td colspan="2"><strong>*Phòng ban</strong></td></tr>
            <tr><td>Phòng Hành chính và Tổng hợp</td><td>: (84-236) 3996 777</td></tr>
            <tr><td>Phòng Kỹ thuật và Dịch vụ</td><td>: (84-236) 3996 666</td></tr>
            <tr><td>Phòng Tiếp nhận và Giải đáp thông tin</td><td>: (84-236) 1022</td></tr>
            <tr><td>Phòng Truyền thông và Sự kiện</td><td>: (84-236) 3996 868</td></tr>
            <tr><td>Phòng Giám sát dịch vụ đô thị thông minh</

                        
        `
    };

    // Hàm hiển thị nội dung
    function displayContent(section) {
        aboutContent.innerHTML = contents[section] || '<p>Nội dung đang được cập nhật.</p>';
    }

    // Xử lý sự kiện click cho các link trong about-sidebar
    aboutLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            aboutLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            const section = this.getAttribute('data-section');
            displayContent(section);
        });
    });

    // Hiển thị nội dung mặc định (Giới thiệu chung) khi tải trang
    displayContent('general');
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