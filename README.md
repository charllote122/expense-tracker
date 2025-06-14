 Expense Tracker

A simple yet powerful React-based Expense Tracker application to manage your income and expenses efficiently. Built with **React**, **Vite**, **TailwindCSS**, and **Chart.js**.

 Live Demo

 [View Live App](https://charllote122.github.io/expense-tracker)



 Tech Stack

-  React
-  Vite
-  TailwindCSS
-  Chart.js
-  localStorage (data persistence)
-  GitHub Pages (deployment)



 Features

-  User authentication simulation
-  Add and manage **income** and **expenses**
-  View **total balance**, **total income**, and **total expenses**
- Pie chart for expense categories
-  Bar chart comparing income vs expenses
- LocalStorage for data persistence
- Responsive and modern UI with TailwindCSS



Project Structure
expense-tracker/
├── public/
├── src/
│ ├── pages/
│ │ ├── Auth/ # Login & Signup
│ │ ├── Dashboard/
│ │ │ ├── Home.jsx
│ │ │ ├── Income.jsx
│ │ │ ├── Expense.jsx
│ │ │ └── chartConfig.js # Chart.js configuration
│ ├── App.jsx
│ ├── main.jsx
├── vite.config.js
├── README.md
└── package.json

Installation & Running Locally

bash

Clone the repo
git clone https://github.com/charllote122/expense-tracker.git
cd expense-tracker

Install dependencies
npm install

Start the development server
npm run dev

Deployment
 Build the app
npm run build

 Deploy to GitHub Pages
npm run deploy


