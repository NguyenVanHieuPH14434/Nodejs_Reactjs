import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import "./Producer.scss";
import axios from "axios";
const ModalCreateProducer = (props) => {
  const { show, setShow, infoProducer, onChangeInfoProducer,handleCreate,setInfoProducer, 
    handleUpdate,
   
    isChecked,
    setIsChecked,
  }
   = props;
  const handleClose = () => {
  setShow(false);
  setIsChecked(true);
  setInfoProducer({
      _id: "",
        producer_name: "",
        producer_address: "",
        producer_phone: "",
        producer_email: ""
        })
  };
 
  return (
    <>
      <Modal size="lg" backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         {isChecked? (<Modal.Title className="total">Thêm Mới Nhà Cung Cấp</Modal.Title>) :
         (<Modal.Title className="total">Cập Nhật  Nhà Cung Cấp</Modal.Title>)
        }
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Row>
                <Form.Label>Tên Nhà Cung Cấp</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                  name = "producer_name"
                  value = {infoProducer.producer_name}
                  onChange = {(e) => onChangeInfoProducer(e)}
                />
              </Row>
              <Row>
                <Form.Label>Địa Chỉ</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                  name = "producer_address"
                  value = {infoProducer.producer_address}
                  onChange = {(e) => onChangeInfoProducer(e)}
                
                />
              </Row>
            </Col>
            <Col>
              <Row>
                <Form.Label>Số Điện Thoại</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                  name = "producer_phone"
                  value = {infoProducer.producer_phone}
                  onChange = {(e) => onChangeInfoProducer(e)}
                />
              </Row>
              <Row>
                <Form.Label>Email Nhà Cung Cấp</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                  name = "producer_email"
                  value = {infoProducer.producer_email}
                  onChange = {(e) => onChangeInfoProducer(e)}
                />
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {isChecked?
          (<Button variant="success" onClick={handleCreate}>
            THÊM MỚI
          </Button>) :
          (<Button variant="success" onClick={() => handleUpdate(infoProducer)}>
            Update
          </Button>)
          }   
          <Button variant="danger" onClick={handleClose}>
            QUAY LẠI
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateProducer;
