import {Header} from "./components/Header"
import {Login} from "./components/Login"
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import './App.css';
import { useState } from "react";
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

  return (
  <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Login />} />
        <Route
        path="/articles"
        element={<Articles />} />
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
