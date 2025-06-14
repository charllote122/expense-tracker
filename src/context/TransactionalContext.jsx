import React, { createContext, useContext, useState } from 'react';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const addIncome = (income) => {
        setIncomes(prev => [...prev, income]);
    };

    const addExpense = (expense) => {
        setExpenses(prev => [...prev, expense]);
    };

    return (
        <TransactionContext.Provider value={{
            incomes,
            expenses,
            addIncome,
            addExpense,
        }}>
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransactions = () => useContext(TransactionContext);
