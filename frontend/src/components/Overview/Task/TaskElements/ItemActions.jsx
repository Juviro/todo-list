import React from "react";
import styled from "styled-components";
import IconButton from "../../../General/Buttons/IconButton";

const ItemActionsWrapper = styled.div`
  height: 60px;
  width: calc(50% - 32px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ItemActions = ({ openModal, taskId }) => {
  const onClick = name => {
    openModal({ variables: { name, payload: { _id: taskId } } });
  };

  return (
    <ItemActionsWrapper>
      <IconButton icon="create" onClick={() => onClick("UPDATE_TASK")} />
      <IconButton icon="check" onClick={() => onClick("FINISH_TASK")} />
    </ItemActionsWrapper>
  );
};

export default ItemActions;
