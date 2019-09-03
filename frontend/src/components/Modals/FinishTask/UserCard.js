import React from "react";
import styled from "styled-components";

const UserCard = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.color
  }
}))`
  flex: 1;
  margin: 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  user-select: none;
  color: white;
  border-radius: 0;
  padding: 5px 20px;

  @media (hover: hover) {
    &:hover {
      transform: scale(0.98);
      transition: transform 0.2s;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 16px;
  }

  &:active {
    transform: scale(0.96);
    transition: transform 0.2s;
  }
`;

const UserName = styled.span`
  font-size: 2rem;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`;

export default ({ primaryColor, name, onClick }) => {
  return (
    <UserCard onClick={onClick} color={primaryColor}>
      <NameWrapper>
        <UserName>{name}</UserName>
      </NameWrapper>
    </UserCard>
  );
};
