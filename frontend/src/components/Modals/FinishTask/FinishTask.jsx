import React from "react";
import styled from "styled-components";

import BaseModal from "../Base/Modal.js";
import ModalHeader from "../Base/ModalHeader";
import UserCard from "./UserCard";

const ContentWrapper = styled.div`
  margin-top: 24px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

class FinishTask extends React.Component {
  state = {
    isLoading: false,
  };

  onFinish = user => {
    this.setState({ isLoading: true });
    this.props
      .onFinish({ variables: { _id: this.props._id, user } })
      .then(this.startCompletedGimmick)
      .then(this.props.onClose);
  };

  startCompletedGimmick = () => {
    if (Math.random() > 0.2) return;
    this.props.startCompletedGimmick();
  };

  render() {
    const taskName = this.props.task ? this.props.task.description : "Aufgabe";
    const users = this.props.users.data || [];
    const sortedUsers = users.sort(({ name: nameA }, { name: nameB }) =>
      nameA < nameB ? -1 : 1
    );

    return (
      <BaseModal
        onBackdropClick={this.props.onClose}
        loading={this.props.users.loading}
        size="medium"
      >
        <ModalHeader>
          Welches fleißige Bienchen hat "{taskName}" erledigt?
        </ModalHeader>
        <ContentWrapper>
          {sortedUsers.map(user => (
            <UserCard
              {...user}
              key={user.name}
              onClick={() =>
                this.state.isLoading ? undefined : this.onFinish(user._id)
              }
            />
          ))}
        </ContentWrapper>
      </BaseModal>
    );
  }
}

export default FinishTask;
