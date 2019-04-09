import React from "react";
import styled from "styled-components";

import Task from "./Task/Task";
import { colors } from "../../constants/styles";

const OverviewWrapper = styled.div`
  width: 100%;
  min-height: 100%
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  align-content: stretch;
  background-color: ${colors.lightGray};
`;

export default ({ tasks = [], onFinishTask }) => {
  return (
    <OverviewWrapper>
      {tasks.map((task, index) => (
        <Task
          {...task}
          index={index}
          key={task._id}
          onFinishTask={onFinishTask}
        />
      ))}
    </OverviewWrapper>
  );
};
