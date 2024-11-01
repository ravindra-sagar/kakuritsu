/*import logo from './logo.svg';
import './App.css';*/

import React from 'react';
import MarketList from './MarketList';
import './App.css';

const App = () => {
    const handleLogin = () => {
        // Logic for handling login
        alert('Login button clicked');
    };

    const handleSignup = () => {
        // Logic for handling signup
        alert('Signup button clicked');
    };

    return (
        <div>
            <h1>Kakuritsu: Prediction Market</h1>
            <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleSignup}>Sign Up</button>
            </div>
            <MarketList />
        </div>
    );
};

export default App;
