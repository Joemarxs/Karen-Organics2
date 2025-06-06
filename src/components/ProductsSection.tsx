import React from 'react';
export function ProductsSection() {
  const products = [{
    id: 1,
    name: 'Farm Fresh Eggs',
    description: 'Nutrient-rich eggs from our free-range hens, collected daily.',
    image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80'
  }, {
    id: 2,
    name: 'Organic Broilers',
    description: 'Pasture-raised broiler chickens, perfect for roasting.',
    image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
  }, {
    id: 3,
    name: 'Premium Chicken Cuts',
    description: 'Expertly prepared chicken cuts from our organic, free-range birds.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  return <section id="products" className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
          Our Products
        </h2>
        <p className="text-lg text-brown-700 text-center max-w-2xl mx-auto mb-12">
          From farm-fresh eggs to premium chicken cuts, we offer the highest
          quality organic products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-56 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-brown-600 mb-4">{product.description}</p>
                <a href="#" className="inline-block text-green-700 font-medium hover:text-green-800 hover:underline">
                  Learn more
                </a>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition inline-block text-lg font-medium">
            Shop Now
          </a>
        </div>
      </div>
    </section>;
}