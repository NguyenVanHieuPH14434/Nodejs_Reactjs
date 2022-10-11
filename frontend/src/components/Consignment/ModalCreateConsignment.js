import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './Consignment.scss';
import { toast } from 'react-toastify';
import { createConsignment } from '../../services/apiServices';

const ModalCreateConsignment = (props) => {
    const { show, setShow, listProducer, fetchListConsignmentsWithPaginate, setCurrentPage } = props;

    const [formConsignment, setFormConsignment] = useState({
        product_name: '',
        producer_name: '',
        lot_number: '',
    });
    const { product_name, producer_name, lot_number } = formConsignment;

    const handleClose = () => {
        setShow(false);
        setFormConsignment({ product_name: '', producer_name: '', lot_number: '' });
    };

    const onChangeForm = (event) => {
        setFormConsignment({
            ...formConsignment,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitForm = async () => {
        // validate
        if (!product_name) {
            toast.error('Bạn chưa nhập trường hàng hóa');
            return;
        }
        if (!lot_number) {
            toast.error('Bạn chưa nhập trường số lô');
            return;
        }
        if (!producer_name) {
            toast.error('Bạn chưa nhập trường nhà cung cấp');
            return;
        }

        // add data
        await createConsignment(formConsignment);
        handleClose();
        toast.success('Bạn đã nhập hàng vào kho thành công');
        setCurrentPage(1);
        await fetchListConsignmentsWithPaginate(1);
    };

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title className="total">Thêm Hàng Hóa Nhập Kho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Row>
                                <Form.Label>Tên Hàng Hóa</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="product_name"
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    value={product_name}
                                    onChange={onChangeForm}
                                />
                            </Row>
                            <Row>
                                <Form.Label>Số Lô</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lot_number"
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    value={lot_number}
                                    onChange={onChangeForm}
                                />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Form.Label>Nhà Cung Cấp</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    style={{ width: '90%', marginLeft: '3%' }}
                                    value={producer_name}
                                    name="producer_name"
                                    onChange={onChangeForm}
                                >
                                    <option> --- Chọn nhà Cung Cấp ---</option>
                                    {listProducer.map((item, index) => {
                                        return <option key={index}>{item.producer_name}</option>;
                                    })}
                                </Form.Select>
                            </Row>
                            <Row></Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSubmitForm}>
                        THÊM MỚI
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        QUAY LẠI
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateConsignment;
