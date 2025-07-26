import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App'; 
import products from '../products';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

function Gallery() {
    const { addToCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('asc');
    const [hiddenProducts, setHiddenProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            image: 'https://i.ytimg.com/vi/7RDwcUMJ2lU/maxresdefault.jpg',
            alt: 'Slide 1',
            caption: 'Explore our latest collection with premium designs.'
        },
        {
            image: 'https://i.ytimg.com/vi/UBgDqvqwx_Y/maxresdefault.jpg',
            alt: 'Slide 2',
            caption: 'Discover comfort and style with our best-selling shoes.'
        },
        
    ];

    useEffect(() => {
        console.log("Slideshow useEffect called");
        const slideInterval = setInterval(() => {
            console.log("Changing slide");
            setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
        }, 5000); 

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    const sortedProducts = [...products].sort((a, b) => {
        const brandA = a.brand.toLowerCase();
        const brandB = b.brand.toLowerCase();

        if (brandA < brandB) {
            return -1;
        }
        if (brandA > brandB) {
            return 1;
        }
        return 0;
    });

    const filteredProducts = sortedProducts.filter(product => {
        return (
            (filter === 'All' || product.status === filter) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !hiddenProducts.includes(product.id)
        );
    }).sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    const showDetails = (product) => {
        setSelectedProduct(product);
    };

    const closeDetails = () => {
        setSelectedProduct(null);
    };

    const toggleHideProduct = (productId) => {
        setHiddenProducts(prevHiddenProducts =>
            prevHiddenProducts.includes(productId)
                ? prevHiddenProducts.filter(id => id !== productId)
                : [...prevHiddenProducts, productId]
        );
    };

    const unhideAllProducts = () => {
        setHiddenProducts([]);
    };

    return (
        <div>
            <div className="slideshow">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img src={slide.image} alt={slide.alt} className="slide-image" />
                        <div className="slide-caption">{slide.caption}</div>
                    </div>
                ))}
            </div>
            <div className="search-sort">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)} 
                />
                <select onChange={e => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="For Sale">For Sale</option>
                    <option value="Sold Out">Sold Out</option>
                </select>
                <select onChange={e => setSortOrder(e.target.value)}>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
                <button onClick={unhideAllProducts} className="unhide-button">
                    <FontAwesomeIcon icon={faEye} /> Unhide All
                </button>
            </div>
            <div className="gallery">
                {filteredProducts.map(product => (
                    <div className="product" key={product.id}>
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            className="hide-icon"
                            onClick={() => toggleHideProduct(product.id)}
                        />
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <p>{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Status: {product.status}</p>
                            {product.status === 'For Sale' ? (
                                <button onClick={() => addToCart(product)} className="gallery-button">Add to Cart</button>
                            ) : (
                                <button className="gallery-button sold-out" disabled>Sold Out</button>
                            )}
                            <button onClick={() => showDetails(product)} className="gallery-button">Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className="product-details-popup">
                    <div className="product-details-content">
                        <h2>{selectedProduct.name}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <p>{selectedProduct.details}</p>
                        <p>Price: ${selectedProduct.price}</p>
                        <p>Status: {selectedProduct.status}</p>
                        <button onClick={closeDetails} className="gallery-button">Close</button>
                    </div>
                </div>
            )}
            <div className="contact-us-link">
                <Link to="/contact-us" className="gallery-button">Contact Us</Link>
            </div>
        </div>
    );
}

export default Gallery;
