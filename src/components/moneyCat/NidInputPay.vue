<template>
  <div class="info">
    <img src="../../assets/percent.png" />
    <div>Phí thu hộ được tính tùy theo ngân hàng.</div>
  </div>
  <div class="table">
    <div class="table-unit">
      <div class="table-tittle">VPbank</div>
      <div class="info-row">
        <div class="info-title">Tên người nhận</div>
        <div class="info-content" style="margin-left: -120px">BAOKIM</div>
        <div class="info-copy">
          <img src="../../assets/copy.png" />
        </div>
      </div>
      <div class="info-row">
        <div class="info-title">Số TK Nhanh:</div>
        <div class="info-content">
          Kiểm tra tin nhắn gửi đến từ Moneycat hoặc
          <router-link class="info-link" to="/"> Tại đây</router-link>
        </div>
      </div>
    </div>
    <div class="table-unit">
      <div class="table-tittle">Hướng dẫn thanh toán</div>
      <div class="info-virtual">
        <div class="virtual-row">
          <div class="virtual-id">1</div>
          <div class="virtual-text">
            Đăng nhập vào ứng dụng Internet Banking của bạn
          </div>
        </div>
        <div class="virtual-row">
          <div class="virtual-id">2</div>
          <div class="virtual-text">Thanh toán vào thông tin tài khoản sau</div>
        </div>
        <div class="virtual-row">
          <div class="virtual-id">3</div>
          <div class="virtual-text">
            Thanh toán khoản vay , lưu lại hình chụp giao dịch.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="nid-input-container" style="margin: 20px 0">
    <form>
      <div class="form-label">Hãy nhập số CMND của bạn</div>
      <div class="input-form">
        <div class="nid-input">
          <input type="text" class="personal-nid" />
        </div>
        <div class="nid-button">
          <button class="check-button">
            <span>Kiểm Tra</span>
          </button>
        </div>
      </div>
    </form>
  </div>
  <div class="pay-text">
    <b>Tài Khoản Nhanh </b>
     là tài khoản dành riêng cho từng khách hàng, khi thanh toán vào Tài Khoản Nhanh - khoản vay của 
     bạn sẽ được cập nhật chỉ sau 5 phút, bạn có thể đăng ký khoản vay mới ngay lập tức!
     <br>
     <br>
     <router-link class="info-link" to="/">Bạn không thể nhớ tổng số tiền cần thanh toán là bao nhiêu ?</router-link>
  </div>
</template>

<script>
export default {
  name: "NidInputPay",
};
</script>

<style scoped>
.info {
  display: flex;
  justify-content: flex-start;
  padding: 8px 12px;
  background: rgba(0, 189, 180, 0.1);
  mix-blend-mode: normal;
  border-radius: 4px;
  width: 96%;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #00bdb4;
  margin-bottom: 10px;
}

img {
  margin-right: 10px;
  width: 18px;
  height: 18px;
}

.table {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.table-unit {
  width: 47%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
}

.table-tittle {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
  color: #000;
  padding-bottom: 5px;
  border-bottom: 1px solid #e6e6e6;
}

.info-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 5px;
  border-bottom: 1px solid #e6e6e6;
}

.info-title {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000;
  width: 40%;
}

.info-content {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747983;
}

.info-copy {
  cursor: pointer;
}

.info-link {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #ee4915;
}

.info-virtual {
  margin: 10px 0;
  width: 100%;
}

.virtual-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  margin-top: 0;
  width: 100%;
}

.virtual-id {
  padding: 6px 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  background-color: rgba(151, 151, 151, 0.3);
  color: #000;
  border-radius: 4px;
}

.virtual-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #747983;
  width: 85%;
}

.form-label {
  font-weight: 700;
  margin-bottom: 10px;
  color: #747983;
}

