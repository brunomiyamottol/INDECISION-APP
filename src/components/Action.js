'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom'; 


const Action = (props) =>(
		<div>
			<button 
				className="big-button"
				onClick={props.handlePick}
				disabled={!props.hasOptions}
		>
			What Shall I do?
		</button>
		</div>
	); 

export default Action; 
