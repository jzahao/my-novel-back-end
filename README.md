Thứ tự chạy

1. Tải XAMPP về, bật Apache với MySQL lên, xong bấm nút admin chỗ MySQL để bật PHPMyAdmin trên browser, tạo 1 cái database tên là my-novel
2. Clone backend trên github về, mở terminal lên gõ npm i để tải package về.
3. Mở 1 terminal mới, gõ cd src, gõ tiếp npx sequelize-cli db:migrate để tạo các bảng vào database.
4. Trong folder database có 3 file txt là 3 file query, mở phpmyadmin lên rồi copy hết nội dung 3 file này để tạo dữ liệu.
5. npm start để chạy backend.
6. Mở frontend lên, qua nhánh main pull về, mở lên gõ npm i để cài package, rồi npm start để chạy.
