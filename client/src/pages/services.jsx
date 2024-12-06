import { useState, useEffect } from 'react';
import Cake from '../assets/Chocolate.jpg';
import Cupcake from '../assets/Cupcakes.jpg';
import Wedding from '../assets/WeddingCake.jpg';

export default function Services() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulated API call
        const fetchServices = () => {
            const mockData = {
                services: [
                    {
                        id: 1,
                        name: 'Custom Cakes',
                        description: 'Personalized cakes designed to your specifications. Perfect for birthdays, anniversaries, and special celebrations.',
                        image: Cake,
                        features: ['Custom designs', 'Various flavors', 'Size options', 'Dietary alternatives']
                    },
                    {
                        id: 2,
                        name: 'Wedding Cakes',
                        description: 'Elegant multi-tiered cakes for your special day. Each cake is crafted with attention to detail and your unique style.',
                        image: Wedding,
                        features: ['Free consultation', 'Tasting sessions', 'Setup & delivery', 'Design customization']
                    },
                    {
                        id: 3,
                        name: 'Cupcakes',
                        description: 'Perfect for parties and events. Available in various flavors and decorative designs.',
                        image: Cupcake,
                        features: ['Bulk orders', 'Mini cupcakes', 'Custom toppers', 'Gift packaging']
                    }
                ]
            };

            setTimeout(() => {
                setServices(mockData.services);
                setIsLoading(false);
            }, 1000);
        };

        fetchServices();
    }, []);

    return (
        <div className="container-fluid p-0">
            <div className="position-relative">
                <div className="hero-section text-white text-center py-5"
                    style={{
                        background: 'linear-gradient(to right, #FFD1DC, #FFFACD)',
                        minHeight: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className="container">
                        <h1 className="display-4 mb-4" style={{ color: '#d68a7d' }}>Our Services</h1>
                        <p className="lead text-muted" style={{ color: '#4b4b4b' }}>Discover our range of delicious offerings for every occasion</p>
                    </div>
                </div>
            </div>
        <div className="container py-5" style={{ fontFamily: 'Arial, sans-serif' }}>
           
            {isLoading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {services.map(service => (
                        <div key={service.id} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm" style={{ borderColor: '#d68a7d' }}>
                                <img
                                    src={service.image}
                                    className="card-img-top"
                                    alt={service.name}
                                    style={{ height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                                />
                                <div className="card-body" style={{ backgroundColor: '#FFFACD' }}>
                                    <h3 className="card-title" style={{ color: '#d68a7d' }}>{service.name}</h3>
                                    <p className="card-text" style={{ color: '#4b4b4b' }}>{service.description}</p>
                                    <ul className="list-unstyled" style={{ color: '#4b4b4b' }}>
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="mb-2">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Additional Services Info */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3 style={{ color: '#d68a7d' }}>Custom Orders</h3>
                    <p style={{ color: '#4b4b4b' }}>
                        We understand that every celebration is unique. That's why we offer fully customizable options for all our services. Contact us to discuss your specific requirements.
                    </p>
                    <button className="btn" style={{ backgroundColor: '#d68a7d', color: '#fff' }}>Request Custom Order</button>
                </div>
                <div className="col-md-6">
                    <h3 style={{ color: '#d68a7d' }}>Delivery Information</h3>
                    <p style={{ color: '#4b4b4b' }}>
                        We offer reliable delivery services to ensure your cake arrives fresh and perfect. Delivery options include:
                    </p>
                    <ul style={{ color: '#4b4b4b' }}>
                        <li>Standard delivery (24-48 hours)</li>
                        <li>Express delivery (Same day)</li>
                        <li>Pickup from store</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}