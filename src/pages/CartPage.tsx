import React from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react';
export function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    total,
    clearCart
  } = useCart();
  if (items.length === 0) {
    return <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag size={48} className="mx-auto text-green-300 mb-4" />
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-brown-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </div>
      </div>;
  }
  return <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              {items.map(item => <div key={item.id} className="flex items-start border-b border-brown-200 pb-6">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-brown-800">
                      {item.name}
                    </h3>
                    <p className="text-brown-600">
                      ${item.price.toFixed(2)} / {item.unit}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.id, Math.max(1, parseInt(e.target.value)))} className="w-20 px-2 py-1 border border-brown-300 rounded-md" />
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 flex items-center gap-1">
                        <Trash2 size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-brown-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-brown-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-brown-200 pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-green-800">${total.toFixed(2)}</span>
                </div>
              </div>
              <button onClick={() => alert('Checkout functionality would go here')} className="w-full bg-green-700 text-white px-4 py-3 rounded-md hover:bg-green-800 transition font-medium">
                Proceed to Checkout
              </button>
              <button onClick={clearCart} className="w-full border border-brown-300 text-brown-600 px-4 py-3 rounded-md hover:bg-brown-50 transition">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}