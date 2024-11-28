import { useState, useEffect } from 'react';
import myPicture from '../assets/MatthewPicture.jpg';
import maryamPicture from '../assets/MaryamKhan.jpg';
import lindaPicture from '../assets/LindaAlqaisi.jpg';
import Bakery from '../assets/Bakery.jpg';

export default function About() {
    const [teamData, setTeamData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeamData = () => {
            const mockData = {
                team: [
                    {
                        id: 1,
                        name: "Maryam Khan",
                        role: "Backend Lead",
                        image: maryamPicture,
                        description: "Specializes in server-side architecture and database management"
                    },
                    {
                        id: 2,
                        name: "Linda Qaisi",
                        role: "Frontend/Backend Lead",
                        image: lindaPicture,
                        description: "Full-stack developer focusing on user experience and system integration"
                    },
                    {
                        id: 3,
                        name: "Matthew Kool",
                        role: "Full Stack Developer",
                        image: myPicture,
                        description: "Handles end-to-end development and system architecture"
                    }
                ]
            };

            setTimeout(() => {
                setTeamData(mockData.team);
                setIsLoading(false);
            }, 1000);
        };

        fetchTeamData();
    }, []);

    return (
        <div className="container py-5">
            {/* Hero Section */}
            <div className="text-center mb-5">
                <h1 className="display-4 mb-3">🍰 WebWizards Cake Shop</h1>
                <p className="lead w-75 mx-auto">Creating delicious memories since 2023</p>
            </div>

            {/* Overview Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img 
                        src={Bakery}
                        alt="Bakery Interior" 
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">Our Story</h2>
                    <p className="lead mb-4">
                        WebWizards Cake Shop is a comprehensive web application developed as part of 
                        COMP229 - Web Application Development course.
                    </p>
                    <p>
                        Our platform enables customers to browse, customize, and order delicious 
                        cakes while providing our team with powerful tools for managing products 
                        and orders efficiently.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-light p-5 rounded mb-5">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h4>Our Mission</h4>
                        <p>To deliver exceptional cake experiences through innovative web technology</p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h4>Our Vision</h4>
                        <p>Becoming the leading online platform for custom cake orders</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Our Values</h4>
                        <p>Quality, Innovation, Customer Satisfaction</p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-5">
                <h2 className="text-center mb-5">Meet Our Team</h2>
                {isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row g-4">
                        {teamData.map(member => (
                            <div key={member.id} className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <img 
                                        src={member.image} 
                                        className="card-img-top" 
                                        alt={member.name}
                                        style={{height: '300px', objectFit: 'cover'}}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{member.name}</h5>
                                        <p className="card-text text-muted mb-2">{member.role}</p>
                                        <p className="card-text small">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Technologies Section */}
            <div className="text-center">
                <h3 className="mb-4">Technologies Used</h3>
                <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md-2">
                        <div className="p-3 bg-light rounded">
                            <i className="bi bi-react fs-2"></i>
                            <p className="mb-0">React</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="p-3 bg-light rounded">
                            <i className="bi bi-bootstrap fs-2"></i>
                            <p className="mb-0">Bootstrap</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="p-3 bg-light rounded">
                            <i className="bi bi-database fs-2"></i>
                            <p className="mb-0">MongoDB</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="p-3 bg-light rounded">
                            <i className="bi bi-node-plus fs-2"></i>
                            <p className="mb-0">Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}