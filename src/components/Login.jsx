import {useState} from "react";
import {supabase} from "../supabase.js";

export default function Login() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  async function checkValidation() {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: userName,
        password: password,
      });

      if (error){
      alert("invalid credentials" + error)}
      else {
        console.log(data)
        setIsLoggedIn(true)
      }
    }
    catch (err){
      console.error(err)
    }


    }


    return (
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div className="font-bold text-xl">Login Form</div>

              {/* Changed to a grid container with vertical spacing */}
              <div className="grid grid-cols-1 gap-4">
                {/* Row 1: Grid layout for User Name */}
                <div className="grid grid-cols-3 items-center">
                  <label htmlFor="userName" className="col-span-1">
                    User Name :
                  </label>
                  <input
                    className="col-span-2 border-2 border-gray-400 rounded-xl px-2 py-1"
                    id="userName"
                    type="email"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>

                {/* Row 2: Grid layout for Password */}
                <div className="grid grid-cols-3 items-center">
                  <label htmlFor="password" className="col-span-1">
                    Password :
                  </label>
                  <input
                    className="col-span-2 border-2 border-gray-400 rounded-xl px-2 py-1"
                    id="password"
                    value={password}
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <button
                    onClick={checkValidation}
                    className={
                      "bg-slate-800 rounded-md p-1 w-20 text-white hover:bg-slate-600"
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
              <div>
                {isLoggedIn && <p> hello {userName} 👋 </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
