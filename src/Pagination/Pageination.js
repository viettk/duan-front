import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagenation({perPage, total, changePage}){
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(total / perPage); i++ ){
        pageNumber.push(i);
    }


    return(
        <div>
            <ul className='pagination'>
                {pageNumber.map(number =>(
                    <li key={number} className='page-item'>
                        <a onClick={() => changePage(number)} href='/danh-muc/page=' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Pagenation;