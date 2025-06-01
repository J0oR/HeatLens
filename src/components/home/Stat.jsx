import { PiChartLineUpBold } from "react-icons/pi";
import styled from "styled-components";

export default function Stat({ amount, label, icon }) {
  return (
    <Container>
      <div>
        {icon}
        <span className="amount">{amount}</span>
      </div>
      <span className="stat-label">{label}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 2rem;
  gap: 10px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    svg {
      color: red;
    }

    .amount {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
      font-family: "Oswald", sans-serif;
    }
  }

  .stat-label {
    font-size: 1rem;
    color: #b6b6b6;
  }
`;
