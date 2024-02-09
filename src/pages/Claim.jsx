import { Row, Col } from 'reactstrap';
import '../Styles/claim.css';
import { VscLinkExternal } from 'react-icons/vsc';
import { LiaDiscord } from 'react-icons/lia';
import handicon from '../assets/hand-coin_icon.svg';
import CountdownTimer from '../components/CountdownTimer';
import Button from '../components/UI/Button';
import ListDisplay from '../components/ListDisplay';
import StartNow from '../components/StartNow';
import wallet from '../assets/wallet_icon.svg';
import token from '../assets/token_icon.svg';
import mig_token from '../assets/mig_token.svg';
import MigrationOverview from '../components/MigrationOverview';
import TokenTable from '../components/TokenTable';

const Claim = () => {
  const list_values = [
    {
      id: 1,
      digits: '102.65 spCHR',
      number: '1 veFNX',
    },
    {
      id: 2,
      digits: '178 eICHR',
      number: '1 veFNX',
    },
    {
      id: 3,
      digits: '113.88 veCHR',
      number: '1 veFNX',
    },
    {
      id: 4,
      digits: '1 ChrNFT',
      number: '102.61 veFNX',
    },
    {
      id: 5,
      digits: '102.65 spCHR',
      number: '1 veFNX',
    },
    {
      id: 6,
      digits: '178 eICHR',
      number: '1 veFNX',
    },
    {
      id: 7,
      digits: '113.88 veCHR',
      number: '1 veFNX',
    },
    {
      id: 8,
      digits: '1 ChrNFT',
      number: '102.61 veFNX',
    },
  ];

  return (
    <>
      <Row className="claim_container d-flex align-items-center">
        <Col
          lg={8}
          className="migration_claim d-flex justify-content-between align-items-center"
        >
          <Col className="ps-5">
            <h4 className="ms-2">Migration Claim</h4>
            <p className="ms-2 heading_p">
              Deposit your CHR ecosystem tokens to migrate.
            </p>
            <div className="timer d-flex flex-row align-items-center">
              <Col className="me-5">
                <p>Migration</p>
                <p className="open_text">open</p>
              </Col>
              <Col>
                <CountdownTimer />
              </Col>
            </div>
            <Col>
              <Button>
                <img
                  className="me-1"
                  src={handicon}
                  alt="icon"
                  height={20}
                  width={20}
                />
                Check Tokens
              </Button>
            </Col>
            <Col className="mt-4">
              <a href="/">
                <VscLinkExternal
                  size={15}
                  className="me-2"
                />
                About Migration
              </a>
            </Col>
          </Col>
          <Col className="d-flex flex-column">
            <div className="list">
              {list_values.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <ListDisplay
                      digits={val.digits}
                      number={val.number}
                    />
                  </div>
                );
              })}
            </div>
            <div className="my-2 text-center">
              <LiaDiscord size={20} /> Need some help?
            </div>
          </Col>
        </Col>
        <Col className="start_now d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 startnow_text">
            <p className="mb-0 mt-1">Start Now</p>
          </div>
          <div className="sn_block">
            <StartNow
              heading="Check your Wallet"
              text="Sign in with your wallet to check your CHR ecosystem tokens balances."
              icon={
                <img
                  className="image_icon me-2"
                  src={wallet}
                  alt="wallet icon"
                  height={45}
                  width={45}
                />
              }
            />
          </div>
          <div className="sn_block">
            <StartNow
              heading="Migrate your tokens"
              text="Select your CHR ecosystem tokens and migrate them to veFNX."
              icon={
                <img
                  className="image_icon me-2"
                  src={token}
                  alt="wallet icon"
                  height={45}
                  width={45}
                />
              }
            />
          </div>
          <div className="sn_block">
            <StartNow
              heading="Migration"
              text="Your veFNX tokens will be airdropped a week before the launch of Fenix to the wallet you used for the migration."
              icon={
                <img
                  className="image_icon me-2"
                  src={mig_token}
                  alt="wallet icon"
                  height={45}
                  width={45}
                />
              }
            />
          </div>
          <div className="readMore_link">
            <a href="/">
              <VscLinkExternal
                size={15}
                className="me-2"
              />
              Read More
            </a>
          </div>
        </Col>
      </Row>
      <MigrationOverview />
      <TokenTable />
    </>
  );
};

export default Claim;
