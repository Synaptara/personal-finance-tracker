import {supabase} from "../supabase.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useContext} from "react";
import {AuthContext} from "./AuthContext.jsx";

export default function Login() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isRegister, setIsRegister] = useState(false)
  const [cPassword, setCPassword] = useState("")

  const { isLoggedIn, handleLogout , setIsLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate()




  async function checkValidation() {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: userName,
        password: password,
      });


      if (error) {
        alert("invalid credentials" + error)
      } else {
        console.log(data)
        setIsLoggedIn(true)
        navigate("/transaction")

      }


    } catch (err) {
      console.error(err)
    }
  }


  async function handleRegister() {

    try {
      if (!userName.length || !password.length || !cPassword.length) {
        alert("A valid user name and password needed")
      } else {
        const {data, error} = await supabase.auth.signUp({
          email: userName,
          password: password,
        });

        if (error) {
          alert("invalid credentials" + error)
        } else {
          console.log(data)
          setIsLoggedIn(true)
          navigate("/transaction")

        }
      }
    } catch (err) {
      console.error(err)
    }

  }

  function switchToRegister() {
    setIsRegister(true)
  }

  function switchToLogin() {
    setIsRegister(false)
  }


  return (
    <div>
      {isLoggedIn ? (
        <div className="text-center space-y-6 animate-fade-in">
          <div className="text-4xl">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray100">
            Logged in as: <span className="font-semibold text-slate-800">{userName}</span>
          </p>
          <div className="pt-4">
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-6 rounded-xl shadow-md transition-colors w-full"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              {isRegister ? (<div className="font-bold text-xl">Register Form</div>) : (
                <div className="font-bold text-xl">Login form </div>
              )}


              <div className="grid grid-cols-1 gap-4">
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
                <div>{isRegister ? (<div className="grid grid-cols-3 items-center">
                  <label htmlFor="password" className="col-span-1">
                    Confirm Password :
                  </label>
                  <input
                    className="col-span-2 border-2 border-gray-400 rounded-xl px-2 py-1"
                    id="cPassword"
                    value={cPassword}
                    type="password"
                    onChange={(e) => {
                      setCPassword(e.target.value);
                    }}
                  />
                </div>) : ("")}</div>
                <div>
                  <div> {!isRegister ? (
                    <button
                      onClick={checkValidation}
                      className={
                        "bg-slate-800 rounded-md p-1 w-20 text-white hover:bg-slate-600"
                      }
                    >
                      <div>Login</div>
                    </button>) : (
                    <button
                      onClick={() => {
                        if (password === cPassword) {
                          handleRegister()
                        } else {
                          alert("Password is not matched")
                        }
                      }}
                      className={
                        "bg-slate-800 rounded-md p-1 w-20 text-white hover:bg-slate-600"
                      }
                    >
                      <div>Register</div>
                    </button>
                  )}

                  </div>
                </div>
              </div>


              {isRegister ? (<button
                  className={
                    " rounded-md p-1 w-20 text-black cursor-pointer underline"
                  }
                  onClick={switchToLogin}>Login
                </button>
              ) : (<div>
                <button
                  className={
                    " rounded-md p-1 w-20 text-black cursor-pointer underline"
                  }
                  onClick={switchToRegister}>Register
                </button>
              </div>)
              }
              <div>
                {isLoggedIn && <p> hello {userName} 👋 </p>}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
