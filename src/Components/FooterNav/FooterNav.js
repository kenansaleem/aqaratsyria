import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterNav = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="text-white ps-0">الصفحة الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white ps-0">من نحن</Nav.Link>
            <Nav.Link as={Link} to="/buy" className="text-white ps-0">بيع</Nav.Link>
            <Nav.Link as={Link} to="/rent" className="text-white ps-0">إيجار</Nav.Link>
            <Nav.Link as={Link} to="/news" className="text-white ps-0">اخر الاخبار</Nav.Link>
        </Nav>
    )
}

export default FooterNav
