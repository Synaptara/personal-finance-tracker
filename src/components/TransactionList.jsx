export default function TransactionList({ transaction, setTransaction }) {


  const incomeList = transaction.filter(t => t.type === "Income")
  const totalIncome = incomeList.reduce((total , item) => total + item.amount , 0)
  const expenseList = transaction.filter(t => t.type === "Expense")
  const totalExpense = expenseList.reduce((total , item) => total + item.amount , 0)

    return <div>

      <div className={"flex justify-center mt-3"}>
        <div className={"flex-row justify-center bg-green-400 p-3 rounded-xl"}>
          <h1 className={"text-md font-bold text-center"}>Total Income</h1>
          <h1 className={"text-3xl font-bold text-center"}>Rs:{totalIncome}</h1>
        </div>
      </div>
      <div className={"flex justify-center mt-3"}>
        <div className={"flex-row justify-center bg-red-400 p-3 rounded-xl"}>
          <h1 className={"text-md font-bold text-center"}>Total Expense</h1>
          <h1 className={"text-3xl font-bold text-center"}>Rs:{totalExpense}</h1>
        </div>
      </div>
      <div className={"flex justify-center mt-3"}>
        <div className={"flex-row justify-center bg-blue-400 p-3 rounded-xl"}>
          <h1 className={"text-md font-bold text-center"}>Balance</h1>
          <h1 className={"text-3xl font-bold text-center"}>Rs:{totalIncome - totalExpense}</h1>
        </div>
      </div>

      {/*History Section*/}
      <div className={"mt-10"}>
        <h1 className={"text-xl font-bold text-center"}>Transactions</h1>
        {transaction.length === 0 ? (
          <p className={"text-center mt-5"}> No Transactions</p>
        ) : (
          transaction.map((t, index) => (
            <div className={"text-center mt-3"} key={index}>
              <p>Amount : {t.amount}</p>
              <p>Category : {t.category}</p>
              <p>Type : {t.type}</p>
              <button
                className={"bg-red-600 hover:bg-red-400 p-1 px-4 mt-3 rounded-md text-white"}
                onClick={() => setTransaction(prev => prev.filter((_, i) => i !== index))}
              >
                Delete
              </button>
            </div>))
        )}

      </div>
    </div>
}
