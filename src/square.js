import React from 'react';
import ReactDOM from 'react-dom';

export default class Square extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
	      	xPosition: 0,
	      	yPosition: 0,
	    };
	}

	render() {
		return (
		    <button 
		    	className="square"
		    	onClick={this.props.onClick}>
		    	{this.props.value}
		    </button>
		);
	}
}