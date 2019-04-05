import React from "react";

import BaseModal from "./Base/Modal.js";
import FinishTask from "./FinishTask/FinishTaskContainer";
import CreateTask from "./CreateTask/CreateTaskContainer";

const getCurrentModal = currentModal => {
  switch (currentModal) {
    case "FINISH_TASK":
      return FinishTask;
    case "CREATE_TASK":
      return CreateTask;
    default:
      return null;
  }
};

/*
 * TODO: add prop that's true if the user has already entered data
 * to ensure no data is accidently lost when clicking the backdrop
 * maybe add a confirmation dialog if the user really wants to abort
 */

// TODO reverse this again. The component needs to pass too much down to the base modal

export default ({ onCloseModal, currentModal }) => {
  const CurrentModal = getCurrentModal(currentModal);
  if (!CurrentModal) return null;

  return (
    <BaseModal onBackdropClick={onCloseModal}>
      <CurrentModal onCloseModal={onCloseModal} />
    </BaseModal>
  );
};
