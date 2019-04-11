import React from "react";

import FinishTask from "./FinishTask/FinishTask";
import CreateTask from "./MutateTask/CreateTaskContainer";
import UpdateTask from "./MutateTask/UpdateTaskContainer";

const getCurrentModal = currentModal => {
  switch (currentModal) {
    case "FINISH_TASK":
      return FinishTask;
    case "CREATE_TASK":
      return CreateTask;
    case "UPDATE_TASK":
      return UpdateTask;
    default:
      return null;
  }
};

/*
 * TODO: Add a prop that's true if the user has already entered data
 * to ensure no data is accidently lost when clicking the backdrop.
 * Maybe add a confirmation dialog if the user really wants to abort.
 */

export default ({ onCloseModal, currentModal, modalPayload }) => {
  const CurrentModal = getCurrentModal(currentModal);
  if (!CurrentModal) return null;

  return <CurrentModal onClose={onCloseModal} {...modalPayload} />;
};
