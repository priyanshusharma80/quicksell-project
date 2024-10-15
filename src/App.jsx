import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/Navbar/Navbar';
import { PRIORITY_LIST, USER_LIST, STATUS_LIST } from './utils/data/datafile';

export default function App() {
  
  // retrieving data if there is -------------------
  const getStateFromLocalStorage = () => {
    const storedState = localStorage.getItem('group');
    return storedState ? JSON.parse(storedState) : null;
  }

  // State variables ---------------
  const [group, setGroup] = useState(getStateFromLocalStorage() || 'status');
  const [order, setOrder] = useState('title');
  const [tickets, setTickets] = useState([]);

  // Saving values of selected groupto localStorage ---------
  const saveStateToLocalStorage = (state) => {
    localStorage.setItem('group', JSON.stringify(state));
  }


  // Ordering Data based on value ----------------
  const handleOrderData = useCallback((cardsArray) => {
    const cards = [...cardsArray];
    if (order === 'title') cards.sort((a, b) => a.title.localeCompare(b.title));
    else if (order === 'priority') cards.sort((a, b) => b.priority - a.priority);
    setTickets(cards);
  }, [order]);

  // Fetching ticket data ---------------
  useEffect(() => {

    saveStateToLocalStorage(group);
    
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');

        const data = response.data;
        const status = response.status;
        
        // console.log(data);

        if (status === 200) {
          const customData = data.tickets.map(ticket => ({
            ...ticket,
            userObj: data.users.find(user => user.id === ticket.userId)
          }));
          setTickets(customData);
          handleOrderData(customData);
        }
      } catch (error) {
        console.error('An Error Occured while Fetching Data:', error);
      }
    }

    fetchData();
  }, [group, handleOrderData]);

  // unility Handlers for group and order value changes
  
  const handleOrder = (value) => setOrder(value);
  const handleGroup = (value) => setGroup(value);

  // Render the board based on group - status, user, priority
  const boardRendering = () => {
    
    switch (group) {

      case 'status':
        return STATUS_LIST.map(listItem => (
          <Cards
            key={listItem}
            group='status'
            tickets={tickets}
            order={order}
            listTitle={listItem}
          />
        ));

      case 'user':
        return USER_LIST.map(listItem => (
          <Cards
            key={listItem}
            group='user'
            tickets={tickets}
            order={order}
            listTitle={listItem}
          />
        ));

      case 'priority':
        return PRIORITY_LIST.map(listItem => (
          <Cards
            key={listItem.priority}
            group='priority'
            tickets={tickets}
            order={order}
            listTitle={listItem.priority}
            priorityList={PRIORITY_LIST}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar
        group={group}
        order={order}
        handleGroup={handleGroup}
        handleOrder={handleOrder}
      />


      <div className="container">
        <div className="cards">
          {boardRendering()}
        </div>
      </div>
    </>
  );
}

