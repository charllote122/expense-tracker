import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'mockToken123');
        window.location.href = '/dashboard';
    };

    return (
        <AuthLayout>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-semibold text-center mb-4">Welcome Back!</h3>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Don't have an account?{' '}
                    <a href="/Signup" className="text-blue-600 hover:underline">Sign up</a>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;
