import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';
export function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const categories = [{
    id: 'all',
    name: 'All Products'
  }, {
    id: 'eggs',
    name: 'Farm Fresh Eggs'
  }, {
    id: 'whole',
    name: 'Whole Chicken'
  }, {
    id: 'cuts',
    name: 'Chicken Cuts'
  }];
  const products = [{
    id: 1,
    name: 'Farm Fresh Eggs',
    description: 'Nutrient-rich eggs from our free-range hens',
    price: 6.99,
    unit: 'dozen',
    category: 'eggs',
    image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3'
  }, {
    id: 2,
    name: 'Organic Whole Chicken',
    description: 'Pasture-raised broiler chicken',
    price: 15.99,
    unit: 'per lb',
    category: 'whole',
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3'
  }, {
    id: 3,
    name: 'Chicken Breast',
    description: 'Premium boneless, skinless chicken breast',
    price: 12.99,
    unit: 'per lb',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3'
  }, {
    id: 4,
    name: 'Chicken Thighs',
    description: 'Juicy, flavorful chicken thighs',
    price: 9.99,
    unit: 'per lb',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3'
  }];
  const filteredProducts = products.filter(product => (selectedCategory === 'all' || product.category === selectedCategory) && product.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Our Products</h1>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          <Search className="absolute left-3 top-2.5 text-brown-400" size={20} />
        </div>
        <div className="flex gap-4">
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {categories.map(category => <option key={category.id} value={category.id}>
                {category.name}
              </option>)}
          </select>
          <div className="relative">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="pl-10 pr-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <SlidersHorizontal className="absolute left-3 top-2.5 text-brown-400" size={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
      {filteredProducts.length === 0 && <div className="text-center py-12">
          <p className="text-brown-600">
            No products found matching your criteria.
          </p>
        </div>}
    </div>;
}