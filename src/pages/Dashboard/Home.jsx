import React, { useEffect, useState } from 'react';
import './chartConfig';
import { FaSignOutAlt } from 'react-icons/fa';
import { BsArrowUpRightCircleFill, BsArrowDownRightCircleFill } from 'react-icons/bs';
import { Bar, Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [income, setIncome] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [updateTrigger, setUpdateTrigger] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            const storedIncome = JSON.parse(localStorage.getItem('income')) || [];
            const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
            setIncome(storedIncome);
            setExpenses(storedExpenses);
        };

        fetchData();
        window.addEventListener('storage', fetchData);

        return () => window.removeEventListener('storage', fetchData);
    }, [updateTrigger]);

    const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
    const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);
    const totalBalance = totalIncome - totalExpense;

    const expenseCategories = {};
    expenses.forEach((e) => {
        if (!expenseCategories[e.category]) {
            expenseCategories[e.category] = 0;
        }
        expenseCategories[e.category] += e.amount;
    });

    const pieData = {
        labels: Object.keys(expenseCategories),
        datasets: [
            {
                data: Object.values(expenseCategories),
                backgroundColor: ['#6366f1', '#facc15', '#fb7185', '#60a5fa', '#34d399'],
            },
        ],
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/Login');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-white shadow-md p-4 space-y-4">
                <h2 className="text-xl font-bold text-purple-600">Expense Tracker</h2>
                <nav className="flex flex-col gap-2 text-gray-700">
                    <a href="/dashboard" className="hover:text-purple-600">Dashboard</a>
                    <a href="/Income" className="hover:text-purple-600">Income</a>
                    <a href="/Expense" className="hover:text-purple-600">Expenses</a>
                    <button onClick={handleLogout} className="flex items-center gap-2 mt-4 text-red-500 hover:text-red-700">
                        <FaSignOutAlt /> Logout
                    </button>
                </nav>
            </aside>

            <main className="flex-1 p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard label="Total Balance" value={`Ksh ${totalBalance.toFixed(2)}`} color="bg-yellow-300" />
                    <SummaryCard label="Total Income" value={`Ksh ${totalIncome.toFixed(2)}`} color="bg-green-300" icon={<BsArrowUpRightCircleFill />} />
                    <SummaryCard label="Total Expense" value={`Ksh ${totalExpense.toFixed(2)}`} color="bg-red-300" icon={<BsArrowDownRightCircleFill />} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow p-4">
                        <h3 className="font-semibold mb-4">Income vs Expenses</h3>
                        <Bar
                            data={{
                                labels: ['Income', 'Expenses'],
                                datasets: [{
                                    label: 'Amount',
                                    data: [totalIncome, totalExpense],
                                    backgroundColor: ['#4ade80', '#f87171'],
                                }]
                            }}
                        />
                    </div>

                    <div className="bg-white rounded-xl shadow p-4">
                        <h3 className="font-semibold mb-4">Expense Distribution</h3>
                        <Pie data={pieData} />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="font-semibold mb-4">Recent Transactions</h3>
                    <ul className="divide-y">
                        {[...income.slice(-2), ...expenses.slice(-2)]
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((tx) => (
                                <li key={tx.id} className="py-2 flex justify-between">
                                    <span>{tx.title}</span>
                                    <span className={tx.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                                        {tx.type === 'income' ? '+' : '-'} Ksh {tx.amount}
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Home;

const SummaryCard = ({ label, value, color, icon }) => (
    <div className={`p-4 rounded-xl shadow ${color} text-gray-900`}>
        <div className="flex justify-between items-center">
            <div>
                <h4 className="text-sm font-semibold">{label}</h4>
                <p className="text-xl font-bold">{value}</p>
            </div>
            {icon && <div className="text-2xl">{icon}</div>}
        </div>
    </div>
);
