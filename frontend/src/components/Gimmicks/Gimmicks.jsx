import React from "react";

import CompletedTaskScreen from "./CompletedTaskScreen/CompletedTaskScreen.jsx";

export default ({ onFinishCompletedAnimation, isCompletedAnimationActive }) => {
  return (
    <>
      {isCompletedAnimationActive && (
        <CompletedTaskScreen
          onFinishCompletedAnimation={onFinishCompletedAnimation}
        />
      )}
    </>
  );
};
