import { chartDataConfig } from "../../utils/chartDataConfig";
import styled from "styled-components";

export default function ChartSummary({ dataType }) {
  const { summary } = chartDataConfig[dataType];
  const { title, info } = summary;

  return (
    <Container>
      <h1>{title}</h1>
      <p>{info}</p>
    </Container>
  );
}

const Container = styled.div`
  margin: 150px auto 0px auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: fit-content;
  margin: 240px auto 50px auto;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  h1{
    text-align: center;
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    font-family: "Oswald", sans-serif;
  }

  p{
    font-size: clamp(0.8rem, 1.2rem, 1.5rem);
    line-height: 2;
    
    @media screen and (max-width: 768px) {
      text-align: justify;
    }
  }
`;
