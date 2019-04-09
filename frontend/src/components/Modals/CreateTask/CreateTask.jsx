import React from "react";
import styled from "styled-components";

import { withTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import BaseModal from "../Base/Modal.js";
import ModalHeader from "../Base/ModalHeader";
import IntervalSelection from "./IntervalSelection";

import { TIME_UNITS } from "../../../constants/global";
import { getIntervalInMillies } from "../../../utils/time";

const ContentWrapper = styled.div`
  margin-top: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  height: 40px;
`;

class CreateTask extends React.Component {
  state = {
    taskName: "Wäsche waschen",
    intervalCount: 2,
    intervalUnit: TIME_UNITS.WEEK,
  };

  onChangeTaskName = event => {
    this.setState({ taskName: event.target.value });
  };

  onChangeIntervalCount = event => {
    this.setState({ intervalCount: event.target.value });
  };

  onChangeIntervalUnit = event => {
    this.setState({ intervalUnit: event.target.value });
  };

  onSubmit = () => {
    const interval = getIntervalInMillies(
      this.state.intervalCount,
      this.state.intervalUnit
    );

    this.props
      .onCreateTask({
        variables: { interval, description: this.state.taskName },
      })
      .then(this.props.onClose);
  };

  render() {
    return (
      <BaseModal onBackdropClick={this.props.onClose}>
        <ModalHeader>Neue Aufgabe hinzufügen</ModalHeader>,
        <ContentWrapper>
          <Input
            placeholder="Was muss erledigt werden?"
            value={this.state.taskName}
            onChange={this.onChangeTaskName}
            fullWidth
          />
          <IntervalSelection
            onChangeIntervalCount={this.onChangeIntervalCount}
            onChangeIntervalUnit={this.onChangeIntervalUnit}
            intervalCount={this.state.intervalCount}
            intervalUnit={this.state.intervalUnit}
          />
          <ButtonContainer>
            <Button color="secondary" onClick={this.props.onClose}>
              abbrechen
            </Button>
            <Button color="primary" onClick={this.onSubmit}>
              hinzufügen
            </Button>
          </ButtonContainer>
        </ContentWrapper>
      </BaseModal>
    );
  }
}

export default withTheme()(CreateTask);
