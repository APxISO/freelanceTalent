
import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { AddTicket } from './pages/newTicket/AddTicket';
import { TicketLists } from './pages/ticketLists/TicketLists';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket/> */}
        <TicketLists/>
      </DefaultLayout>
    </div>
  );
}

export default App;
