import {
    Popover,
    Tooltip,
    Modal
} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DanhmucUrl from '../UrlService/DanhmucUrl';

function Modaldm({ show, close, ma, setShow, setMa }) {
    const [detail, setDetail] = useState({
        id: '',
        name: '',
        parent_name:''
    });
    
    const [parent, setParent] = useState([]);

    const [mess, setMess] = useState({
        errorMessage: ''
    });
    const [loi, setLoi] = useState({
        name: '',
        parent_name: ''
    });
    useEffect(() => {
        if (ma === 0 || ma === undefined) {
            DanhmucUrl.getDanhMucCha().then(resp => {
                setParent(resp.data);
            });
           
        }
        else if(ma !== 0 ){
            DanhmucUrl.getById(ma).then(resp =>{
                setDetail(resp.data);
            });
        }
    }, [ma]);

    const updateName = (e) => {
        const newvalue = e.target.value;
        setDetail({
            ...detail,
            name: newvalue,
        });
    }

    const updateParent = (e) => {
        const newvalue = e.target.value;
        setDetail({
            ...detail,
            parent_name: newvalue,
        });
    }

    const dong = () => {
        setShow(false);
        setDetail({});
        setLoi({});
        setMa(0);
        setMess({});
    }

    const update = () => {
        if(detail.id == null){
            axios({
                url: 'http://localhost:8080/danh-muc',
                method: 'POST',
                type: 'application/json',
                data: detail,
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(resp => {
                dong();
            }).catch((error) => {
                if (error.response) {
                    setLoi(error.response.data);
                    setMess(error.response.data);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            });
        }
        else{
            axios({
                url: 'http://localhost:8080/danh-muc/'+ma,
                method: 'PUT',
                type: 'application/json',
                data: detail,
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(resp => {
                dong();
            }).catch((error) => {
                if (error.response) {
                    setLoi(error.response.data);
                    setMess(error.response.data);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            });
        }
        
    }
    return (
        <div>
            <Modal show={show} onHide={() => dong()}>
                <Modal.Header>
                    Cập nhật Danh mục
                    <button onClick={() => dong()}>X</button>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Tên Danh mục</label>
                            <input className="form-control" onChange={(e) => updateName(e)} value={detail.name} type="text" />
                            <span style={{ color: "red", fontSize: "13px" }}>{loi.name}</span>
                            <span style={{ color: "red", fontSize: "13px" }}>{mess.errorMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Danh mục cha</label>
                            <select onChange={(e)=>updateParent(e)} value={detail.parent_name}>
                                {
                                parent.map(parent => (
                                    <option key={parent} >{parent}</option>
                                ))}
                            </select>
                            <span style={{ color: "red", fontSize: "13px" }}>{loi.parent_name}</span>
                            <span style={{ color: "red", fontSize: "13px" }}>{mess.errorMessage}</span>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => update()} >Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Modaldm;