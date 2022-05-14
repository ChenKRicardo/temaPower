import React from 'react';
import './App.css';
import { useAuth } from 'context/auth-context';
import { Auth } from 'auth-app';
import { Unauth } from 'unauth-app';
function App() {
  const {user} = useAuth()
  return (
    <div className="App">
     {user ? <Auth/> : <Unauth/>}
    </div>
  );
}

export default App;
