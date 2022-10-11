import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Row, Col } from "react-bootstrap";
import "./Pharmacy.scss";

const ModalUpdatePharmarcy = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="total">Sửa Thông Tin Lô</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Row>
                <Form.Label>Tên Kệ</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
              <Row>
                <Form.Label>Tên Lô</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
              <Row>
                <Form.Label>Sản Phẩm</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
              <Row>
                <Form.Label>Phân Loại</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ width: "90%", marginLeft: "3%" }}
                >
                  <option>Chọn Phân Loại</option>
                  <option value="1">Thuốc</option>
                  <option value="2">Vật Tư</option>
                </Form.Select>
              </Row>
            </Col>
            <Col>
              <Row>
                <Form.Label>Số Lượng</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
              <Row>
                <Form.Label>Ngày Nhập Kho</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
              <Row>
                <Form.Label>Ngày Sản Xuất</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
              <Row>
                <Form.Label>Ngày Hết Hạn</Form.Label>
                <Form.Control
                  type="date"
                  style={{ width: "90%", marginLeft: "3%" }}
                />
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">CẬP NHẬT</Button>
          <Button variant="danger" onClick={handleClose}>
            HỦY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdatePharmarcy;
