'use strict'; 
const React = require('react'); 
const ReactDOM = require('react'); 
import Option from './Option';

const Options = (props) =>(
		<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Youre Options</h3>	
				<button 
				className="button--link"
				onClick={props.handleDeleteOptions}>Remove All
				</button>
		</div>
		{props.options.length === 0 && <p className="widget__message" >Please add and Option to get Started</p>}
		{
			props.options.map((option, index) => (
				<Option 
					key={option} 
					optionText={option}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))
		}
	</div> 
); 

export default Options; 