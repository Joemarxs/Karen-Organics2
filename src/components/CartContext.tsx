import React, { useEffect, useState, createContext, useContext } from 'react';
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  unit: string;
};
type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  const addItem = (item: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      if (existingItem) {
        return currentItems.map(i => i.id === item.id ? {
          ...i,
          quantity: i.quantity + item.quantity
        } : i);
      }
      return [...currentItems, item];
    });
  };
  const removeItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };
  const updateQuantity = (id: number, quantity: number) => {
    setItems(currentItems => currentItems.map(item => item.id === id ? {
      ...item,
      quantity
    } : item));
  };
  const clearCart = () => {
    setItems([]);
  };
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <CartContext.Provider value={{
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total
  }}>
      {children}
    </CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}