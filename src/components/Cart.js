import React, { useContext } from 'react';
import { CartContext } from '../App'; 
import './Cart.css'; 
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const total = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

    const handleCheckout = () => {
        alert('Proceeding to checkout');
        navigate('/checkout');  
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button className="checkout-button" onClick={handleCheckout}>Buy Now</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
