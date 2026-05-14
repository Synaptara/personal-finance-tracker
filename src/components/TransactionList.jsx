import {useState} from "react";

export default function TransactionList({transaction, setTransaction}) {


  const [filter , setFilter] = useState("All")

  const incomeList = transaction.filter(t => t.type === "Income")
  const totalIncome = incomeList.reduce((total, item) => total + item.amount, 0)
  const expenseList = transaction.filter(t => t.type === "Expense")
  const totalExpense = expenseList.reduce((total, item) => total + item.amount, 0)

  const filteredList = transaction.filter((t) => {
    if (filter === "All"){
      return true;
    }
    else{
      return t.type === filter;
    }
  })

  return (
    <div className="pb-20">
      {/* 1. Dashboard Section (Side-by-Side Cards) */}
      <div className="flex justify-center gap-6 mt-8">
        <div className="bg-green-100 p-4 rounded-xl border-2 border-green-300 w-40">
          <h1 className="text-sm font-bold text-center text-green-700 uppercase">Income</h1>
          <h1 className="text-2xl font-bold text-center text-green-900">Rs: {totalIncome}</h1>
        </div>
        <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300 w-40">
          <h1 className="text-sm font-bold text-center text-red-700 uppercase">Expense</h1>
          <h1 className="text-2xl font-bold text-center text-red-900">Rs: {totalExpense}</h1>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl border-2 border-blue-300 w-40">
          <h1 className="text-sm font-bold text-center text-blue-700 uppercase">Balance</h1>
          <h1 className="text-2xl font-bold text-center text-blue-900">Rs: {totalIncome - totalExpense}</h1>
        </div>
      </div>

      {/* 2. Filter Buttons Section */}
      <div className="flex justify-center space-x-4 mt-12 mb-6">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-md font-bold cursor-pointer transition ${filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Income")}
          className={`px-4 py-2 rounded-md font-bold cursor-pointer transition ${filter === "Income" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Income
        </button>
        <button
          onClick={() => setFilter("Expense")}
          className={`px-4 py-2 rounded-md font-bold cursor-pointer transition ${filter === "Expense" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Expense
        </button>
      </div>

      {/* 3. The SINGLE List Section (Using filteredList) */}
      <div className="mt-5 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4 border-b-2 pb-2">Transactions</h1>

        {/* Check if the FILTERED list is empty */}
        {filteredList.length === 0 ? (
          <p className="text-center mt-5 text-gray-500 italic">No Transactions Found</p>
        ) : (
          /* Map over the FILTERED list */
          filteredList.map((t, index) => (
            <div className="text-center mt-3 border p-4 rounded-lg bg-gray-50 shadow-sm" key={index}>
              <p className="font-bold text-lg">Amount : Rs {t.amount}</p>
              <p className="text-gray-600">Category : {t.category}</p>
              <p className={`font-semibold ${t.type === "Income" ? "text-green-600" : "text-red-600"}`}>
                Type : {t.type}
              </p>
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-1 mt-3 rounded-md text-white cursor-pointer transition"
                onClick={() => setTransaction(prev => prev.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