.input-form {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.nid-input {
  flex: 1;
  margin-right: 15px;
}

.nid-button {
  width: 250px;
}

.personal-nid {
  color: #000;
  border: 2px solid #ff7f00;
  border-radius: 5px;
  height: 48px;
  line-height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
}

.check-button {
  width: 100%;
  background: #ff7f00;
  color: #fff;
  border-radius: 5px;
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  box-shadow: 0 10px 10px -4px rgba(238, 68, 0, 0.3);
  padding: 11px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  max-width: 300px;
}

.check-button::before {
  content: "";
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjYnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAyNiAzMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTIuOTUgMC41OTk5NjhDMTIuODIxOSAwLjYwNDk2NCAxMi42OTYxIDAuNjM1NTY2IDEyLjU4IDAuNjg5OTY4TDEuMzggNi4wODk5N0MxLjIxODYgNi4xNjg1MSAxLjA4MjQ1IDYuMjkwNzIgMC45ODY5OTUgNi40NDI3M0MwLjg5MTU0NSA2LjU5NDc1IDAuODQwNjIgNi43NzA0NyAwLjg0MDAwMSA2Ljk0OTk3VjcuOTY5OTdDMC44MzgyMDIgOC4wOTcxOCAwLjg2MTcwNCA4LjIyMzQ4IDAuOTA5MTQxIDguMzQxNTNDMC45NTY1NzggOC40NTk1OCAxLjAyNyA4LjU2NzAyIDEuMTE2MzMgOC42NTc2MkMxLjIwNTY1IDguNzQ4MjEgMS4zMTIwOSA4LjgyMDE1IDEuNDI5NDUgOC44NjkyNUMxLjU0NjgyIDguOTE4MzUgMS42NzI3OCA4Ljk0MzY0IDEuOCA4Ljk0MzY0QzEuOTI3MjIgOC45NDM2NCAyLjA1MzE4IDguOTE4MzUgMi4xNzA1NSA4Ljg2OTI1QzIuMjg3OTEgOC44MjAxNSAyLjM5NDM1IDguNzQ4MjEgMi40ODM2NyA4LjY1NzYyQzIuNTczIDguNTY3MDIgMi42NDM0MiA4LjQ1OTU4IDIuNjkwODYgOC4zNDE1M0MyLjczODMgOC4yMjM0OCAyLjc2MTggOC4wOTcxOCAyLjc2IDcuOTY5OTdWNy41NTk5N0wxMyAyLjYxOTk3TDIzLjI0IDcuNTU5OTdWMTEuMjhDMjMuMjQgMTguNDE0NCAxOS4wNTUzIDI0LjQ5NzkgMTMgMjcuMzVDNi45NDUxMSAyNC40OTc3IDIuNzYgMTguNDE0IDIuNzYgMTEuMjhDMi43NjE4IDExLjE1MjggMi43MzgzIDExLjAyNjUgMi42OTA4NiAxMC45MDg0QzIuNjQzNDIgMTAuNzkwNCAyLjU3MyAxMC42ODI5IDIuNDgzNjcgMTAuNTkyM0MyLjM5NDM1IDEwLjUwMTcgMi4yODc5MSAxMC40Mjk4IDIuMTcwNTUgMTAuMzgwN0MyLjA1MzE4IDEwLjMzMTYgMS45MjcyMiAxMC4zMDYzIDEuOCAxMC4zMDYzQzEuNjcyNzggMTAuMzA2MyAxLjU0NjgyIDEwLjMzMTYgMS40Mjk0NSAxMC4zODA3QzEuMzEyMDkgMTAuNDI5OCAxLjIwNTY1IDEwLjUwMTcgMS4xMTYzMyAxMC41OTIzQzEuMDI3IDEwLjY4MjkgMC45NTY1NzggMTAuNzkwNCAwLjkwOTE0MSAxMC45MDg0QzAuODYxNzA0IDExLjAyNjUgMC44MzgyMDIgMTEuMTUyOCAwLjg0MDAwMSAxMS4yOEMwLjg0MDAwMSAxOS4zMzc0IDUuNjYzMzggMjYuMjQ1OCAxMi42MSAyOS4zMUMxMi43MzI4IDI5LjM2NDUgMTIuODY1NiAyOS4zOTI3IDEzIDI5LjM5MjdDMTMuMTM0NCAyOS4zOTI3IDEzLjI2NzIgMjkuMzY0NSAxMy4zOSAyOS4zMUMyMC4zMzcyIDI2LjI0NiAyNS4xNiAxOS4zMzc3IDI1LjE2IDExLjI4VjYuOTQ5OTdDMjUuMTU5NCA2Ljc3MDQ3IDI1LjEwODUgNi41OTQ3NSAyNS4wMTMgNi40NDI3M0MyNC45MTc2IDYuMjkwNzIgMjQuNzgxNCA2LjE2ODUxIDI0LjYyIDYuMDg5OTdMMTMuNDIgMC42ODk5NjhDMTMuMjczNCAwLjYyMDc4IDEzLjExMTggMC41ODk4MTggMTIuOTUgMC41OTk5NjhaTTE4LjY3IDEwLjE5QzE4LjQ1NSAxMC4yMTMyIDE4LjI1NDIgMTAuMzA4MyAxOC4xIDEwLjQ2TDExLjQxIDE2Ljg1TDguNTYgMTRDOC40NzM2OCAxMy45MDExIDguMzY4IDEzLjgyMSA4LjI0OTUgMTMuNzY0NkM4LjEzMDk5IDEzLjcwODIgOC4wMDIxOCAxMy42NzY2IDcuODcxMDIgMTMuNjcyQzcuNzM5ODYgMTMuNjY3MyA3LjYwOTEzIDEzLjY4OTYgNy40ODY5MSAxMy43Mzc0QzcuMzY0NjkgMTMuNzg1MiA3LjI1MzU3IDEzLjg1NzYgNy4xNjA0MyAxMy45NTAxQzcuMDY3MjggMTQuMDQyNSA2Ljk5NDA4IDE0LjE1MzEgNi45NDUzNSAxNC4yNzVDNi44OTY2MSAxNC4zOTY4IDYuODczMzggMTQuNTI3NCA2Ljg3NzA5IDE0LjY1ODZDNi44ODA4IDE0Ljc4OTggNi45MTEzNyAxNC45MTg4IDYuOTY2OTEgMTUuMDM3N0M3LjAyMjQ1IDE1LjE1NjYgNy4xMDE3OCAxNS4yNjI5IDcuMiAxNS4zNUwxMC43MiAxOC44N0MxMC44OTY3IDE5LjA0NzMgMTEuMTM1NiAxOS4xNDg3IDExLjM4NTkgMTkuMTUyNEMxMS42MzYzIDE5LjE1NjIgMTEuODc4MSAxOS4wNjIgMTIuMDYgMTguODlMMTkuNDIgMTEuODVDMTkuNTY3OSAxMS43MTMyIDE5LjY2OTEgMTEuNTMzMyAxOS43MDkxIDExLjMzNTlDMTkuNzQ5MiAxMS4xMzg0IDE5LjcyNjEgMTAuOTMzMyAxOS42NDMxIDEwLjc0OTdDMTkuNTYwMiAxMC41NjYxIDE5LjQyMTYgMTAuNDEzMyAxOS4yNDY5IDEwLjMxMjhDMTkuMDcyMyAxMC4yMTIzIDE4Ljg3MDQgMTAuMTY5NCAxOC42NyAxMC4xOVonIGZpbGw9J3doaXRlJy8+PC9zdmc+Cg==);
  width: 26px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
}

.pay-text {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-top: 15px;
    color: #747983;
}

@media (max-width: 900px) {
  .table {
    flex-direction: column;
  }
  .table > div {
    width: 100%;
  }
}
@media (max-width: 700px)  {
  .input-form {
    flex-direction: column;
  }
  .input-form>div {
    width: 100%;
    margin-bottom: 10px;
  }
  .nid-button button {
    max-width: inherit;
  }
}
</style>