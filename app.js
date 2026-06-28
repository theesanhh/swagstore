const express = require('express');
const app = express();

// Route trang chủ
app.get('/', (req, res) => {
    res.send('<h1 style="color: green; text-align: center; margin-top: 20%;">🚀 Chào mừng đến với SwagStore!<br>Web đã lên mạng thành công!</h1>');
});

// Cổng chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});