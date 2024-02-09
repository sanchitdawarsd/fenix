import { Row, Col } from 'reactstrap';
import '../Styles/startnow.css';

const StartNow = ({ heading, text, icon }) => {
  return (
    <Row className="startnow_container">
      <Col className="content d-flex justify-content-center align-items-center">
        {icon}
        <Col>
          <p className="startnow_mer">{heading}</p>
          <p className="mb-0 startnow_text_detail">{text}</p>
        </Col>
      </Col>
    </Row>
  );
};

export default StartNow;
