import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

import logo from './images/logoPK.png';
import transaction from './images/icon-transaction.svg';
import inventory from './images/inventory.svg';
import user from './images/user.svg';

import { IoMdLock } from 'react-icons/io';
import { MdOutlineExitToApp } from 'react-icons/md';
import './Header.scss';
import ModalUpdatePassword from './ModalUpdatePassword';

const Header = () => {
    const [showModalUpdatePassword, setShowModalUpdatePassword] = useState(false);

    const handleClose = () => setShowModalUpdatePassword(false);
    const handleShow = () => setShowModalUpdatePassword(true);
    return (
        <>
            <Navbar bg="success" expand="sm">
                <Container fluid>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" className="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 menu">
                            <Nav.Item className="transaction">
                                <Link to="/transaction" className="link">
                                    <img src={transaction} alt="transaction" className="img1" />
                                    <p className="para1">GIAO DỊCH</p>
                                </Link>
                            </Nav.Item>
                            <Dropdown className="inventory">
                                <Dropdown.Toggle variant="success" className="container1">
                                    <img src={inventory} alt="inventory" className="img2" />
                                    <p className="para2">KHO</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link to="/producer" className="link">
                                            Nhà Cung Cấp
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link as={Link} to="/consignment" className="link">
                                            Nhập Lô
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/storage" className="link">
                                            Lưu kho
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/pharmacy" className="link">
                                            Thuốc
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/management" className="link">
                                            Quản Lý Kệ thuốc
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Dropdown className="user">
                            <Dropdown.Toggle variant="success" className="container2">
                                <img src={user} alt="user"></img>
                                <p className="para3">NGUYỄN THÙY TRINH</p>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleShow} className="lock">
                                    <IoMdLock size={25.6} />
                                    <p className="name">Đổi mật khẩu</p>
                                </Dropdown.Item>
                                <NavDropdown.Divider />
                                <Dropdown.Item className="exit">
                                    <MdOutlineExitToApp size={25.6} />
                                    <p className="name">Thoát</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            {
                                <ModalUpdatePassword
                                    show={showModalUpdatePassword}
                                    setShow={setShowModalUpdatePassword}
                                />
                            }
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
