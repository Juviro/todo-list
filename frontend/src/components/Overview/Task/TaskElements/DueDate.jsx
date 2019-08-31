import React from "react";
import moment from "moment";
import styled from "styled-components";
import { colors } from "../../../../constants/styles";

const DueDateWrapper = styled.div`
  display: inline-block;
  align-items: center;
  margin-left: 16px;
`;

const Span = styled.span`
  display: flex;
  font-size: 14px;
  margin-right: 5px
  justify-content: space-between;
  max-width: 24rem
  color: ${({ isOverdue }) => (isOverdue ? colors.error : "#888")}
  font-weight: ${({ isOverdue }) => (isOverdue ? "bold" : "normal")}
`;

const DueDate = ({ lastDone, interval }) => {
  const nextDueDate = Number(lastDone) + Number(interval);
  const isOverdue = nextDueDate < Date.now();

  return (
    <DueDateWrapper>
      <Span isOverdue={isOverdue}>Fällig {moment(nextDueDate).fromNow()}</Span>
    </DueDateWrapper>
  );
};

export default DueDate;
