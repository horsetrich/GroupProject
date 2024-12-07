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
                        <h1 className="display-4 mb-4" style={{ color: '#d68a7d' }}>🍰 WebWizards Cake Shop</h1>
                        <p className="lead w-75 mx-auto" style={{ color: '#FFB6C1' }}>Creating delicious memories since 2023</p>
                    </div>
                </div>
            </div>

        <div className="container py-5" style={{ fontFamily: 'Arial, sans-serif' }}>

            {/* Overview Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img 
                        src={Bakery}
                        alt="Bakery Interior" 
                        className="img-fluid rounded shadow"
                        style={{ border: '5px solid #f7d5b1' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4" style={{ color: '#d68a7d' }}>Our Story</h2>
                    <p className="lead mb-4" style={{ color: '#4b4b4b' }}>
                        WebWizards Cake Shop is a comprehensive web application developed as part of 
                        COMP229 - Web Application Development course.
                    </p>
                    <p style={{ color: '#4b4b4b' }}>
                        Our platform enables customers to browse, customize, and order delicious 
                        cakes while providing our team with powerful tools for managing products 
                        and orders efficiently.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className=" p-5 rounded mb-5" style={{ backgroundColor: '#FFB6C1'}}>
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0" style={{ backgroundColor: '#FFB6C1'}}>
                        <br></br>
                        <h4 style={{ color: '#d68a7d' }}>Our Mission</h4>
                        <p style={{ color: '#4b4b4b' }}>To deliver exceptional cake experience through innovative web technology</p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0" style={{ backgroundColor: '#FFB6C1' }}>
                    <br></br>
                        <h4 style={{ color: '#d68a7d' }}>Our Vision</h4>
                        <p style={{ color: '#4b4b4b' }}>Becoming the leading online platform for custom cake orders</p>
                    </div>
                    <div className="col-md-4" style={{ backgroundColor: '#FFB6C1'}}>
                    <br></br>
                        <h4 style={{ color: '#d68a7d' }}>Our Values</h4>
                        <p style={{ color: '#4b4b4b' }}>Quality, Innovation, Customer Satisfaction</p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-5">
                <h2 className="text-center mb-5" style={{ color: '#d68a7d' }}>Meet Our Team</h2>
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
                                <div className="card h-100 border-0 shadow-sm" style={{ borderColor: '#d68a7d' }}>
                                    <img 
                                        src={member.image} 
                                        className="card-img-top" 
                                        alt={member.name}
                                        style={{height: '300px', objectFit: 'cover', borderRadius: '10px'}}
                                    />
                                    <div className="card-body text-center" style={{ backgroundColor: '#FFFACD' }}>
                                        <h5 className="card-title" style={{ color: '#d68a7d' }}>{member.name}</h5>
                                        <p className="card-text text-muted mb-2" style={{ color: '#4b4b4b' }}>{member.role}</p>
                                        <p className="card-text small" style={{ color: '#4b4b4b' }}>{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Technologies Section */}
            <div className="text-center">
                <h3 className="mb-4" style={{ color: '#d68a7d' }}>Technologies Used</h3>
                <div className="row g-4 justify-content-center">
                    <div className="col-6 col-md-2" >
                        <div className="p-3 rounded" style={{ backgroundColor: '#FFFACD' }}>
                            <i className="bi bi-react fs-2" ></i>
                            <p className="mb-0" style={{ color: '#d68a7d' }}>React</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="p-3 rounded" style={{ backgroundColor: '#FFFACD' }}>
                            <i className="bi bi-bootstrap fs-2"></i>
                            <p className="mb-0" style={{ color: '#d68a7d' }}>Bootstrap</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="p-3 rounded" style={{ backgroundColor: '#FFFACD' }}>
                            <i className="bi bi-database fs-2"></i>
                            <p className="mb-0" style={{ color: '#d68a7d' }}>MongoDB</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="p-3 rounded" style={{ backgroundColor: '#FFFACD' }}>
                            <i className="bi bi-node-plus fs-2"></i>
                            <p className="mb-0" style={{ color: '#d68a7d' }}>Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}