import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
   <div className="p-4 h-screen flex items-center justify-center">
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      <Route path="/signup" element = {<SignUp />}></Route>
      <Route path="/login" element = {<Login />}></Route>
    </Routes>
   </div>
  )
}

export default App
