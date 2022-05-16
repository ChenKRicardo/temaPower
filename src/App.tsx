import React from 'react';
import './App.css';
import { useAuth } from 'context/auth-context';
import { Auth } from 'auth-app';
import { Unauth } from 'unauth-app';
import { ErrorBoundary } from 'commponents/error-boundary';
import { FullPageErrorFallback } from 'commponents/lib';
function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
          {user ? <Auth/> : <Unauth/>}
      </ErrorBoundary>
    </div>
  );
}

export default App;
