import React from "react";
import styled from "styled-components";

import { withTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import BaseModal from "../Base/Modal.js";
import ModalHeader from "../Base/ModalHeader";
import IntervalSelection from "./IntervalSelection";
import ButtonRow from "./ButtonRow";

import { getIntervalInMillies, getIntervalInUnits } from "../../../utils/time";

const ContentWrapper = styled.div`
  margin-top: 24px;
  overflow: hidden;
`;

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    const task = props.task || {};
    const { intervalCount, intervalUnit } = getIntervalInUnits(task.interval);
    this.state = {
      description: task.description || "",
      intervalCount,
      intervalUnit,
      error: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.task || !this.props.task) return;

    this.setState({
      description: this.props.task.description,
      ...getIntervalInUnits(this.props.task.interval),
    });
  }

  onChangeDescription = event => {
    this.setState({ description: event.target.value, error: false });
  };

  onChangeIntervalCount = event => {
    this.setState({ intervalCount: event.target.value });
  };

  onChangeIntervalUnit = event => {
    this.setState({ intervalUnit: event.target.value });
  };

  onSubmit = () => {
    if (!this.state.description) {
      this.setState({ error: true });
      return;
    }

    const interval = getIntervalInMillies(
      this.state.intervalCount,
      this.state.intervalUnit
    );

    this.props
      .onSubmit({
        variables: {
          interval,
          description: this.state.description,
          _id: this.props._id,
        },
      })
      .then(this.props.onClose);
  };

  onDeleteTask = () => {
    this.props
      .onDelete({ variables: { _id: this.props._id } })
      .then(this.props.onClose);
  };

  render() {
    return (
      <BaseModal onBackdropClick={this.props.onClose}>
        <ModalHeader>{this.props.modalTitle}</ModalHeader>
        <ContentWrapper>
          <Input
            placeholder="Was muss erledigt werden?"
            value={this.state.description}
            onChange={this.onChangeDescription}
            error={this.state.error && !this.state.description}
            autoFocus={!this.props.onDelete}
            required
            fullWidth
          />
          <IntervalSelection
            onChangeIntervalCount={this.onChangeIntervalCount}
            onChangeIntervalUnit={this.onChangeIntervalUnit}
            intervalCount={this.state.intervalCount}
            intervalUnit={this.state.intervalUnit}
          />
          <ButtonRow
            onDelete={this.onDeleteTask}
            showDelete={!!this.props.onDelete}
            onClose={this.props.onClose}
            onSubmit={this.onSubmit}
            buttonTitle={this.props.buttonTitle}
          />
        </ContentWrapper>
      </BaseModal>
    );
  }
}

export default withTheme()(CreateTask);
