

import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        
        localStorage.setItem('token', 'mockToken123');

        
        window.location.href = '/dashboard';
    };

    return (
        <AuthLayout>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-semibold text-center mb-4">Create an Account</h3>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Already have an account?{' '}
                    <a href="/Login" className="text-green-600 hover:underline">Login</a>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Signup;
