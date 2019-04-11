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
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    setInterval(this.addProgress, 1000);
  }

  addProgress = () => {
    const getProgress = ({ lastDone, interval }) =>
      Math.ceil(((Date.now() - lastDone) / interval) * 100);

    const tasks = this.props.tasks.map(task => ({
      ...task,
      progress: getProgress(task),
    }));
    this.setState({ tasks });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.tasks.length !== this.state.tasks.length) {
      this.addProgress();
    }
  }

  render() {
    const { onFinishTask } = this.props;

    const sortedTasks = this.state.tasks.sort(
      (a, b) => a.progress - b.progress
    );

    return (
      <OverviewWrapper>
        {sortedTasks.map((task, index) => (
          <Task
            {...task}
            index={index}
            key={task._id}
            onFinishTask={onFinishTask}
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
