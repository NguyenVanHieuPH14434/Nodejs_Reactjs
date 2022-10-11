import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function Notification({ description,title, show,setHandleCheck,handleCheck, setShow, index ,setCurrentPage,currentPage}) {
    const handleClose = () => setShow(false);
    const handleDelete = (i) => {
        axios.delete(`http://localhost:4000/api/storage/delete/${i}`)
            .then((res, req) => {
                setHandleCheck(!handleCheck)
                setCurrentPage(currentPage);
                setShow(false)
                console.log('success');
            })
            .catch(() => {
                console.log('error');
            });
            toast.success("Xóa Thành Công!");
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>handleDelete(index)}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            }
        </>
    );
}

export default Notification;
