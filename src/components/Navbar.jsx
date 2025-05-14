import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavContainer>
      <li>
        <Link to="/">Logo</Link>
      </li>
      <LinksContainer>
        <li>
          <Link to="/temperature">Temperature</Link>
        </li>
        <li>
          <Link to="/co2">C02</Link>
        </li>
        <li>
          <Link to="/methane">Methane</Link>
        </li>
      </LinksContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  z-index: 100;
  transition: background-color 0.3s ease-out;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
  background-color: #0e0d1f;
  list-style-type: none;

  a {
    text-decoration: none;
    color: white;
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

 
`;
