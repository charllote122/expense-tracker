import React, { useEffect, useState } from 'react';
import { LuTrash2 } from 'react-icons/lu';

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const updateExpenseStorage = (updatedExpenses) => {
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    window.dispatchEvent(new Event('storage'));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category: title,
      type: 'expense',
      date: new Date().toISOString(),
    };

    const updated = [...expenses, newExpense];
    setExpenses(updated);
    updateExpenseStorage(updated);
    setTitle('');
    setAmount('');
  };

  const handleDelete = (id) => {
    const updated = expenses.filter((expense) => expense.id !== id);
    setExpenses(updated);
    updateExpenseStorage(updated);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Expense Tracker</h2>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700">
          Total Expenses: <span className="text-red-600">Ksh {total.toFixed(2)}</span>
        </h3>
      </div>

      <form
        onSubmit={handleAddExpense}
        className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold mb-4 text-gray-700">Expense List</h4>
        <ul className="space-y-3">
          {expenses.length === 0 && <p className="text-gray-500">No expenses yet.</p>}
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center border-b pb-2 text-gray-600"
            >
              <span>{expense.title}</span>
              <div className="flex items-center gap-4">
                <span>Ksh {expense.amount.toFixed(2)}</span>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <LuTrash2 />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expense;
