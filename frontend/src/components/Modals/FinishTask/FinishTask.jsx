import React from "react";
import styled from "styled-components";

import BaseModal from "../Base/Modal.js";
import ModalHeader from "../Base/ModalHeader";
import UserCard from "./UserCard";

const ContentWrapper = styled.div`
  margin-top: 24px;
  overflow: hidden;
  display: flex;
`;

class FinishTask extends React.Component {
  onFinish = user => {
    this.props
      .onFinish({ variables: { _id: this.props._id, user } })
      .then(this.props.onClose);
  };

  render() {
    const taskName = this.props.task ? this.props.task.description : "Aufgabe";
    const users = this.props.users.data || [];

    return (
      <BaseModal
        onBackdropClick={this.props.onClose}
        loading={this.props.users.loading}
        size="auto"
      >
        <ModalHeader>
          Welches fleißige Bienchen hat "{taskName}" erledigt?
        </ModalHeader>
        <ContentWrapper>
          {users.map(user => (
            <UserCard
              {...user}
              key={user.name}
              onClick={() => this.onFinish(user._id)}
            />
          ))}
        </ContentWrapper>
      </BaseModal>
    );
  }
}

export default FinishTask;
