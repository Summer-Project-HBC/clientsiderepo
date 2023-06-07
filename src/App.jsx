import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import AddEvent from "./pages/AddEvent";
import BrowseEvents from "./pages/BrowseEvents";
import EventPage from "./pages/EventPage";
import FrequentQuestions from "./pages/FrequentQuestions";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";

function App() {
  const [loginData, setLoginData] = useState({
    logged: localStorage.getItem('loginStatus'),
    username: localStorage.getItem('username')
  })
  const [user, setUser] = useState()
  const [message, setMessage] = useState()
  const [visibility, setVisibility] = useState(true)

  const visibilityHandler = () => {
    setVisibility(!visibility)
    setMessage()
  }

  const onInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
  })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8004/login', user)
      localStorage.setItem('loginStatus', true)
      localStorage.setItem('username', response.data)
      setLoginData({
        logged: localStorage.getItem('loginStatus'),
        username: localStorage.getItem('username')
      })
      setMessage('Logged In')

    } catch (error) {
      setMessage(error.response.data.message)
    }
  }

  const handleLogout = (e) => {
    e.preventDefault()
    setLoginData({
      logged: false,
      username: null
    })
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('username')
    setMessage('logged Out');
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:8004/newuser', user)
      setMessage(response.data.message)
    } catch (error) {
      setMessage(error.response.data.message)
    }
  }
  
  

  return (
    <div>
      <BrowserRouter>
        <Navbar loginData={loginData} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/browse" element={<BrowseEvents />} />
          <Route path="/questions" element={<FrequentQuestions />} />
          <Route path="/https://www.bc.fi/" />
          <Route path="/https://www.bc.fi/" />
          <Route path="/browse/:individualevent" element={<EventPage  loginData={loginData}/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} handleSignup={handleSignup} onInput={onInput} message={message} visibility={visibility} visibilityHandler={visibilityHandler}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;