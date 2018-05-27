'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';  
import './styles/styles.scss'; 

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));