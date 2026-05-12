import {Route, Routes} from "react-router-dom";
import TransactionForm from "./components/TransactionForm.jsx";
import {useState} from "react";
import TransactionList from "./components/TransactionList.jsx";

function App() {


  return (
    <>
        <Routes>
            <Route path={"/"} element={<TransactionForm/>}/>
            <Route path={"/list"} element={<TransactionList/>}/>
        </Routes>
    </>
  )
}

export default App
