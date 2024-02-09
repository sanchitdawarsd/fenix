import { Row, Col } from 'reactstrap';
import '../Styles/tokenTable.css';
import settings_icon from '../assets/setting_icon.svg';
import Table_Token from './Table_Token';

const TokenTable = () => {
  let count = [...Array(10).keys()];

  return (
    <>
      <Row className="table_container d-flex flex-column justify-content-center">
        <Col>
          <Table_Token />
        </Col>
        <Col className="d-flex justify-content-between align-items-center">
          <div className="resutls_text">
            <p>Showing 2 out of 2 migrations</p>
          </div>
          <div className="pagination_div d-flex justify-content-evenly align-items-center">
            <span className="mx-3 pagination_btn">&larr; Previous</span>
            <div className="page_no_div">
              {count.map((idx, i) => (
                <div
                  key={idx}
                  className="page_number_btn"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="mx-3 pagination_btn">Next &rarr;</span>
          </div>
          <div className="setting_btn">
            <img
              src={settings_icon}
              alt="settings"
              height={20}
              width={20}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TokenTable;
