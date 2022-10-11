import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Storage.scss';

const ModalCreateStorage = (props) => {
    const { show, setShow, data, checked, handleUpdate, getValue, handleCreate, setData, setChecked } = props;
    const handleClose = () => {
        setShow(false);
        setData({});
        setChecked(false);
    };
    const [shelf, setShelf] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/shelf/list').then((res) => setShelf(res.data.docs));
    }, [shelf]);
    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title className="total">{checked ? 'Update Lô' : 'Nhập Lô'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Row>
                                <Form.Label>Tên Kệ</Form.Label>
                                <Form.Select
                                    type="text"
                                    name="shelf_number"
                                    value={data.shelf_number}
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                >
                                    <option> --- Chọn kệ ---</option>
                                    {shelf.map((el, i) => {
                                        return <option key={i}>{el.shelf_name}</option>;
                                    })}
                                </Form.Select>
                            </Row>
                            <Row>
                                <Form.Label>Tên Lô</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lot_number"
                                    value={data.lot_number}
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                />
                            </Row>
                            <Row>
                                <Form.Label>Sản Phẩm</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="product_name"
                                    value={data.product_name}
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                />
                            </Row>
                            <Row>
                                <Form.Label>Phân Loại</Form.Label>
                                <Form.Select
                                    name="type"
                                    value={data.type}
                                    aria-label="Default select example"
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                >
                                    <option>Chọn Phân Loại</option>
                                    <option value="Hộp">Hộp</option>
                                    <option value="Bao">Bao</option>
                                    <option value="Thùng">Thùng</option>
                                </Form.Select>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Số Lượng</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="quantity"
                                    value={data.quantity}
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                />
                            </Row>
                            <Row>
                                <Form.Label>Ngày Sản Xuất</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="nsx"
                                    value={data.nsx}
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                />
                            </Row>
                            <Row>
                                <Form.Label>Ngày Hết Hạn</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="hsd"
                                    value={data.hsd}
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    onChange={getValue}
                                />
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {checked ? (
                        <Button variant="success" onClick={handleUpdate}>
                            Update
                        </Button>
                    ) : (
                        <Button variant="success" onClick={handleCreate}>
                            Thêm Mới
                        </Button>
                    )}
                    <Button variant="danger" onClick={handleClose}>
                        QUAY LẠI
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateStorage;
