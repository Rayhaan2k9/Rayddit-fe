import {Header} from "./components/Header"
import {Login} from "./components/Login"
import { Articles } from "./components/Articles";
import { Topics } from "./components/Topics";
import { Footer } from "./components/Footer";
import './App.css';
import { useState } from "react";
import{ UserContext } from "./contexts/User"
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom"

function App() {
  const [username, setUsername] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [chosenTopic, setChosenTopic] = useState('')

  const isLoggedIn = Object.keys(loggedInUser).length > 1;

  return (
  <BrowserRouter>
  <UserContext.Provider value={{loggedInUser, setLoggedInUser, isLoggedIn}}>

    <div className="App">
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Articles />} />
        <Route
        path="/topics"
        element={<Topics />} />
        <Route
        path="/login"
        element={<Login />} />
    </Routes>
    <Footer />
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
