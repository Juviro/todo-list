import React from "react";

import ItemActions from "./TaskElements/ItemActionsContainer";
import ProgressBar from "./TaskElements/ProgressBar";
import DueDate from "./TaskElements/DueDate";
import Title from "./TaskElements/Title";

import Timeline from "./Timeline/Timeline";

import { TaskWrapper, TopRowWrapper, InfoWrapper } from "./StyledTask";

const UPDATE_INTERVAL = 10000;

class Task extends React.Component {
  intervalId;

  componentDidMount() {
    this.intervalId = setInterval(() => this.forceUpdate(), UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {
      description,
      index,
      lastDone,
      interval,
      _id,
      completed,
    } = this.props;

    return (
      <TaskWrapper index={index}>
        <TopRowWrapper>
          <InfoWrapper>
            <Title description={description} />
            <DueDate lastDone={lastDone} interval={interval} />
          </InfoWrapper>
          <ItemActions taskId={_id} />
        </TopRowWrapper>
        <Timeline completed={completed} />
        <ProgressBar lastDone={lastDone} interval={interval} />
      </TaskWrapper>
    );
  }
}

export default Task;
