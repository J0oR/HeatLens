import React, { useEffect } from "react";
import styled from "styled-components";
import { chartDataConfig } from "../utils/chartDataConfig";

export default function SwitchButton({ mode, yearState, yearBounds, dataType }) {
  const { yearRange, setYearRange } = yearState;
  const { singleMode, setSingleMode } = mode;
  const gap = chartDataConfig[dataType].minGap;

  const toggleMode = () => {
    setSingleMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (singleMode) {
      setYearRange([yearRange[1]]);
      console.log(yearRange);
    } else {
      if (yearRange[0] < yearBounds[0] + gap) {
        setYearRange([yearBounds[0], yearBounds[0] + gap]);
      } else {
        setYearRange([yearRange[0] - gap, yearRange[0]]);
      }
    }
  }, [singleMode]);

  return (
    <SwitchContainer $checked={singleMode}>
      <Input type="checkbox" checked={singleMode} onChange={toggleMode} />
      <Slider />
    </SwitchContainer>
  );
}

const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 50px;
  transition: 0.4s;
  background-color: ${({ $checked }) => ($checked ? "#4caf50" : "#ADD8E6")};
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Slider = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.4s ease;
  cursor: pointer;

  ${Input}:checked + & {
    transform: translateX(20px);
  }
`;
