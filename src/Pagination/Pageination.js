import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $, { param } from 'jquery';
import twbsPagination from 'jquery';
import { Link, useParams } from 'react-router-dom';
import './Page.css';

function Pagenation({perPage, total, changePage, nextPage, prevPage,maxPageNumberLimit, minPageNumberLimit, currentPage, params}){
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(total / perPage); i++ ){
        pageNumber.push(i);
    }

    let pageIncre = null;
    if(pageNumber.length > maxPageNumberLimit){
        pageIncre = <li> &hellip; </li>
    }

    let pageDecre = null;
    if(pageNumber.length > minPageNumberLimit){
        pageDecre = <li> &hellip; </li>
    }
    return(
        <div>
            <ul className='pagination'>
                <li>
                    <button onClick={() => prevPage()}
                    disabled={currentPage ==pageNumber[0]? true : false}>Previous</button>
                </li>
                {pageDecre}
                {pageNumber.map(number =>{
                    if( number < maxPageNumberLimit+1 && number > minPageNumberLimit){
                        return(
                            <li key={number} className='page-item' >
                         <Link to={'/danh-muc/'+ number} onClick={() => changePage(number)} className={currentPage == number ? 'page-link active' : 'page-link'}>{number}</Link>
                     </li>
                        );
                    }
                })}
                {pageIncre}
                <li>
                    <button onClick={() => nextPage()}
                    disabled={currentPage ==pageNumber[pageNumber.length -1]? true : false}>Next</button>
                </li>
            </ul>
        </div>
    );
}
export default Pagenation;