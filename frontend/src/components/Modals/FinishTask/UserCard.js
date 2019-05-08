import React from "react";
import styled from "styled-components";

import Portrait1 from "../../../assets/portraits/torben.jpg";
import Portrait2 from "../../../assets/portraits/antje.jpg";
import Portrait3 from "../../../assets/portraits/opa.jpg";

const PROFILE_IMAGES = {
  Sarah: Portrait2,
  Hauke: Portrait1,
  Ben: Portrait3,
};

const UserCard = styled.div`
  // height: 35vw;
  width: 30vw;
  max-height: 70vh;
  max-width: 50vh;
  margin: 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 0px 9px 2px #afafaf;
  cursor: pointer;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      transform: scale(0.98);
      transition: transform 0.2s;
    }
  }

  &:active {
    transform: scale(0.96);
    transition: transform 0.2s;
  }
`;

const PortraitWrapper = styled.div`
  height: 70%;
  width: 70%;
  border-radius: 50%;
  overflow: hidden;
`;

const UserPortrait = styled.div`
  height: 100%;
  background: url(${({ image }) => image}) no-repeat 50% 50%;
  background-size: cover;
`;

const UserName = styled.span`
  font-size: calc((4vw + 4vh) / 2);
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  height: 15%;
`;

export default ({ name, onClick }) => {
  return (
    <UserCard onClick={onClick}>
      {/* <PortraitWrapper>
        <UserPortrait image={PROFILE_IMAGES[name]} />
      </PortraitWrapper> */}
      <NameWrapper>
        <UserName>{name}</UserName>
      </NameWrapper>
    </UserCard>
  );
};
