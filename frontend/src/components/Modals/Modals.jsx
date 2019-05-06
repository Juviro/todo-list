import React from "react";

import FinishTask from "./FinishTask/FinishTaskContainer";
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

export default ({ onCloseModal, currentModal, modalPayload }) => {
  const CurrentModal = getCurrentModal(currentModal);
  if (!CurrentModal) return null;

  return <CurrentModal onClose={onCloseModal} {...modalPayload} />;
};
