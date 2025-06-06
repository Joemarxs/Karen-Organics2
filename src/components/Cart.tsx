import React from 'react';
import { useCart } from './CartContext';
import { X as XIcon, ShoppingCart } from 'lucide-react';
export function Cart() {
  const {
    items,
    removeItem,
    updateQuantity,
    total,
    clearCart
  } = useCart();
  if (items.length === 0) {
    return <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center gap-2 text-brown-600">
          <ShoppingCart size={24} />
          <p>Your cart is empty</p>
        </div>
      </div>;
  }
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map(item => <div key={item.id} className="flex justify-between items-start border-b border-brown-200 pb-4">
            <div>
              <h3 className="font-medium text-brown-800">{item.name}</h3>
              <p className="text-brown-600">
                ${item.price.toFixed(2)} / {item.unit}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <input type="number" min="1" value={item.quantity} onChange={e => updateQuantity(item.id, Math.max(1, parseInt(e.target.value)))} className="w-16 px-2 py-1 border border-brown-300 rounded-md" />
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                  <XIcon size={18} />
                </button>
              </div>
            </div>
            <p className="font-medium text-brown-800">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>)}
      </div>
      <div className="mt-6 pt-4 border-t border-brown-200">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-brown-800">Total:</span>
          <span className="font-bold text-blue-800">${total.toFixed(2)}</span>
        </div>
        <div className="space-y-2">
          <button onClick={() => alert('Checkout functionality would go here')} className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Checkout
          </button>
          <button onClick={clearCart} className="w-full border border-brown-300 text-brown-600 px-4 py-2 rounded-md hover:bg-brown-50 transition">
            Clear Cart
          </button>
        </div>
      </div>
    </div>;
}