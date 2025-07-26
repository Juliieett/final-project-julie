import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import ProfileCard from './components/ProfileCard';
import ContactUs from './components/ContactUs'; 
import Header from './components/Header';

export const CartContext = createContext();

function App() {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        name: 'Julie',
        email: 'julie.kiu@example.com',
        age: 18
    });

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem => 
                cartItem.id === item.id
                    ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        const itemToRemove = cart.find(item => item.id === id);
        if (itemToRemove.quantity > 1) {
            setCart(cart.map(item => 
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== id));
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, user }}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Gallery />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<ProfileCard />} />
                    <Route path="/contact-us" element={<ContactUs />} /> 
                </Routes>
            </Router>
        </CartContext.Provider>
    );
}

export default App;