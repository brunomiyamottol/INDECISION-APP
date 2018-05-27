'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom'; 


const Option = (props) =>(
		<div className="option">
			<p className="option__text"> {props.count}.  {props.optionText} </p>
			<button 
				className="button--link"
				onClick={(e) =>{
				props.handleDeleteOption(props.optionText); 
				}}
			>
				Remove
			</button>
		</div>
	); 

	export default Option; 