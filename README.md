# ViezAI Enterprise Landing Web (viezai.com)

Landing page doanh nghiệp cho **ViezAI** — Nền tảng & giải pháp **Enterprise Multi-Agent Orchestration & Automation**. Được thiết kế theo ngôn ngữ thẩm mỹ tối giản, sang trọng phong cách **OpenAI Aesthetic** (Dark theme `#000000`, viền mảnh `#262626`, typography tinh gọn, Bento Grid và Interactive Agent Simulator).

---

## ✨ Điểm nổi bật & Tính năng

1. **OpenAI Aesthetic Design Language**:
   - Nền màu đen sâu (`#000000` / `#0a0a0c`), viền phân tách mỏng 1px (`#1e1e24` / `#27272f`).
   - Subtle luminescence glow, badges trạng thái hoạt động với pulse animation.
   - Typography hiện đại (Inter, JetBrains Mono) tương phản cao, dễ đọc.
   - Thẻ Bento Grid tổ chức thông tin trực quan.

2. **Interactive Agent Simulator & Live Showcase**:
   - Mô phỏng thực tế cách các Agent chuyên trách phối hợp: **Planner Agent** -> **Coder Agent** -> **Security Agent** -> **Evaluator Agent**.
   - 3 kịch bản thực tế doanh nghiệp:
     - *Enterprise Bug Fix & Adversarial Review*
     - *Automated Data Pipeline ETL (ClickHouse Vector Lake)*
     - *Security Compliance CVE Audit & Remediation*
   - Hỗ trợ xem từng bước, tự động phát (Auto-play) và xem log/syntax code thực tế.

3. **Enterprise Security & Architecture**:
   - Giới thiệu quy trình điều phối 4 bước: *Connect & Scope -> Decompose & Plan -> Parallel Execution -> Verify & Human Gate*.
   - Khẳng định cam kết bảo mật: Private VPC, On-Premise Enclave, Taint analysis, Không dùng dữ liệu khách hàng để train public model.

4. **Biểu mẫu Liên hệ & Thu thập Yêu cầu (Lead Capture)**:
   - Client-side validation đầy đủ (Tên, Email doanh nghiệp, Tên công ty, Phân loại giải pháp).
   - UX feedback mượt mà với thông báo xác nhận trực tiếp.

5. **Hiệu năng & Khả năng Tương thích**:
   - Zero external heavy dependencies (không bloatware).
   - Tốc độ tải trang siêu tốc (< 1.2s), tối ưu SEO meta tags & OpenGraph.
   - Responsive 100% trên thiết bị Mobile, Tablet và Desktop.

---

## 📁 Cấu trúc Thư mục

```text
landing-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Tự động deploy lên GitHub Pages
├── assets/
│   ├── favicon.svg             # Favicon vector
│   └── logo.svg                # Logo ViezAI Enterprise
├── css/
│   └── styles.css              # Hệ thống biến CSS tokens & OpenAI dark theme
├── js/
│   ├── agent-simulator.js      # Dữ liệu kịch bản & state machine cho Simulator
│   └── app.js                  # Điều khiển tương tác, accordion, form validation
├── Dockerfile                  # Docker container image tối ưu với Nginx Alpine
├── nginx.conf                  # Cấu hình Nginx với Gzip & Security Headers
├── package.json                # Project manifest & dev scripts
├── index.html                  # Giao diện chính Semantic HTML5
└── README.md                   # Tài liệu hướng dẫn
```

---

## 🚀 Hướng dẫn Cài đặt & Chạy Local

### 1. Chạy nhanh bằng Python (Không cần cài thêm thư viện)
```bash
# Trong thư mục dự án:
python3 -m http.server 3000
```
Mở trình duyệt tại: `http://localhost:3000`

### 2. Chạy với Docker
```bash
# Build Docker image
docker build -t viezai-landing-web:latest .

# Run container
docker run -d -p 8080:80 --name viezai-landing viezai-landing-web:latest
```
Mở trình duyệt tại: `http://localhost:8080`

### 3. Deploy lên GitHub Pages
Dự án đã tích hợp sẵn GitHub Actions tại `.github/workflows/deploy.yml`. Khi push lên nhánh `main`, hệ thống sẽ tự động kích hoạt workflow và xuất bản trang web.

---

## 🛡️ Giấy phép & Bản quyền
Bản quyền © 2026 **ViezAI Technologies Inc.** (viezai.com). Mọi quyền được bảo lưu.
