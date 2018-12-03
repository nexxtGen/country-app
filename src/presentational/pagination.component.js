import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './pagination.css';

import DevTools from '../DevTools';


const Pagination = props => (
    <div className="container">
        <button className="buttons">Prev</button>
        {props.pageNumbers.map((number) =>{
            return (                         
                <li key={number} id={number} onClick={props.handleClick.bind(this)} className="listStyle">
                        {number}
                </li>            
            )
        }) }
        <button className="buttons">Next</button>
    </div>    
    
);

export default Pagination;