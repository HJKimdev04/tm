import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Header onLogout={handleLogout} />
        {isLoggedIn ? <Main /> : <Login onLogin={handleLogin} />}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
