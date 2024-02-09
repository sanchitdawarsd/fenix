import { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import '../Styles/mOverview.css';
import checkTick from '../assets/green_check.svg';
import Button from './UI/Button';
import handicon from '../assets/hand-coin_icon.svg';
import mig_icon from '../assets/total_mig_icon.svg';

const MigrationOverview = () => {
  const [add, setAdd] = useState('');
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (add.length === 0) {
      alert('Enter a Wallet address first!');
    } else {
      setClick(!click);
    }
  };

  return (
    <Row className="overview_container">
      <Col>
        <h5>Migration Overview</h5>
      </Col>
      <Col className="sub_content">
        <Col
          lg={8}
          className="search_container"
        >
          <p>Wallet Address</p>
          <input
            title="wallet address"
            className="address_input"
            type="text"
            value={add}
            onChange={(e) => setAdd(e.target.value.trim())}
          />
          {click ? (
            <button
              className="checked_btn"
              onClick={handleClick}
            >
              Checked
            </button>
          ) : (
            <Button onclick={handleClick}>
              <img
                className="me-1"
                src={handicon}
                alt="icon"
                height={20}
                width={20}
              />
              Check
            </Button>
          )}
          {click && (
            <img
              className="m-2"
              src={checkTick}
              alt="Checked"
              height={25}
              width={25}
            />
          )}
        </Col>
        <Col
          lg={4}
          className="total_amt_container"
        >
          <img
            src={mig_icon}
            alt="migration icon"
          />
          <div>
            <p>Total Migrated Amount to FNX</p>
            <span className="total_stats d-flex justify-content-strar align-items-center">
              <p>
                0 CHR{' '}
                <IoMdInformationCircleOutline
                  size={22}
                  color="white"
                  className="ms-1 total_info_icon"
                />{' '}
                |
              </p>
              <p>
                0 veCHR{' '}
                <IoMdInformationCircleOutline
                  size={22}
                  color="white"
                  className="ms-1 total_info_icon"
                />{' '}
                |
              </p>
              <p>
                0 chrNFT's{' '}
                <IoMdInformationCircleOutline
                  size={22}
                  color="white"
                  className="ms-1 total_info_icon"
                />{' '}
                |
              </p>
              <p>
                0 elCHR{' '}
                <IoMdInformationCircleOutline
                  size={22}
                  color="white"
                  className="ms-1 total_info_icon"
                />{' '}
                |
              </p>
              <p>
                0 spCHR{' '}
                <IoMdInformationCircleOutline
                  size={22}
                  color="white"
                  className="ms-1 total_info_icon"
                />
              </p>
            </span>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default MigrationOverview;
