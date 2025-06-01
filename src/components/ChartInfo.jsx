import { chartDataConfig } from "../utils/chartDataConfig";
import styled from "styled-components";

export default function ChartInfo({ dataType }) {
  const { info } = chartDataConfig[dataType];
  const { title, text, links } = info;

  return (
    <Container>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: fit-content;
  margin: 50px auto 100px auto;

  width: 90%;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  h3 {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: clamp(1.25rem, 2.5vw + 0.5rem, 2rem);

  }

  p {
    font-size: clamp(0.8rem, 1.2rem, 1.5rem);
    line-height: 2;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  a {
    text-decoration: none;
    color: #038772;
    font-weight: 700 !important;
  }
`;
