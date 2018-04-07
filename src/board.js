import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardRow from './boardRow.js';

export default class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          	<div>
          		{this.props.squares.map((squareRow, indexRow) => {
          			return (
    	      			<BoardRow
                		squares={this.props.squares[indexRow]}
                		onClick={(i, j) => this.props.onClick(i, j)}
                		checkIfWinnerPosition={() => this.props.checkIfWinnerPosition(indexRow)}
                        index={indexRow}/>
         			)
     			})}
            </div>
        );
    }
}