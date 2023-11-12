import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login'
import { AddTicket } from './pages/newTicket/AddTicket';
import { TicketLists } from './pages/ticketLists/TicketLists';
import { Ticket } from './pages/ticket/Ticket';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path='/newTicket' element={<PrivateRoute><AddTicket/></PrivateRoute>} />
          <Route path='/ticketLists' element={<PrivateRoute><TicketLists/></PrivateRoute>} />
          <Route path='/ticket/:tId' element={<PrivateRoute><Ticket/></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
