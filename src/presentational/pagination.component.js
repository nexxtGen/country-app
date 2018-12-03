import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './pagination.css';

import DevTools from '../DevTools';


const Pagination = props => (
    <div className="container">        
        <button onClick={props.setCountriesPerPage.bind(null, 3)}>3 per page</button>
        <button onClick={props.setCountriesPerPage.bind(null, 6)}>6 per page</button>
        <button className="buttons" onClick={props.handlePrevPage.bind(this)}>Prev</button>
        {props.pageNumbers.map((number) =>{
            return (                         
                <li key={number} id={number} onClick={props.handleClick.bind(this)} className={props.currentPage == number ? "listStyleActive" : "listStyle"}>
                        {number}
                </li>            
            )
        }) }
        <button className="buttons" onClick={props.handleNextPage.bind(this)}>Next</button>
    </div>    
    
);

export default Pagination;