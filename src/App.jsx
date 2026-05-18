import {Link, Route, Routes} from "react-router-dom";
import TransactionForm from "./components/TransactionForm.jsx";
import {useEffect, useState} from "react";
import TransactionList from "./components/TransactionList.jsx";
import Login from "./components/Login.jsx";
function App() {

  const [transaction, setTransaction] = useState(() => {
    const saveData = localStorage.getItem("Transaction")
    return saveData ? JSON.parse(saveData) : [];

  })

  useEffect(() => {
    localStorage.setItem("Transaction", JSON.stringify(transaction))
  }, [transaction])

  return (
    <>

      <div className={"text-center bg-blue-600 font-extrabold space-x-3 text-white"}>
        <Link to="/"> GO TO ADD TRANSACTION</Link>
        <Link to="/list"> GO TO LIST PAGE</Link>
        <Link to="/login"> LOGIN</Link>
      </div>
      <Routes>
        <Route
          path={"/"}
          element={
            <TransactionForm
              transaction={transaction}
              setTransaction={setTransaction}/>}/>
        <Route
          path={"/list"}
          element={<TransactionList
            transaction={transaction}
            setTransaction={setTransaction}
          />}/>
        <Route path={"/login"} element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App
