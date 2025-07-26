import React from 'react';
import './Product.css';

function Product({ id, name, image, price, soldOut, addToCart }) {
    const handleClick = () => {
        if (!soldOut) {
            addToCart(id);
        }
    };

    return (
        <div className="product">
            <img src={image} alt={name} />
            <div className="product-info">
                <p>{name}</p>
                <p>Price: ${price}</p>
                <div className="buttons">
                    {soldOut ? (
                        <button className="sold-out">Sold Out</button>
                    ) : (
                        <>
                            <button onClick={handleClick}>Add to Cart</button>
                            <button>Details</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;