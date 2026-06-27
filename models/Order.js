const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/orders.json');

const Order = {
    getAll: () => JSON.parse(fs.readFileSync(dataPath, 'utf8')),
    add: (order) => {
        const orders = Order.getAll();
        orders.push(order);
        fs.writeFileSync(dataPath, JSON.stringify(orders));
        return order;
    },
    getByUserId: (userId) => Order.getAll().filter(o => o.userId === userId)
};
module.exports = Order;