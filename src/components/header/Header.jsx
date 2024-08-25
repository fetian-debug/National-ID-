import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import style from "./header.module.css";
import fg from "../../assets/images/fingerPrint.svg";


function Header() {
  return (
    <>
      <Container>
        <Row>
          <Col>
          
            <img src={fg} alt="" />
          
          </Col>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 className={style.center}>!ممكن نتعرف</h2>
            <p className={style.center}>من اي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة</p>
          </Modal.Title>
        </Row>
      </Container>
    </>
  );
}

export default Header;
