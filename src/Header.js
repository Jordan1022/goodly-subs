// Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 18px 0;
  backdrop-filter: saturate(120%) blur(12px);
  background: rgba(10, 13, 10, 0.82);
  border-bottom: 1px solid var(--border);
  margin-bottom: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-left: 8px;
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.25));
  @media (max-width: 760px) {
    width: 140px;
  }
  @media (max-width: 500px) {
    width: 100px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 760px) {
    display: none;
  }
`;

const Tab = styled.span`
  position: relative;
  padding: 8px 2px;
  margin: 0 6px;
  color: var(--color-text);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: color 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 2px;
    background: var(--color-gold);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--color-gold);
  }

  &:hover:after {
    width: 100%;
  }

  @media (min-width: 760px) {
    font-size: 1rem;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

const DropdownToggle = styled.button`
  position: relative;
  padding: 8px 2px;
  margin: 0 6px;
  color: var(--color-text);
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: color 0.2s ease;
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 2px;
    background: var(--color-gold);
    transition: width 0.25s ease;
  }

  &:hover {
    color: var(--color-gold);
  }

  &:hover:after {
    width: 100%;
  }

  @media (min-width: 760px) {
    font-size: 1rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  background: rgba(11, 15, 11, 0.97);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-2);
  padding: 8px;
  display: none;
  min-width: 220px;
  z-index: 130;
`;

const DropdownItem = styled.span`
  display: block;
  padding: 10px 12px;
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: rgba(244, 200, 95, 0.08);
    color: var(--color-gold);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--border);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 760px) {
    display: inline-flex;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  right: 16px;
  top: 64px;
  background: rgba(11, 15, 11, 0.97);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-2);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  min-width: 180px;
  z-index: 120;

  a, span {
    padding: 10px 12px;
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    border-radius: 8px;
  }

  a:hover, span:hover {
    background: rgba(244, 200, 95, 0.08);
    color: var(--color-gold);
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Ensure navigating between routes scrolls to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleScrollLinkClick = (event, targetId) => {
    event.preventDefault();

    const scrollOptions = {
      smooth: true,
      duration: 500,
      offset: -80,
    };

    if (location.pathname === '/') {
      scroller.scrollTo(targetId, scrollOptions);
    } else {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        scroller.scrollTo(targetId, scrollOptions);
      }, 180);
    }
    closeMenu();
  };

  return (
    <HeaderWrapper>
      <Row>
        <LogoLink to="/" aria-label="Goodly Development home">
          <Logo src="GoodlyG.svg" alt="Goodly Development logo" />
        </LogoLink>
        <Navigation>
          <Dropdown>
            <DropdownToggle>Services</DropdownToggle>
            <DropdownMenu>
              <DropdownItem as={RouterLink} to="/">Development Services</DropdownItem>
              <DropdownItem as={RouterLink} to="/it-services">IT Services</DropdownItem>
              <DropdownItem as={RouterLink} to="/web-services">Web Services</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <Tab onClick={() => handleScrollLinkClick('pricing-table')}>Plans</Tab> */}
          <Tab
            as="a"
            href="/#testimony"
            onClick={(event) => handleScrollLinkClick(event, 'testimony')}
          >
            Testimonials
          </Tab>
          <Tab as={RouterLink} to="/blog">Blog</Tab>
          <Tab as={RouterLink} to="/support">Support</Tab>
        </Navigation>
        <MenuButton aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
      </Row>
      {menuOpen && (
        <MobileMenu>
          <span>Services</span>
          <a href="/#about-me" onClick={(event) => handleScrollLinkClick(event, 'about-me')}>Development Services</a>
          <RouterLink to="/it-services" onClick={closeMenu}>IT Services</RouterLink>
          <RouterLink to="/web-services" onClick={closeMenu}>Web Services</RouterLink>
          {/* <span onClick={() => handleScrollLinkClick('pricing-table')}>Plans</span> */}
          <a href="/#testimony" onClick={(event) => handleScrollLinkClick(event, 'testimony')}>Testimonials</a>
          <RouterLink to="/blog" onClick={closeMenu}>Blog</RouterLink>
          <RouterLink to="/support" onClick={closeMenu}>Support</RouterLink>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
