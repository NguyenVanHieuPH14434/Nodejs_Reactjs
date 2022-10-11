import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import "./Consignment.scss";
import _ from "lodash";
import { toast } from "react-toastify";
import { updateConsignment } from "../../services/apiServices";

const ModalUpdateConsignment = (props) => {
  const {
    show,
    setShow,
    listProducer,
    fetchListConsignmentsWithPaginate,
    dataUpdate,
    setCurrentPage,
    currentPage,
  } = props;
  const [formConsignment, setFormConsignment] = useState({
    product_name: "",
    producer_name: "",
    lot_number: "",
  });
  const { product_name, producer_name, lot_number } = formConsignment;
  const handleClose = async () => {
    setShow(false);
  };

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setFormConsignment(dataUpdate);
    }
  }, [dataUpdate]);

  const onChangeForm = (event) => {
    setFormConsignment({
      ...formConsignment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = async () => {
    // validate
    if (!product_name) {
      toast.error("Bạn chưa nhập trường hàng hóa");
      return;
    }
    if (!lot_number) {
      toast.error("Bạn chưa nhập trường số lô");
      return;
    }
    if (!producer_name) {
      toast.error("Bạn chưa nhập trường nhà cung cấp");
      return;
    }

    // update data
    await updateConsignment(formConsignment._id, formConsignment);
    handleClose();
    toast.success("Bạn đã sửa thành công");
    setCurrentPage(currentPage);
    await fetchListConsignmentsWithPaginate(currentPage);
  };

  // console.log("check update", dataUpdate);
  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="total">Sửa Thông Tin Hàng Hóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Row>
                <Form.Label>Tên Hàng Hóa</Form.Label>
                <Form.Control
                  type="text"
                  name="product_name"
                  style={{ width: "90%", marginLeft: "3%" }}
                  value={product_name}
                  onChange={onChangeForm}
                />
              </Row>
              <Row>
                <Form.Label>Số Lô</Form.Label>
                <Form.Control
                  type="text"
                  name="lot_number"
                  style={{ width: "90%", marginLeft: "3%" }}
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
                  style={{ width: "90%", marginLeft: "3%" }}
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
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmitForm}>
            CẬP NHẬT
          </Button>
          <Button variant="danger" onClick={handleClose}>
            HỦY
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateConsignment;
