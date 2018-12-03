import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import DevTools from '../DevTools';

const Pagination = props => (    
    props.pageNumbers.map((number) =>{
        return (
            <div>                
                <li key={number} id={number} onClick={props.handleClick.bind(this)} >
                    {number}
                </li>
            </div>
        )
    }) 
);

export default Pagination;