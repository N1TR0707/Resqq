import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser, resetStatus } from '../store/authSlice';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status, error, token } = useSelector((state) => state.auth);
    const loading = status === 'loading';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser(formData));
        if (result.payload && result.payload.token) {
            navigate('/dashboard'); // Navigasi ke /dashboard setelah login berhasil
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-full max-w-sm p-8 bg-blue-800 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-blue-200">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-blue-700 border border-blue-600 text-white rounded-md focus:ring-white focus:border-white"
                        />
                    </div>
    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-blue-200">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full p-3 bg-blue-700 border border-blue-600 text-white rounded-md focus:ring-white focus:border-white"
                        />
                    </div>
    
                    <button
                        type="submit"
                        className={`w-full py-3 px-4 text-white font-semibold rounded-md ${
                            loading ? 'bg-blue-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm text-blue-200">Don't have an account?</span>
                    <Link to="/register" className="text-sm font-medium text-white hover:text-blue-300 ml-1">
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    );    
};

export default Login;
