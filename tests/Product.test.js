const Product = require('../models/Product');
describe('Product model', () => {
    test('getAll returns products', () => expect(Product.getAll().length).toBeGreaterThan(0));
    test('getById returns product', () => expect(Product.getById(1)).toBeDefined());
    test('getCategories returns array', () => expect(Array.isArray(Product.getCategories())).toBe(true));
    test('getTypes returns array', () => expect(Array.isArray(Product.getTypes())).toBe(true));
    test('filter by category', () => expect(Product.getByCategory('test')).toBeDefined());
});