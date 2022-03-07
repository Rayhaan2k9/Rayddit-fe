import {Header} from "./components/Header"
import {Login} from "./components/Login"
import { Articles } from "./components/Articles";
import { Topics } from "./components/Topics";
import { Footer } from "./components/Footer";
import './App.css';
import { useState } from "react";
import{ UserContext } from "./contexts/User"
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"
import { SingleArticle } from "./components/singleArticle";
import { Error } from "./components/Error"

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const isLoggedIn = Object.keys(loggedInUser).length > 0;

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
        path="/articles"
        element={<Articles />} />
        <Route
        path="/topics"
        element={<Topics />} />
        <Route
        path="/login"
        element={<Login />} />
        <Route
        path='/topics/:topic_slug'
        element={<Articles />} />
        <Route
        path='/articles/:article_id'
        element={<SingleArticle />} />
        <Route
        path='*'
        element={<Error />} />
    </Routes>
    <Footer />
    </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
