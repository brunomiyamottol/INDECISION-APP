'use strict'
const React = require('react'); //import React from 'react';  
const Modal = require('react-modal'); //import Modal from 'react-modal';

const OptionModal = (props) =>(
<Modal
isOpen={!!props.selectedOption}
onRequestClose={props.handleClearSelectedOption}
contentLabel="Selected Option"
closeTimeoutMS={200}
className="modal"
>
<h3 className="modal_title">Selected Option</h3>
{props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
<button className="button"
onClick={props.handleClearSelectedOption}>OK</button>
</Modal>
); 

export default OptionModal; 
