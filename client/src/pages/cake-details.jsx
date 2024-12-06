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
<<<<<<< HEAD
=======
                        style: data.style,
>>>>>>> upstream/main
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
        <div className="container mt-4">
            <h1 className="text-center">{id ? 'Update Cake' : ' Create Cake'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <button type="submit" className="btn btn-primary">
                    {id? 'Update': 'Create'}
                </button>
            </form>
        </div>
    )

};

export default CakeDetails;