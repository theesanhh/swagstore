const express = require('express');
const app = express();

// Cấu hình cơ bản để đọc dữ liệu từ request (cho Controller hoạt động)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Một Route cơ bản để test khi web lên mạng
app.get('/', (req, res) => {
    res.send('🚀 Chào mừng đến với SwagStore! Web đã lên mạng thành công!');
});

// BẮT BUỘC CHO RENDER: Phải dùng process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});