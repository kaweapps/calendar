import React from 'react';
import 'tachyons'

const CalendarButton = ({number, day, currentDay, handleClose, month, year}) => {
	const date = new Date();
	const isToday = (currentDay === number && month === date.getMonth() && year === date.getFullYear())
	let btBackground = isToday ? 'bg-green' : 'tc bg-light-green';
	return ( 
			<div className={`tc ${btBackground} dib br3 pa3 grow bw2 shadow-5 courier fl w-10 dim`} onClick={handleClose}>
				 <p>{ day.substring(0, 3) }</p>
				 <p>
					{
						number
					}
				 </p>	
			</div>
		);
}

export default CalendarButton;