import React, { useState, useEffect } from 'react';

const Income = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [incomeList, setIncomeList] = useState([]);

  useEffect(() => {
    const storedIncome = JSON.parse(localStorage.getItem('income')) || [];
    setIncomeList(storedIncome);
  }, []);

  const updateIncomeStorage = (updatedIncome) => {
    localStorage.setItem('income', JSON.stringify(updatedIncome));
    window.dispatchEvent(new Event('storage'));
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (!source || !amount) return;

    const newIncome = {
      id: Date.now(),
      title: source,
      amount: parseFloat(amount),
      category: source,
      type: 'income',
      date: new Date().toISOString(),
    };

    const updatedIncome = [...incomeList, newIncome];
    setIncomeList(updatedIncome);
    updateIncomeStorage(updatedIncome);

    setSource('');
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Add Income</h2>

      <form onSubmit={handleAddIncome} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block mb-1 font-semibold">Source</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g., Freelance, Salary"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Amount (Ksh)</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 1000"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Add Income
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Income History</h3>
        <ul className="bg-white rounded-xl shadow divide-y">
          {incomeList.map((income) => (
            <li key={income.id} className="p-4 flex justify-between">
              <span>{income.title}</span>
              <span className="text-green-600 font-medium">+ Ksh {income.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Income;
