import axios from 'axios';
import { Modal } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import Pagenation from '../../Pagination/Pageination';
import DanhmucUrl from '../UrlService/DanhmucUrl';
import Modaldm from './Modaldm';
import {withRouter, useParams} from 'react-router-dom';
import { param } from 'jquery';
function ListDanhmuc(){
    const params = useParams(); 
    const [result, setResult] = useState([]);
    const [show, setShow] = useState(false);
    const [ma, setMa] = useState(0);
    const [search, setSearch] = useState({
        name: '',
        parent_name: ''
    });

    const [currentPage, setCurrentPage] = useState(params.page);
    const [perPage, setPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    

    const closeModal = () => {
        setShow(false);
        setMa(0);
    }

    const getMa =(id)=>{
        setMa(id);
        setShow(true);
    }


    useEffect(() =>{
        DanhmucUrl.getAll( params.page ,search.name, search.parent_name).then(resp => resp.data)
        .then((data) =>{
            setResult(data);
        });
    }, [result, params.page])

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const current = result.slice(indexOfFirst, indexOfLast);

    const changePage = pageNumber => setCurrentPage(pageNumber);
    

    const nextPage =() =>{
        setCurrentPage(currentPage + 1);
        if(currentPage + 1 > maxPageNumberLimit){
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit )
        }
    }

    const prevPage =()=>{
        setCurrentPage(currentPage -1 ) ;
        if( (currentPage - 1)%pageNumberLimit==0){
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit )
        }
    }

    const getSearchName=(e)=>{
        const newvalue = e.target.value;
        setSearch({
            ...search,
            name: newvalue,
        });
    }

    const getSearchParent_name=(e)=>{
        const newvalue = e.target.value;
        setSearch({
            ...search,
            parent_name: newvalue,
        });
    }

    return(
        <div>
                <Modaldm show={show} close={closeModal} ma={ma} setShow={setShow} setMa={setMa}/>
                <input onChange={(e) => getSearchName(e)} type='text' />
                <input onChange={(e) => getSearchParent_name(e)} type='text' />
                <h3>Danh sách Danh mục</h3>             
                <button onClick={() => getMa()} class="btn btn-primary">Thêm mới</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td scope="col">STT</td>
                            <td scope="col">Tên Danh mục</td>
                            <td scope="col">Danh mục cha</td>
                            <td scope="col">Sửa</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            current.map(
                                (result) =>                               
                        
                                    <tr key={result.id}>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        <td>{result.parent_name}</td>
                        
                        <td>
                            <button onClick={() => getMa(result.id)} className="btn btn-primary" type="button" >Sửa</button>
                        </td>
                    </tr>
                            
                            )
                        }
                    </tbody>
                </table>
                <Pagenation perPage={perPage} total={result.length} changePage={changePage} 
                nextPage={nextPage} prevPage={prevPage} maxPageNumberLimit={maxPageNumberLimit}
                 minPageNumberLimit={minPageNumberLimit} currentPage={currentPage} params={params}/>
            </div>   
    );
}
export default ListDanhmuc;