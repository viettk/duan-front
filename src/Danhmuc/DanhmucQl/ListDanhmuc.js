import axios from 'axios';
import { Modal } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import Pagenation from '../../Pagination/Pageination';
import DanhmucUrl from '../UrlService/DanhmucUrl';
import Modaldm from './Modaldm';
function ListDanhmuc(){
    const [result, setResult] = useState([]);
    const [show, setShow] = useState(false);
    const [ma, setMa] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(2);
    

    const closeModal = () => {
        setShow(false);
        setMa(0);
    }

    const getMa =(id)=>{
        setMa(id);
        setShow(true);
    }


    useEffect(() =>{
        DanhmucUrl.getAll().then(resp => resp.data)
        .then((data) =>{
            setResult(data.content);
        });
    
    }, [result])

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const current = result.slice(indexOfFirst, indexOfLast);

    const changePage = pageNumber => setCurrentPage(pageNumber);


    return(
        <div>
                <Modaldm show={show} close={closeModal} ma={ma} setShow={setShow} setMa={setMa}/>
                <h3>Danh sách</h3>             
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
                <Pagenation perPage={perPage} total={result.length} changePage={changePage} />
            </div>   
    );
}
export default ListDanhmuc;