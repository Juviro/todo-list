import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 150px;
  overflow-x: hidden;
`;

const TitleComponent = styled.div`
  font-size: 24px;
  margin: 0 0 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = ({ description }) => {
  return (
    <TitleWrapper>
      <TitleComponent>{description}</TitleComponent>
    </TitleWrapper>
  );
};

export default Title;
