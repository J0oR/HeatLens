import React, { useState, useEffect } from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";
//import HandleTooltip from "./HandleTooltip";

import Slider from "rc-slider";

export default function YearSlider({ yearState, dataType, yearBounds }) {
  const { yearRange, setYearRange } = yearState;
  const [singleMode, setSingleMode] = useState(false);

  const marks = { [yearBounds[0]]: yearBounds[0], [yearBounds[1]]: yearBounds[1] };

  // Handle slider change
  const handleChange = (val) => {
    setYearRange(singleMode ? [val] : val);
  };

  return (
    <SliderContainer>
      <SliderStyled
        range={!singleMode} // Se siamo in modalità single, non è un range
        min={yearBounds[0]}
        max={2025}
        value={yearRange}
        onChange={handleChange}
        included={singleMode ? false : true}
        keyboard={true}
        marks={marks}
        step={1}
      />

      <YearLabelContainer>
        <span className={!singleMode ? "hidden" : ""}>{yearRange[0]}</span>
        <span className={singleMode ? "hidden" : ""}>
          {yearRange[0]} – {yearRange[1]}
        </span>
      </YearLabelContainer>

      <ModeWrapper>
        <span className="mode-label">Singolo Anno</span>
        <SwitchButton mode={{ singleMode, setSingleMode }} yearState={yearState} yearBounds={yearBounds} />
        <span className="mode-label">Intervallo</span>
      </ModeWrapper>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SliderStyled = styled(Slider)`
  &.rc-slider {
    position: relative;
    height: 50px !important;

    .rc-slider-rail {
      width: 100%;
      height: 100%;
      background-color: #373748;

      border-radius: 3px;
    }
  }

  .rc-slider-track {
    width: 100%;
    height: 100%;
    background-color: #5f5f6d;
    border-radius: 3px;
    z-index: 10;
  }

  .rc-slider-handle {
    //border: 2px solid #0077ff;
    //background-color: white;
    border: none;
    height: 114%;
    position: absolute;
    top: 2px;
    width: 15px;
    border-radius: 5px;
    margin-top: 0px;
    z-index: 20;
    cursor: pointer;
    background-color: #96dbfa;
    opacity: 1;
    &:focus {
      box-shadow: 0 0 0 4px rgba(0, 119, 255, 0.2);
    }
  }

  .rc-slider-handle-dragging {
    border: none !important;
  }

  .rc-slider-mark-text {
    color: #555;
    font-size: 0.75rem;
    position: absolute;
    top: 40px;

    &:nth-child(1) {
      left: 3% !important;
    }
    &:nth-child(2) {
      left: 97% !important;
    }
  }

  .rc-slider-step {
    height: 100%;
  }

  .rc-slider-dot {
    z-index: 30;
    position: absolute;
    width: 1px;
    height: 90%;
    top: 5%;
    border: none;
    border-radius: 0;
    background-color: #05051a;
    background-image: repeating-linear-gradient(to right, rgba(#fff, 0.2), rgba(#fff, 0.2) calc(12.5% - 1px), #05051a 12.5%);

    &:first-child,
    &:last-child {
      display: none;
    }
  }

  .rc-slider-dot-active {
    //background-color: #0077ff;
  }
`;


const YearLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 1.2rem;

  .hidden {
    display: none;
  }
`;

const ModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 1rem 0;
  width: 100%;

  
  .obscured {
    color: #969696;
  }
`;
