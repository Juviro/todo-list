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
  onFinish = () => {
    this.props
      .onFinish({ variables: { _id: this.props._id } })
      .then(this.props.onClose);
  };

  render() {
    const taskName = this.props.task ? this.props.task.description : "Aufgabe";
    const users = this.props.users.data || [];

    return (
      <BaseModal
        onBackdropClick={this.props.onClose}
        size="auto"
        loading={this.props.users.loading}
      >
        <ModalHeader>{taskName} abschließen</ModalHeader>
        <ContentWrapper>
          {users.map(user => (
            <UserCard key={user.name} {...user} />
          ))}
        </ContentWrapper>
      </BaseModal>
    );
  }
}

export default FinishTask;
