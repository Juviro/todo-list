import React from "react";
import styled from "styled-components";
import IconButton from "../../General/Buttons/IconButton";

const IconsWrapper = styled.div`
  height: 60px;
  width: calc(50% - 32px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Icons = ({ title, onFinishTask }) => (
  <IconsWrapper>
    <IconButton icon="create" />
    <IconButton icon="check" onClick={onFinishTask} />
  </IconsWrapper>
);

export default Icons;
