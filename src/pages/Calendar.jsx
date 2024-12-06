/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Sparkles from 'react-sparkle';
import backgroundImage from '../images/card-background.png'

export const Calendar = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [apiData, setApiData] = useState({});
  const [statusData, setStatusData] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL || 'https://jonathan.inte.fuska.qtkul.lol/api/v1'


  const adventCalendarData = [
    { id: 1, christmas: false, title: '1' },
    { id: 5, christmas: false, title: '5' },
    { id: 8, christmas: false, title: '8' },
    { id: 7, christmas: false, title: '7' },
    { id: 6, christmas: false, title: '6' },
    { id: 4, christmas: false, title: '4' },
    { id: 9, christmas: true, title: '9' },
    { id: 3, christmas: false, title: '3' },
    { id: 2, christmas: false, title: '2' },
  ];

const handleCardClick = (id) => {
  const cardStatus = statusData.find((item) => item.id === id)?.status;

  fetchDoorData(id)
  fetchDoorStatus(id)

  if (cardStatus !== 'open') {
    console.log(`Card ${id} is closed and cannot be flipped.`);
    return;
  } 
  
	setFlippedCards((prev) => ({
		...prev,
		[id]: true, // Flip the current card.
	}));

};

const fetchDoorData = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/doors/${id}`);

      const result = await response.json();
      
      // Updates the state to store the data for the specific card id.
      setApiData((prevData) => ({
        ...prevData,
        [id]: result.data, // Stores data for the specific card.
      }));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

const fetchDoorStatus = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/doors`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      
      // Updates the state to store the data for the specific card id.
      setStatusData(result.data);

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


  useEffect(() => {
    adventCalendarData.map(door => fetchDoorData(door.id))
    fetchDoorStatus()
  }, [])

  return (
    <div className='calendar'>
      <Sparkles flicker={false} minSize={12} count={100} />
      <div className='calendar-grid pink-background'>
        {adventCalendarData.map(event => (
          <div
            key={event.id}
            onClick={() => handleCardClick(event.id)}
            className={`calendar__item ${event.christmas ? 'christmas' : ''} ${flippedCards[event.id] ? 'flipped' : ''}`}
          >
            <div className='calendar__item--front'>
              <p className='calendar__item--front-title'>{event.title}</p>
            </div>
            <div className='calendar__item--back' style={{backgroundImage: `url(${backgroundImage})`}}>
              <div className='calendar__item__back-content'>
                {apiData[event.id]?.content?.tomorrow && (
                  <p>Idag: {apiData[event.id] ? apiData[event.id].content.tomorrow : ''}</p>
                )} 
                <p>Bonus: {apiData[event.id] ? apiData[event.id].content.now : ''}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
