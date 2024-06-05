import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useAuthContext } from "./context/AuthContext"

function App() {

  const { authUser, isLoading } = useAuthContext();
  console.log("authUser", authUser);

  if(isLoading) return null;

  return (
   <div className="p-4 h-screen flex items-center justify-center">
    <Routes>
      <Route path="/" element = {authUser ? <Home /> : <Navigate to={"/login"} />}></Route>
      <Route path="/signup" element = {!authUser ? <SignUp /> : <Navigate to={"/"} />}></Route>
      <Route path="/login" element = {!authUser ? <Login /> : <Navigate to={"/"} />}></Route>
    </Routes>
   </div>
  )
}

export default App
