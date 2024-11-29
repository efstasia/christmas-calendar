/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { Calendar } from 'pages/Calendar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Rhymes } from 'pages/Rhymes';
import { Navbar } from 'components/Navbar';
import { Score } from 'pages/Score';
import bgImage from './images/christmas-bcg1.png'
import { TeamPicker } from 'pages/TeamPicker';
import { Footer } from 'components/Footer';


export const App = () => {
	const [showEasterEgg, setShowEasterEgg] = useState(false) 

	const handleClick = (e) => {
    e.preventDefault();
    const newState = !showEasterEgg;
    setShowEasterEgg(newState);
    localStorage.setItem('showEasterEgg', JSON.stringify(newState));
	};

  useEffect(() => {
    setShowEasterEgg(false);
  },[])

	return (
		<BrowserRouter>
		<main style={{backgroundImage: `url(${bgImage})`}}>
		< Navbar />
	
		<Routes>
			< Route exact path='/' element={<Home onHandleClick={handleClick} showEasterEgg={showEasterEgg} setShowEasterEgg={setShowEasterEgg}/>}/>
			< Route exact path='/calendar' Component={Calendar} />
			< Route exact path='/rhymes'  element={<Rhymes onHandleClick={handleClick} showEasterEgg={showEasterEgg} setShowEasterEgg={setShowEasterEgg}/>} 
/>
			< Route exact path='/score' element={<Score onHandleClick={handleClick} showEasterEgg={showEasterEgg}  setShowEasterEgg={setShowEasterEgg}/>} />
			< Route exact path='/team' Component={TeamPicker} />
		</Routes>
		</main>
    < Footer />
		</BrowserRouter>
	)
}
