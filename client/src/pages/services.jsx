<<<<<<< HEAD
import React from 'react';
export default function services() {
    return (
      <>
        <p>Our Services</p>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <h4>Cakes</h4>
                    <hr/>
                    <h4>Cupcakes</h4>
                    <hr/>
                    <h4>specialty desserts</h4>
                    <hr/>
                </div>
      </>
    );
  }
=======
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
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-5 mb-3">Our Services</h1>
                <p className="lead text-muted">Discover our range of delicious offerings for every occasion</p>
            </div>

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
                            <div className="card h-100">
                                <img src={service.image} className="card-img-top" alt={service.name} />
                                <div className="card-body">
                                    <h3 className="card-title h4">{service.name}</h3>
                                    <p className="card-text">{service.description}</p>
                                    <ul className="list-unstyled">
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
                    <h3>Custom Orders</h3>
                    <p>We understand that every celebration is unique. That's why we offer fully customizable options for all our services. Contact us to discuss your specific requirements.</p>
                    <button className="btn btn-primary">Request Custom Order</button>
                </div>
                <div className="col-md-6">
                    <h3>Delivery Information</h3>
                    <p>We offer reliable delivery services to ensure your cake arrives fresh and perfect. Delivery options include:</p>
                    <ul>
                        <li>Standard delivery (24-48 hours)</li>
                        <li>Express delivery (Same day)</li>
                        <li>Pickup from store</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
>>>>>>> upstream/main
