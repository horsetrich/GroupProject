import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cake from '../assets/Cakes.jpg'
import CupCakes from '../assets/Cupcakes.jpg';
import Chocolate from '../assets/Chocolate.jpg';
import Birthday from '../assets/Birthday.jpg';
import Wedding from '../assets/WeddingCake.jpg';

export default function Home() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulated API call
        const fetchFeaturedProducts = () => {
            const mockData = {
                products: [
                    {
                        id: 1,
                        name: 'Chocolate Delight',
                        category: 'Custom',
                        price: 55.99,
                        image: Chocolate
                    },
                    {
                        id: 2,
                        name: 'Wedding Elegance',
                        category: 'Wedding',
                        price: 299.99,
                        image: Wedding
                    },
                    {
                        id: 3,
                        name: 'Cupcake Pack',
                        category: 'Cupcakes',
                        price: 24.99,
                        image: CupCakes
                    },
                    {
                        id: 4,
                        name: 'Classic Birthday Cake',
                        category: 'Birthday',
                        price: 45.99,
                        image: Birthday
                    }
                ]
            };

            setTimeout(() => {
                setFeaturedProducts(mockData.products);
                setIsLoading(false);
            }, 1000);
        };

        fetchFeaturedProducts();
    }, []);

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="position-relative">
                <div className="hero-section text-white text-center py-5" 
                     style={{
                         background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
                         backgroundImage: `url(${Cake})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         minHeight: '500px',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center'
                     }}>
                    <div className="container">
                        <h1 className="display-4 mb-4">Delicious Cakes for Every Occasion</h1>
                        <p className="lead mb-4">From birthdays to weddings, make every celebration special with our handcrafted cakes. Custom designs available for your unique moments.</p>
                        <div className="d-flex justify-content-center gap-3">
                            <Link to="/cake" className="btn btn-primary btn-lg">Browse Products</Link>
                            <Link to="/contact" className="btn btn-outline-light btn-lg">Custom Orders</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Why Choose Us</h2>
                <p className="text-center text-muted mb-5">We take pride in delivering the best cake experience</p>
                
                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="text-center">
                            <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                                <i className="bi bi-cake2 fs-3"></i>
                            </div>
                            <h4>Custom Designs</h4>
                            <p className="text-muted">Personalize your cake for any special occasion</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                                <i className="bi bi-gift fs-3"></i>
                            </div>
                            <h4>Perfect Gifting</h4>
                            <p className="text-muted">Make celebrations memorable with our special cakes</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                                <i className="bi bi-truck fs-3"></i>
                            </div>
                            <h4>Fast Delivery</h4>
                            <p className="text-muted">Same day delivery for your last-minute celebrations</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center">
                            <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                                <i className="bi bi-star fs-3"></i>
                            </div>
                            <h4>Premium Quality</h4>
                            <p className="text-muted">Made with the finest ingredients for the best taste</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="container mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0">Featured Products</h2>
                    <Link to="/cake" className="text-decoration-none">View All →</Link>
                </div>
                <p className="text-muted mb-4">Our most popular creations</p>

                {isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row g-4">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="col-md-3">
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text text-muted">{product.category}</p>
                                        <p className="card-text fw-bold">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Call to Action Section */}
            <div className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h2 className="mb-3">Ready to order your dream cake?</h2>
                            <p className="mb-md-0">Start customizing today.</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <Link to="/contact" className="btn btn-light btn-lg">Start Custom Order →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}