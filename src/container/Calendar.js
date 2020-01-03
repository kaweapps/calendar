import React, { Component } from 'react';
import CalendarButton from '../components/CalendarButton';
import Header from '../components/Header';
import 'tachyons';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days : [],
			month : '',
			year : '',
			currentDay : '',
			daysOfWeek : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			monthNames : ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
			date : new Date()
		}
		this.goBack = this.goBack.bind(this);
		this.goForward = this.goForward.bind(this);
	}

	componentDidMount() {
		const d = this.state.date;
		const date = new Date(d.getFullYear(), d.getMonth() + 1, 0);
		const month = this.state.monthNames[d.getMonth()];
		let arrayDays = this.getNumOfDays(new Date(date.getFullYear(), date.getMonth() + 1, 0));
		this.setState({days : arrayDays, month : month, year : d.getFullYear(), currentDay : d.getDate()});
	}

	render() {
	    let state = this.state.days;
	    const buttons = state.map((s, i) => {
	    	const number = i + 1;
	    	const d = this.state.date;
	    	let date = new Date(d.getFullYear(), d.getMonth(), number);
	    	let dayOfWeek = this.state.daysOfWeek[date.getDay()];
	    	return <CalendarButton key={i} number={number} day={dayOfWeek} currentDay={this.state.currentDay} handleClose={this.handleClose} month={d.getMonth()} year={this.state.year}/>
	    });
		return (
				<div className='ma3'>
					<Header month={this.state.month} year={this.state.year} goBack={this.goBack} goForward={this.goForward}/>
					 {
					 	buttons
					 }
				
				</div>
			)
	}

	goBack() {
		let date = this.state.date;
		const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1);
		const month = this.state.monthNames[previousMonth.getMonth()];
		let arrayDays = this.getNumOfDays(new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0));
		this.setState({date : previousMonth, days : arrayDays, month : month, year : previousMonth.getFullYear()});
	}

	goForward(){
		let date = this.state.date;
		const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
		const month = this.state.monthNames[nextMonth.getMonth()];
		let arrayDays = this.getNumOfDays(new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0));
		this.setState({date : nextMonth, days : arrayDays, month : month, year : nextMonth.getFullYear()});
	}

	getNumOfDays = (month) => {
		const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
		let arrayDays = [];
		for(let i = 0; i < days; i++) {
			arrayDays.push(i);
		}
		return arrayDays;
	}

    //todo
	handleClose = () => {}
}

export default Calendar;