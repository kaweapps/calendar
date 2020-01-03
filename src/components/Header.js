import React, {Component} from 'react';


class Header extends Component {

	render() {
		const {month, year, goBack, goForward} = this.props
		return (
				<div>
					<h1 className='tc courier'> <span className="pointer" onClick={goBack}> &#8701; </span> { month + " " +year }  <span className="pointer" onClick={goForward}>&#8702;</span> </h1>
				</div>
		)
	}
}

export default Header;