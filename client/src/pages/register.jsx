import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const apiURL = '/api';

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission
        try {
            const response = await fetch(`${apiURL}/usersCake/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if(!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(form.username));

            navigate('/');

        } catch (error) {
           setError(error.message); 
        }
    }

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
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
                        <h1 className="display-4 mb-4" style={{ color: '#d68a7d' }}>Register</h1>
                    </div>
                </div>
            </div>
            
            <div className="container my-5">
            <div className="row justify-content-center">
            <div className="col-md-8">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        name="username" 
                        value={form.username}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={form.password}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="text-center">
            <button type="submit" class="btn" style={{ backgroundColor: '#d68a7d', color: '#fff' }} value="Send">Register</button>
          </div>
            </form>
        </div>
        </div>
        </div>
        </div>
    )

};

export default Register;