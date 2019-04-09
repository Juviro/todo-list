import React from "react";

import FinishTask from "./FinishTask/FinishTask";
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

export default ({ onCloseModal, currentModal }) => {
  const CurrentModal = getCurrentModal(currentModal);
  if (!CurrentModal) return null;

  return <CurrentModal onClose={onCloseModal} />;
};
