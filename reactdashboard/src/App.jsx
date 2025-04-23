import React from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Dashboard />
    </div>
  );
};

export default App;
