import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.js';

export default class BoardRow extends React.Component {
	renderSquare(square, xPosition, yPosition) {
	    return <Square 
	        value={square}
	        onClick={() => this.props.onClick(xPosition, yPosition)}
	        checkIfWinnerPosition={() => this.props.checkIfWinnerPosition()}
	        xPosition={xPosition}
	        yPosition={yPosition} />;
	}

	render() {
	    return (
	    	<div class="board-row">
	    		{this.props.squares.map((square, index) => {
	    			return this.renderSquare(this.props.squares[index], this.props.index, index);
	    		})}
	    	</div>
	    );
	}

}