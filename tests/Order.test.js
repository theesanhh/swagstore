const fs = require('fs');
const path = require('path');
const Order = require('../models/Order');

const dataPath = path.join(__dirname, '../data/orders.json');
const sampleOrder = { id: 'ORD-123', userId: 100, total: 20 };

describe('Order model', () => {
    // Reset data trước và sau mỗi test để không bị cộng dồn [cite: 390-397, 426]
    beforeEach(() => { fs.writeFileSync(dataPath, '[]'); });
    afterEach(() => { fs.writeFileSync(dataPath, '[]'); });

    test('add appends a new order', () => {
        const order = Order.add(sampleOrder);
        expect(order).toEqual(sampleOrder);     
        expect(Order.getAll()).toHaveLength(1); 
    });

    test('getByUserId returns matching orders', () => {
        Order.add(sampleOrder); // User 100
        Order.add({ ...sampleOrder, id: 'ORD-124', userId: 200 }); // User 200

        const userOrders = Order.getByUserId(100);
        expect(userOrders).toHaveLength(1);     
        expect(userOrders[0].id).toBe('ORD-123');
    });
});