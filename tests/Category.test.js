const Category = require('../models/Category');
describe('Category model', () => {
    test('getAll returns categories from JSON', () => {
        expect(Array.isArray(Category.getAll())).toBe(true);
    });
});