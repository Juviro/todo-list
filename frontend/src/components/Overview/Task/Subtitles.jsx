import React from "react";
import styled from "styled-components";
import { DAY_IN_MILLIES } from "../../../utils/time";

const SubtitlesWrapper = styled.div`
  display: inline-block;
  align-items: center;
  width: 100%;
`;

const Subtitle = styled.div`
  color: #888;
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-right: 5px
  justify-content: space-between;
  max-width: 24rem
`;

const Substring = styled.div`
  ${props => (props.bold ? "font-weight: bold;" : "")}
`;

const DATE_LOCATION = "de-DE";
const DATE_FORMATTING_OPTIONS = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const DATE_HOUR_FORMATTING_OPTIONS = {
  ...DATE_FORMATTING_OPTIONS,
  hour: "numeric",
  minute: "numeric",
};

const Subtitles = ({ lastDone, interval }) => {
  const showHours = lastDone + interval < Date.now() + DAY_IN_MILLIES;

  const dateFormattingOptions = showHours
    ? DATE_HOUR_FORMATTING_OPTIONS
    : DATE_FORMATTING_OPTIONS;

  const lastDoneString = new Date(lastDone).toLocaleDateString(
    DATE_LOCATION,
    dateFormattingOptions
  );

  const endDateString = new Date(lastDone + interval).toLocaleDateString(
    DATE_LOCATION,
    dateFormattingOptions
  );

  return (
    <SubtitlesWrapper>
      <Subtitle>
        <Substring>Zuletzt erledigt:</Substring>
        <Substring bold>{lastDoneString}</Substring>
      </Subtitle>
      <Subtitle>
        <Substring>Zu erledigen bis:</Substring>
        <Substring bold>{endDateString}</Substring>
      </Subtitle>
    </SubtitlesWrapper>
  );
};

export default Subtitles;
