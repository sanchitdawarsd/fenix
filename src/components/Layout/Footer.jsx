import { Row, Col } from 'reactstrap';
import Avatar from 'react-avatar';
import { CiTwitter } from 'react-icons/ci';
import { LiaDiscord } from 'react-icons/lia';
import { FaMedium } from 'react-icons/fa6';
import { SiGitbook } from 'react-icons/si';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { GrDocument } from 'react-icons/gr';
import '../../Styles/footer.css';
import fenix_icon from '../../assets/fenix_icon.png';

const Footer = () => {
  return (
    <>
      <Row className="mx-3 mb-2 px-1 py-3 foot d-flex justify-content-between align-items-center">
        <Col className="d-flex align-items-center">
          <Avatar
            className="me-3"
            src={fenix_icon}
            size={30}
            round="50px"
          />
          <Col>
            <p className="mb-0 nav-text">Navigation</p>
            <Col className="d-flex justify-content-start">
              <a href="/">Documentation</a>
              <a href="/">Security</a>
              <a href="/">Gitbook</a>
              <a href="/">Brandkit</a>
              <a href="/">Articles</a>
              <a href="/">Support</a>
            </Col>
          </Col>
        </Col>
        <Col className="d-flex justify-content-end">
          <CiTwitter
            className="social_icons"
            size={25}
          />
          <LiaDiscord
            className="social_icons"
            size={25}
          />
          <FaMedium
            className="social_icons"
            size={25}
          />
          <SiGitbook
            className="social_icons"
            size={25}
          />
          <PiTelegramLogoLight
            className="social_icons"
            size={25}
          />
        </Col>
      </Row>
      <Row className="foot_bottom trademark mx-3 px-1 pb-3 d-flex justify-content-between align-items-center">
        <Col className="ps-0 d-flex justify-content-start align-items-center">
          <p>2023 @ Fenix Finance</p>
          <p className="version">Version: 93a8d72</p>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <a
            href="/"
            className="d-flex align-items-center"
          >
            {' '}
            <GrDocument
              size={15}
              className="legalIcon mx-1"
            />
            Legal Disclamer
          </a>
        </Col>
        <Col className="pe-0 text-end">
          <p>The central trading and liquidity market on </p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
