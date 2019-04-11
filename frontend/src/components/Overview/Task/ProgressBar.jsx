import React from "react";
import styled from "styled-components";

const FULL_PROGRESS = 100;
const MAX_PROGRESS = 200;
const HUE_RANGE = 120;
const MIN_LIGHT = 25;
const MAX_LIGHT = 45;

const getColorFromProgress = progress => {
  const slicedProgress = Math.min(progress, MAX_PROGRESS);
  const hue = ((MAX_PROGRESS - slicedProgress) / MAX_PROGRESS) * HUE_RANGE;
  const minLight =
    MAX_LIGHT -
    ((slicedProgress - FULL_PROGRESS) / (MAX_PROGRESS - FULL_PROGRESS)) *
      MIN_LIGHT;
  const light = Math.min(45, minLight);
  return `hsl(${hue}, 100%, ${light}%)`;
};

const ProgressBarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 32px 0 16px 0;
`;

const ContdownBar = styled.div`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const RemainingTime = styled.div.attrs(props => ({
  style: {
    width: `${props.progress}%`,
    backgroundColor: getColorFromProgress(props.progress),
  },
}))`
  height: 100%;
  max-width: 100%;
  border-radius: 5px;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <ContdownBar>
        <RemainingTime progress={progress} />
      </ContdownBar>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
