import React from "react";
import styled from "styled-components";

import Task from "./Task/Task";

const OverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  align-content: stretch;
`;

class Overview extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  getTasksWithProgress = () => {
    const getProgress = ({ lastDone, interval }) =>
      Math.ceil(((Date.now() - lastDone) / interval) * 100);

    return this.props.tasks.map(task => ({
      ...task,
      progress: getProgress(task),
    }));
  };

  sortTasks(tasks) {
    const getNextDueDate = ({ interval, lastDone }) =>
      Number(interval) + Number(lastDone);
    return tasks.sort((a, b) => getNextDueDate(b) - getNextDueDate(a));
  }

  render() {
    const tasks = this.getTasksWithProgress();
    const sortedTasks = this.sortTasks(tasks);
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
