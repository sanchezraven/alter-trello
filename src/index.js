import React from 'react';
import ReactDOM from 'react-dom';
import AlterTrello from './AlterTrello';
import 'bootstrap/dist/css/bootstrap.min.css';

const domContainer =
document.querySelector('#react_container');
ReactDOM.render(
<AlterTrello />,
domContainer
);