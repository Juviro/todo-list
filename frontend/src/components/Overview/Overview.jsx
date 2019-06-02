import React from "react";
import styled from "styled-components";

import Task from "./Task/Task";

const OverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Overview extends React.Component {
  sortTasks() {
    const getNextDueDate = ({ interval, lastDone }) =>
      Number(interval) + Number(lastDone);

    return this.props.tasks.sort(
      (a, b) => getNextDueDate(a) - getNextDueDate(b)
    );
  }

  render() {
    const sortedTasks = this.sortTasks();

    return (
      <OverviewWrapper>
        {sortedTasks.map((task, index) => (
          <Task
            {...task}
            index={index}
            key={task._id}
            onFinishTask={this.props.onFinishTask}
          />
        ))}
      </OverviewWrapper>
    );
  }
}

Overview.defaultProps = {
  tasks: [],
};

export default Overview;
