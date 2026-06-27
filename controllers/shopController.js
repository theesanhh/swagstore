const CartController = {
    addToCart: (req, res) => {
        // Nếu không có productId thì trả về 404 [cite: 461-471]
        if (!req.body || !req.body.productId) {
            return res.status(404).send('Product not found');
        }
        // Giả lập xử lý thành công
        return res.status(200).send('Product added');
    }
};

module.exports = CartController;