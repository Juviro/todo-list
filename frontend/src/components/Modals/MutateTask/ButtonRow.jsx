import React, { useState } from "react";
import styled from "styled-components";

import IconButton from "../../General/Buttons/IconButton";
import Button from "@material-ui/core/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200%;
  transform: translateX(${({ showConfirm }) => (showConfirm ? "-50%" : "0%")});
  margin-top: 24px;
  height: 45px;
  transition-property: transform;
  transition-duration: 0.5s;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const LeftButtonsContainer = styled.div`
  display: flex;
  justify-content: left;
  height: 100%;
  align-items: center;
`;

export default ({ onClose, onSubmit, buttonTitle, onDelete, showDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <ButtonContainer showConfirm={showConfirm}>
      <ButtonGroup>
        <LeftButtonsContainer>
          {showDelete && (
            <IconButton icon="delete" onClick={() => setShowConfirm(true)} />
          )}
          <Button color="secondary" onClick={onClose}>
            abbrechen
          </Button>
        </LeftButtonsContainer>
        <Button color="primary" onClick={onSubmit}>
          {buttonTitle}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button color="primary" onClick={() => setShowConfirm(false)}>
          zurück
        </Button>
        <Button color="secondary" onClick={onDelete} variant="contained">
          aufgabe löschen
        </Button>
      </ButtonGroup>
    </ButtonContainer>
  );
};
