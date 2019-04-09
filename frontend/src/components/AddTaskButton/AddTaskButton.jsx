import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Icon from "../General/Icon.js";
import { colors } from "../../constants/styles";

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(45deg) scale(0.9);
  }

  100% {
    transform: rotate(90deg) scale(1);
  }
`;

const rotateAnimation = css`
  animation: ${rotate} 0.2s linear;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  background-color: ${colors.primary};
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ animationActive }) => animationActive && rotateAnimation}
`;

const AddTaskButton = ({ openModal }) => {
  const [animationActive, setIsAnimationActive] = useState(false);

  const onClick = () => {
    openModal({ variables: { name: "CREATE_TASK" } });
    setIsAnimationActive(true);
  };

  return (
    <Wrapper
      onClick={onClick}
      animationActive={animationActive}
      onAnimationEnd={() => setIsAnimationActive(false)}
    >
      <Icon icon="add" color="#ddd" />
    </Wrapper>
  );
};

export default AddTaskButton;
