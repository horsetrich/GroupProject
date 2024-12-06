import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CakeList = () => {
    const [cakes, setCakes] = useState([]);
    const apiUrl = '/api';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCakes = async() => {

            try {
                const response = await fetch(`${apiUrl}/cake`);
                const data = await response.json();

                if(!response.ok){
                    throw new Error(data.message);
                }
                setCakes(data);
            } catch (error){
                console.error(`error fetching projects: ${error}`);
            }
        }

        fetchCakes();
    }, [apiUrl])

    const handleDelete = async (cakeId) => {

        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login');
            console.error("No token found");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/cake/${cakeId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if(!response.ok){
                throw new Error('Error deleting project');
            }

            setCakes((prevCakes) => prevCakes.filter(cake => cake._id !== cakeId));

        } catch(error) {
            console.error(`Error deleting project: ${error}`);
        }
    }
    
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
                        <h1 className="display-4 mb-4" style={{ color: '#d68a7d' }}>Cakes</h1>
                    </div>
                </div>
            </div>

        <div className="container mt-4">
            <button className="btn" style={{ backgroundColor: '#d68a7d', color: '#fff' }} onClick={() => navigate("/cake-details")}>
                Create New Cake
            </button>

            {cakes.length > 0 ? (

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Style</th>
                                <th>Flavour</th>
                                <th>Frosting</th>
                                <th>Size</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cakes.map((cakes) => (
                                <tr key={cakes._id}>
                                    <td>{cakes.style}</td>
                                    <td>{cakes.cakeFlavour}</td>
                                    <td>{cakes.frostingFlavour}</td>
                                    <td>{cakes.size}</td>
                                    <td>{cakes.price}</td>
                                    <td>
                                        <button className="btn btn-secondary mr-2" style={{ backgroundColor: '#d68a7d', color: '#fff' }}
                                            onClick={() => navigate(`/cake-details/${cakes._id}`)}
                                        >Update</button>
                                        <button classsName="btn btn-danger" style={{ backgroundColor: '#d68a7d', color: '#fff' }}
                                            onClick={() => handleDelete(cakes._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                
            ):(
                <p>No cakes available</p>
            )}
        </div>
        </div>
    )
}

export default CakeList;