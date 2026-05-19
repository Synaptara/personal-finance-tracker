import {supabase} from "../supabase.js";
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null)

export default function AuthProvider({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const fetchSection = async () => {
      const {data: {session}} = await supabase.auth.getSession()
      if (session) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    };
    fetchSection();
  }, [])

  async function handleLogout() {
    try {

      const {error} = await supabase.auth.signOut()
      if (error) {
        alert("Error Signing out" + error.message)
      } else {
        setIsLoggedIn(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return(
    <AuthContext.Provider value={{ isLoggedIn, handleLogout , setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}
