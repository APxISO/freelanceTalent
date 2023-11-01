
import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { AddTicket } from './pages/newTicket/AddTicket';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <DefaultLayout>
        <Dashboard/>
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
