import React, { useState, useEffect } from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

import styled from "styled-components";
import SwitchButton from "./SwitchButton";
import { chartDataConfig } from "../utils/chartDataConfig";

import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import Handle from "rc-slider/lib/Handles/Handle";

/* const HandleWithTooltip = ({ value, dragging, index, ...restProps }) => (
  <Tooltip overlay={`${value}`} visible={dragging} placement="top" key={index}>
    <Slider.Handle value={value} {...restProps} />
  </Tooltip>
); */

export default function YearSlider({ yearState, dataType }) {
  const yearBounds = chartDataConfig[dataType].yearRange;
  const { yearRange, setYearRange } = yearState;
  const [singleMode, setSingleMode] = useState(false);

  const marks = chartDataConfig[dataType].marks;

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
        pushable={chartDataConfig[dataType].minGap}
        handleRender={(node, props) => (
          <Tooltip overlay={`${props.value}`}  placement="top" key={props.index}>
            {node}
          </Tooltip>
        )}
      />

      <ModeWrapper>
        <span className="mode-label">Range</span>
        <SwitchButton mode={{ singleMode, setSingleMode }} yearState={yearState} yearBounds={yearBounds} dataType={dataType}/>
        <span className="mode-label">Year</span>
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
    height: 25px !important;
    cursor: pointer;

    .rc-slider-rail {
      width: 100%;
      height: 100%;
      background-color: #373748;

      border-radius: 3px;
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
      height: 140%;
      width: 10px;
      border-radius: 2px;
      z-index: 20;
      cursor: pointer;
      background-color: #ADD8E6;
      opacity: 1;
             border: none !important;
        outline: none !important;
        box-shadow: none !important;

      &:focus, &:hover {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
      &.rc-slider-handle-dragging {
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
    }

    .rc-slider-step {
      position: absolute;
      width: 100%;
      top: 155%;
      /* background: white; */
      /* color: white; */

      .rc-slider-dot {
        z-index: 30;
        position: absolute;
        width: 2px;
        height: 5px;
        border: none;
        border-radius: 0;
        background-color: #a2a2a2;
        background-image: repeating-linear-gradient(to right, rgba(#fff, 0.2), rgba(#fff, 0.2) calc(12.5% - 1px), #05051a 12.5%);
      }
    }
    .rc-slider-mark-text {
      color: #a2a2a2;
      font-size: 0.75rem;
      position: absolute;
      top: 35px;
    }
  }
`;

const YearLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 20px;

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

  margin-top: 80px;

  .obscured {
    color: #969696;
  }
`;
