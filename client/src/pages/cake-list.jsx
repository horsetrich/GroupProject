import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CakeList = () => {
    const [cakes, setCakes] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
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
                console.error(`erro fetching projects: ${error}`);
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
        <div className="container mt-4">
            <h1 className="text-center">
                Projects
            </h1>
            <button className="btn btn-primary mb-3" onClick={() => navigate("/cake-details")}>
                Create New Project
            </button>

            {cakes.length > 0 ? (
                <>
                    <table className="table table-striped">
                        <thead>
                            <tr>Style</tr>
                            <tr>Flavour</tr>
                            <tr>Frosting</tr>
                            <tr>Size</tr>
                            <tr>Price</tr>
                        </thead>
                        <tbody>
                            { cakes.map((cakes) => (
                                <tr key={cakes._id}>
                                    <td>{cakes.style}</td>
                                    <td>{cakes.flavour}</td>
                                    <td>{cakes.frosting}</td>
                                    <td>{cakes.size}</td>
                                    <td>{cakes.price}</td>
                                    <td>
                                        <button className="btn btn-secondary mr-2"
                                            onClick={() => navigate(`/cakes/${cakes._id}`)}
                                        >Update</button>
                                        <button classsName="btn btn-danger"
                                            onClick={() => handleDelete(cakes._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ):(
                <></>
            )}
        </div>
    )
}

export default CakeList;