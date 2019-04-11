import React from "react";
import styled from "styled-components";

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

// TODO if interval < 24 h print hours
const Subtitles = ({ lastDone, interval }) => {
  const lastDoneString = new Date(Number(lastDone)).toLocaleDateString(
    DATE_LOCATION,
    DATE_FORMATTING_OPTIONS
  );

  const endDateString = new Date(
    Number(lastDone) + Number(interval)
  ).toLocaleDateString(DATE_LOCATION, DATE_FORMATTING_OPTIONS);

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
