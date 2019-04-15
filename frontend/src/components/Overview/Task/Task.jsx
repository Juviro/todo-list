import React from "react";
import styled, { keyframes } from "styled-components";
import ItemActions from "./ItemActionsContainer";
import ProgressBar from "./ProgressBar";
import Subtitles from "./Subtitles";

const grow = keyframes`
  0% {
    transform:  scale(0.5);
  }
  80% {
    transform:  scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const TaskWrapper = styled.div`
  flex: 1;
  margin: 10px;
  display: flex;
  padding: 24px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: #fff;
  border: 2px solid #e7e7e7;
  order: ${({ index }) => index};
  box-shadow: 3px 3px 10px -2px #ddd;

  // animation: ${grow} 0.3s linear;

  &:nth-last-child(-n + 3) {
    min-width: 40%;
  }
`;

const TitleWrapper = styled.div`
  width: 150px;
  overflow-x: hidden;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 0 0 12px 0;
`;
const TopRowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Task = ({ description, progress, index, lastDone, interval, _id }) => (
  <TaskWrapper index={index}>
    <TopRowWrapper>
      <TitleWrapper>
        <Title>{description}</Title>
      </TitleWrapper>
      <ItemActions taskId={_id} />
    </TopRowWrapper>
    <Subtitles lastDone={lastDone} interval={interval} />
    <ProgressBar progress={progress} />
  </TaskWrapper>
);

export default Task;
