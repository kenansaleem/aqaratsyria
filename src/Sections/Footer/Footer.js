import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FooterNav, SocialCard } from "../../Components";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="text-center">
          {/* قسم "تابعنا" */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">تابعنا</h5>
            <p className="mb-3 mt-4">تابع اخبارنا على مواقع التواصل الخاصة بنا</p>
            <SocialCard />
          </Col>

          {/* قسم "تواصل معنا" */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">تواصل معنا</h5>
            <a className="mb-2 mt-4 d-block text-white" href="tel:+963933901771">+963 933 901 771</a>
            <a href="https://wa.me/963933901771"
              target="_blank"
              rel="noopener noreferrer" className="Whatsapp text-white mb-2"><FaWhatsapp size={20} /></a>
            <Link to="/consultation" className="text-white d-block mb-2 pt-2">استشارة</Link>
          </Col>

          {/* قسم "روابط سريعة" */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3">عالم العقارات</h5>
            <FooterNav />
          </Col>
        </Row>
        {/* حقوق النشر */}
        <Row className="mt-4 pt-3 border-top">
          <Col className="text-center">
            <p className="mb-0">{new Date().getFullYear()} © جميع الحقوق محفوظة  </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

