const Product = {
    getAll: () => [{ id: 1, name: 'Sample Product', category: 'test' }],
    getById: (id) => ({ id: 1, name: 'Sample Product' }),
    getCategories: () => ['category1', 'category2'],
    getTypes: () => ['type1', 'type2'],
    getByCategory: (category) => [{ id: 1, name: 'Sample Product', category: 'test' }]
};

module.exports = Product;