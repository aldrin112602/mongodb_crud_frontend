import Navbar from "./components/navbar"
import Login from "./components/login"
// import Dashboard from "./components/dashboard";
import Home from "./components/home";
import Contact from "./components/contact";
import Nopage from "./components/nopage";
import Signup from "./components/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

const isAuthenticated = !!sessionStorage.getItem('userData');

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar isAuthenticated={isAuthenticated}/>}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
