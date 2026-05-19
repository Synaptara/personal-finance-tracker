import {Link, Route, Routes, useNavigate} from "react-router-dom";
import TransactionForm from "./components/TransactionForm.jsx";
import {useContext, useEffect, useState} from "react";
import TransactionList from "./components/TransactionList.jsx";
import Login from "./components/Login.jsx";
import {AuthContext} from "./components/AuthContext.jsx";


function App() {

  const { isLoggedIn , handleLogout } = useContext(AuthContext);

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
        <Link to="/transaction"> GO TO ADD TRANSACTION</Link>
        <Link to="/list"> GO TO LIST PAGE</Link>
        <Link to="/login"> {isLoggedIn ? (<button onClick={handleLogout}>LOGOUT</button>):(<span>LOGIN</span>)}</Link>

      </div>
      <Routes>
        <Route
          path={"/transaction"}
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
