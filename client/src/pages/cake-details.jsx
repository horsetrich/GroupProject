import { useState, useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom';

const CakeDetails = () => {
    const [cake, setCake] = useState({
        style: '',
        cakeFlavour: '',
        frostingFlavour: '',
        size: '',
        price: ''
    });

    const { id } = useParams();
    const apiUrl = '/api';
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            const fetchCake  = async () => {
                const token =  localStorage.getItem('token');

                if(!token){
                    navigate('/login');
                    return;
                }

                try {
                    const response = await fetch(`${apiUrl}/cake/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (!response.ok){
                        throw new Error('Failed to fetch project');
                    }

                    const data = await response.json();
                    setCake({

                        style: data.style,
                        cakeFlavour: data.cakeFlavour,
                        frostingFlavour: data.frostingFlavour,
                        size: data.size,
                        price: data.price
                    });

                } catch (error) {
                    console.error('Error fetching project', error);
                }
            }

            fetchCake();
        }
    }, [id, apiUrl]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCake(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token =  localStorage.getItem('token');

        if(!token){
            navigate('/login');
            return;
        }

        const method = id ? 'PUT' : 'POST';
        const url = id ? `${apiUrl}/cake/${id}` : `${apiUrl}/cake`;

        try {
            const response  = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(cake)
            });

            if(!response.ok){
                throw new Error('Failed to save project');
            }

            navigate('/cake');
        } catch (error) {
            console.error('Error saving project', error);
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
                        <h1 className="display-4 mb-4" style={{ color: '#d68a7d' }}>Create Your Cake</h1>
                    </div>
                </div>
            </div>

        <div className="container my-5">
            <div className="row justify-content-center">
            <div className="col-md-8">

            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="name">Style</label>
                    <input type="text"
                        id="style"
                        name="style"
                        value={cake.style} 
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="cakeFlavour">Batter Flavour</label>
                    <input type="text"
                        id="cakeFlavour"
                        name="cakeFlavour"
                        value={cake.cakeFlavour} 
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="frostingFlavour">Frosting Flavour</label>
                    <input type="text"
                        id="frostingFlavour"
                        name="frostingFlavour"
                        value={cake.frostingFlavour} 
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="size">Size</label>
                    <input type="text"
                        id="size"
                        name="size"
                        value={cake.size} 
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="price">Price</label>
                    <input type="text"
                        id="price"
                        name="price"
                        value={cake.price} 
                        className="form-control"
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="text-center">
                <button type="submit" className="btn" style={{ backgroundColor: '#d68a7d', color: '#fff' }}>
                    {id? 'Update': 'Create'}
                </button>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    )

};

export default CakeDetails;