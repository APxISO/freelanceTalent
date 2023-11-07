
import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { AddTicket } from './pages/newTicket/AddTicket';
import { TicketLists } from './pages/ticketLists/TicketLists';
import { Ticket } from './pages/ticket/Ticket';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <AddTicket/> */}
        {/* <TicketLists/> */}
        <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
