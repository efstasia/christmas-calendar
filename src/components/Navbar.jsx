/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

	return (
		<div className='navbar'>
			<nav>
				<ul className='navbar__list'>
					<li><Link to="/">QTCC</Link></li>
					<li><Link to="/calendar">Julkalender</Link></li>
					<li><Link to="/rhymes">Rim</Link></li>
					<li><Link to="/score">Poängställning</Link></li>
					<li><Link to="/team">Team</Link></li>
					<li><Link to="/bonus-points">Bonuspoäng</Link></li>
				</ul>
			</nav>
		</div>
	)
}