import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Management.scss";

const ModalUpdateManagement = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
  };

  // Update
  const handleUpdate = () => {
    if (props.nameUpdate !== "" && props.descUpdate !== "") {
      const update = {
        shelf_name: props.nameUpdate,
        shelf_desc: props.descUpdate
      }
      axios.post(`http://localhost:4000/api/shelf/update/${props.id}`, update).then((res) => {
        toast.success('Sửa Thông Tin Kệ Thành Công');
        props.setName("");
        props.setDesc("");
        handleClose();
      })
    }
    else {
      toast.warning("Thông Tin Không Được Để Trống");
    }
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="total">Sửa Thông Tin Kệ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên Kệ</Form.Label>
              <Form.Control type="text" value={props.nameUpdate} onChange={(e) => props.setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ghi Chú</Form.Label>
              <Form.Control type="text" value={props.descUpdate} onChange={(e) => props.setDesc(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleUpdate()}>CẬP NHẬT</Button>
          <Button variant="danger" onClick={handleClose}>
            HỦY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateManagement;
