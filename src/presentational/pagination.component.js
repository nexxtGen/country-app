import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './pagination.css';

const Pagination = props => (
    <div className="container">        
        <button onClick={() => props.setCountriesPerPage(3)}>3 per page</button>
        <button onClick={() => props.setCountriesPerPage(6)}>6 per page</button>
        <button className="buttons" onClick={() => props.handlePrevPage()}>Prev</button>
        {props.pageNumbers.map((number) =>{
            return (                         
                <li key={number} id={number} onClick={(event) => props.handleClick(event)} className={props.currentPage == number ? "listStyleActive" : "listStyle"}>
                        {number}
                </li>            
            )
        }) }
        <button className="buttons" onClick={() => props.handleNextPage()}>Next</button>
    </div>  
);

export default Pagination;