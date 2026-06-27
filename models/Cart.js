// models/Cart.js
class Cart {
    constructor() {
        this.lines = [];
        this.count = 0;
        this.subtotal = 0;
        this.tax = 0;
        this.total = 0;
    }
    add(product, qty) {
        this.lines.push({ product, qty });
        this.count += qty;
        this.subtotal += product.price * qty;
        this.tax = this.subtotal * 0.08;
        this.total = this.subtotal + this.tax;
    }
}
module.exports = Cart;