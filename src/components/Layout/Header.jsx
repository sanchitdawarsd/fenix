import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../../Styles/header.css';
import { useState } from 'react';
import ConnectBtn from '../UI/ConnectBtn';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar
        className="mx-3 mt-3 py-3 head"
        color="dark"
        dark
        expand="lg"
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
        >
          <Nav
            className="ms-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/">Swap</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Liquidity</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Vote</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Lock</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">oFNX</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Marketplace</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Claim</NavLink>
            </NavItem>
          </Nav>
          <div className="wallet_connect_btn">
            <ConnectBtn />
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
