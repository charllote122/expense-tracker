// src/components/layouts/AuthLayout.jsx

import React from 'react';
import card1 from '../../assets/images/card1.png';
import { LuTrendingDown } from 'react-icons/lu';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

            {/* Left Side: Illustration & Message */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white p-10 relative">
                {/* Decorative circles */}
                <div className="absolute top-5 left-5 w-32 h-32 bg-purple-700 rounded-3xl opacity-40"></div>
                <div className="absolute bottom-10 left-10 w-36 h-36 bg-pink-600 rounded-3xl opacity-40"></div>

                {/* Main Content */}
                <div className="relative z-10 m-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Smart Expense Tracker</h2>
                    <p className="text-lg mb-6">Manage your income and expenses effortlessly.</p>

                    <StatsCard
                        icon={<LuTrendingDown size={26} />}
                        label="This month's savings"
                        value="Ksh 430,000"
                    />

                    <img
                        src={card1}
                        alt="Expense Card"
                        className="mt-10 mx-auto w-64 rounded-lg shadow-lg shadow-white/30"
                    />
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Expense Tracker</h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;

// =============== StatsCard Component ===============
const StatsCard = ({ icon, label, value }) => {
    return (
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 text-white shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-white/30 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium">{label}</p>
                <h4 className="text-xl font-semibold">{value}</h4>
            </div>
        </div>
    );
};
