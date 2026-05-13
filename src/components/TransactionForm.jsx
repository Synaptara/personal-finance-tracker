// Transaction Form
// Getting Inputs For These Details
// Amount ,
// Category(Food , Travel , Salary , Shopping , Transport , Rent , Gaming , Bills)
// Type (Income , Expense)

import {useState} from "react";

export default function TransactionForm({  setTransaction }) {

  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("Food")
  const [type, setType] = useState("Income")
  const [error, setError] = useState(true)


  function saveTransaction() {

    if (!amount || amount <= 0) {
      setError(true)
      return
    }

    const newTransaction = {
      amount: Number(amount),
      category,
      type
    }

    setTransaction(prev => [...prev, newTransaction])

    setAmount("");
    setError(false)
  }

  return (
    <div>
      {/*Header*/}
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">
          Personal Finance Tracker
        </h1>
      </div>
      <div className={"text-center text-xl"}>
        Here You can track your Transactions list
      </div>
      {/*Form*/}
      <div className={"mt-10 flex justify-center items-center gap-3"}>
        <label
          htmlFor="amount"
          className={"block mb-2 text-xl font-medium text-gray-700"}>Amount :</label>
        <div className={"flex flex-col"}>
          <input
            value={amount}
            id={"amount"}
            type="number"
            placeholder={"Amount"}
            className={"border-2 p-1 rounded-lg w-40"}
            onChange={(e) => {
              setAmount(e.target.value);
              if (error) setError(false);
            }}/>

          {error && (
            <span className="text-red-500 font-bold">
              Enter a valid Number
            </span>
          )}
        </div>
      </div>

      {/*Selectors Group*/}
      <div className={"mt-5 flex justify-center items-center gap-3"}>
        <label htmlFor="category"
               className={"block mb-2 text-xl font-medium text-gray-700"}>Category :</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id={"category"}
          type="text"
          placeholder={"Category"}
          className={"border-2 p-1 rounded-lg w-40"}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Salary</option>
          <option>Shopping</option>
          <option>Transport</option>
          <option>Rent</option>
          <option>Gaming</option>
          <option>Bills</option>
        </select>
      </div>

      <div className={"mt-5 flex justify-center items-center gap-3"}>
        <label htmlFor="type"
               className={"block mb-2 text-xl font-medium text-gray-700"}>Type :</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id={"type"}
          type="text"
          placeholder={"Category"}
          className={"border-2 p-1 rounded-lg w-40"}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <div className={" mt-10 flex justify-center"}>
        <button
          className={"border-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-40"}
          onClick={saveTransaction}>Add Transaction
        </button>
      </div>
    </div>
  )
}
