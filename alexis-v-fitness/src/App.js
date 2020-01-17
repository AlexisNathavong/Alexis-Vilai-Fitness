import React from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AppRouter/>
      <WelcomePage/>
    </div>
  );
}

export default App;
