import { Row, Col } from 'reactstrap';
import '../Styles/listDisplay.css';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import list_icon from '../assets/list_icon.png';

const ListDisplay = ({ digits, number }) => {
  return (
    <>
      <Row className="container">
        <Col className="d-flex justify-content-start align-items-center">
          <img
            src={list_icon}
            alt="icon"
            className="image_icon  me-2"
          />
          <div>
            <p className="mer">Minimum Exchange Ratio</p>
            <p className="mb-0">
              {digits}:{number}
              <IoMdInformationCircleOutline
                size={22}
                color="white"
                className="ms-2 info_icon"
              />
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ListDisplay;
