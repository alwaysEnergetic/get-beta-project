import React, { useState, useEffect } from "react"
import './App.css';
import  Navbar  from "./components/layout/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Axios from "axios"
import Home from "./pages/Home"
import Reports from "./pages/Reports"
import ProfilePage from "./components/profile/ProfilePage"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import UserContext from "./components/context/UserContext"

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("auth-token");
      const tokenRes = await Axios.post(
        "http://localhost:50/users/tokenIsValid", null,
        {
          headers: { "x-auth-token": token }
        }
      );
      console.log(tokenRes.data)
    }
    checkLoggedIn();
  }, [])

  return (
    <>
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/reports" component={Reports} />  
        </Switch>
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
