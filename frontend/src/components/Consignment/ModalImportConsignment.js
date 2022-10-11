import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import './Consignment.scss';
import { toast } from 'react-toastify';
import { createConsignment } from '../../services/apiServices';
import axios from 'axios';

const ModalImportConsignment = (props: any) => {
    const { show, setShow, listProducer, fetchListConsignmentsWithPaginate, setCurrentPage } = props;

    const [file, setFile] = useState({
        file: '',
    });

    const handleClose = () => {
        setShow(false);
    };

    const handelImport = async () => {
        console.log(file);
        // console.log(fileName);
        const data = new FormData();

        data.append('File', file);
        await axios
            .post('http://localhost:4000/api/consignment/import', data)
            .then(() => {})
            .catch((err) => {
                console.log(err);
            });
        handleClose();
        toast.success('Đã nhập dữ liệu thành công');
        setCurrentPage(1);
        await fetchListConsignmentsWithPaginate(1);
    };

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title className="total">Import data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Row>
                                <Form.Label>Choose file</Form.Label>
                                <Form.Control type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handelImport}>
                        Import
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        QUAY LẠI
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalImportConsignment;
