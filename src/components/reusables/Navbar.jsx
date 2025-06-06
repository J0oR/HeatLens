import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
      <div className="logoBurgerWrapper">
        <li className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo Image" />
          </NavLink>
        </li>
        <button onClick={() => setOpen(!open)}>{open ? <RiCloseLargeFill /> : <TiThMenuOutline />}</button>
      </div>
      <LinksContainer open={open}>
        <li>
          <StyledLink to="/temperature" className={({ isActive }) => (isActive ? 'active' : '')}>Temperature</StyledLink>
        </li>
        <li>
          <StyledLink to="/co2" className={({ isActive }) => (isActive ? 'active' : '')}>C02</StyledLink>
        </li>
        <li>
          <StyledLink to="/methane" className={({ isActive }) => (isActive ? 'active' : '')}>Methane</StyledLink>
        </li>
        <li>
          <StyledLink to="/n2o" className={({ isActive }) => (isActive ? 'active' : '')}>N2O</StyledLink>
        </li>
        <li>
          <StyledLink to="/polarIce" className={({ isActive }) => (isActive ? 'active' : '')}>Polar Ice</StyledLink>
        </li>
      </LinksContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  z-index: 100;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(1rem, 1vw + 0.5rem, 2rem);

  background-color: #0e0d1f;
  list-style-type: none;
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  .logoBurgerWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .logo {
      cursor: pointer;

      a {
        text-decoration: none;
        color: white;
      }

      img {
        height: 70px;
      }
    }

    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;

      @media screen and (min-width: 769px) {
        display: none;
        pointer-events: none;
      }
    }
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 30px;
  list-style-type: none;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
    flex-direction: column;
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    width: 100%;
    height: fit-content;
    left: 0;
    top: 90px;
    background-color: #0e0d1f;
    z-index: 100;
    text-align: center;
    gap: 30px;
    padding: 50px 0;
  }
`;



const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
    display: inline-block;


  &.active {
    color: #038772;
    font-weight: 800;
  }

  &:hover {
    transform: scale(1.1);
  }
`;