<template>
    <section class="breadcrumbs-section">
        <ul class="breadcrumb">
            <li><a href="/">Trang chủ&#160;</a></li>
            <li><b>/ CÂU HỎI THƯỜNG GẶP</b></li>
        </ul>
    </section>
    <section class="connect-section">
        <div class="faq">
            <h1 class="faq-title">Trung tâm hỗ trợ</h1>
            <div class="faq-description">
                <ul>
                    <li>Moneycat khuyến cáo khách hàng hãy cẩn thận,
                        <b>TUYỆT ĐỐI KHÔNG THANH TOÁN</b> vào
                        <b>TÀI KHOẢN CÁ NHÂN</b>
                        dù với bất kì lí do gì. Toàn bộ giao dịch thanh toán vào tài khoản cá nhân sẽ không phải là giao dịch hợp lệ để đối tác cho vay trừ nợ.
                    </li>
                </ul>
            </div>
            <div class="faq-content">
                <div class="faq-blocks">
                    <h2 class="faq-blocks-title" data-bs-toggle="collapse" data-bs-target="#faqBlockItem1" aria-expanded="false" aria-controls="faqBlockItem1">I-Câu hỏi thường gặp</h2>
                    <div v-for="(question, i) in listQuestion" :key="i" class="collapse multi-collapse faq-block-items" id="faqBlockItem1">
                        <div class="faq-block">
                            <div class="faq-block-question">
                                <h3 class="faq-block-question-text">{{ question }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faq-blocks">
                    <h2 class="faq-blocks-title" data-bs-toggle="collapse" data-bs-target="#faqBlockItem2" aria-expanded="false" aria-controls="faqBlockItem2">II-Dành cho khách hàng đăng kí mới</h2>
                    <div v-for="(newRegister, i) in listNewRegistration" :key="i" class="collapse multi-collapse faq-block-items" id="faqBlockItem2">
                        <div class="faq-block">
                            <div class="faq-block-question">
                                <h3 class="faq-block-question-text">{{ newRegister }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faq-blocks">
                    <h2 class="faq-blocks-title" data-bs-toggle="collapse" data-bs-target="#faqBlockItem3" aria-expanded="false" aria-controls="faqBlockItem3">III-Dành cho khách hàng thân thiết</h2>
                    <div v-for="(loyalCustomer, i) in listLoyalCustomers" :key="i" class="collapse multi-collapse faq-block-items" id="faqBlockItem3">
                        <div class="faq-block">
                            <div class="faq-block-question">
                                <h3 class="faq-block-question-text">{{ loyalCustomer }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faq-blocks">
                    <h2 class="faq-blocks-title" data-bs-toggle="collapse" data-bs-target="#faqBlockItem4" aria-expanded="false" aria-controls="faqBlockItem4">IV-Các lỗi thường gặp</h2>
                    <div v-for="(error, i) in listError" :key="i" class="collapse multi-collapse faq-block-items" id="faqBlockItem4">
                        <div class="faq-block">
                            <div class="faq-block-question">
                                <h3 class="faq-block-question-text">{{ error }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            listQuestion: [
                "1. Chuyển Khoản Nhanh là gì?",
                "2. Thanh toán rồi nhưng chưa nhận được thông báo?",
                "3. Cách thanh toán như thế nào?",
                "4. Cách kiểm tra số tiền thanh toán?",
                "5. Thanh toán bị thiếu nội dung?",
                "6. Cách gửi biên lai thanh toán?",
                "7. Làm sao để hủy giải ngân?",
                "8. Làm sao để gia hạn hợp đồng?",
                "9. Thanh toán bị sai tài khoản?",
            ],
            listNewRegistration: [
                "1. Chuyển Khoản Nhanh là gì?",
                "2. Thanh toán rồi nhưng chưa nhận được thông báo?",
                "3. Cách thanh toán như thế nào?",
                "4. Cách kiểm tra số tiền thanh toán?",
                "5. Thanh toán bị thiếu nội dung?",
            ],
            listLoyalCustomers: [
                "1. Chuyển Khoản Nhanh là gì?",
                "2. Thanh toán rồi nhưng chưa nhận được thông báo?",
                "3. Cách thanh toán như thế nào?",
                "4. Cách kiểm tra số tiền thanh toán?",
                "5. Thanh toán bị thiếu nội dung?",
            ],
            listError: [
                "1. Không nhận được OTP?",
                "2. Không nhập được thông tin đăng kí?",
                "3. Không tải được hình chụp CMND/hình xác thực?",
            ]
        }
    }
}
</script>
<style scoped>
.breadcrumbs-section {
    width: 100%;
    max-width: 747px;
    margin: 0 auto;
}
.breadcrumb {
    text-decoration: none;
    list-style: none;
    display: flex;
    padding: 0;
    font-size: 11px;
    color: #000;
    margin: 30px 0 15px;
}
.breadcrumb a {
    text-decoration: none;
    color: #000; 
}
.breadcrumb a:hover {
    color: #000;
    text-decoration: underline;
}
@media (min-width: 700px){
.connect-section, .howget-section, .howpay-section {
    margin-top: 40px;
}}
.faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}
.faq-title {
    font-weight: 700;
    font-size: 1.625em;
    margin: 0 10px 5px;
    text-align: center;
    color: #000;
}
.faq-description {
    max-width: 747px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #555;
}
.faq-description ul {
    list-style-type: none;
    padding: 0;
}
.faq-blocks {
    width: 747px;
}
.faq-blocks-title {
    font-size: 1.375em;
    color: grey;
    cursor: pointer;
    text-decoration: underline;
    margin-bottom: 20px;
}
.faq-block-question {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
    padding-left: 20px;
}
.faq-block-question-text {
    font-size: 1.125em;
    color: #4c4c4c;
    text-decoration: underline;
}
</style>