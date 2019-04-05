import React from "react";
import styled from "styled-components";

const SubtitlesWrapper = styled.div`
  display: inline-block;
  align-items: center;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #888;
`;

const Subtitles = ({ title }) => (
  <SubtitlesWrapper>
    <Subtitle>Zuletzt erledigt: Sonntag, 13.03.</Subtitle>
    <Subtitle>Zu erledigen bis: Sonntag, 20.03.</Subtitle>
  </SubtitlesWrapper>
);

export default Subtitles;
