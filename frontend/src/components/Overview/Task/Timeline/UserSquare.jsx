import React from "react";
import styled from "styled-components";

const UserSquareDiv = styled.div.attrs(({ color, opacity }) => ({
  style: {
    backgroundColor: color,
    opacity,
  },
}))`
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-out;
  width: ${({ isSelected }) => (isSelected ? 38 : 32)}px;
  height: ${({ isSelected }) => (isSelected ? 38 : 32)}px;
  font-size: ${({ isSelected }) => (isSelected ? 26 : 24)}px;

  @media (max-width: 500px) {
    width: 28px;
    height: 28px;
    font-size: 20px;
    width: ${({ isSelected }) => (isSelected ? 34 : 28)}px;
    height: ${({ isSelected }) => (isSelected ? 34 : 28)}px;
    font-size: ${({ isSelected }) => (isSelected ? 22 : 20)}px;
  }
`;

const UserSquare = ({
  maxDisplayedItems,
  onClick,
  index,
  isSelected,
  color,
  name,
}) => {
  const getOpacityFromIndex = i => {
    return 1 - ((i + 1) / maxDisplayedItems) * 0.6;
  };

  return (
    <UserSquareDiv
      onClick={onClick}
      color={color}
      isSelected={isSelected}
      maxDisplayedItems={maxDisplayedItems}
      opacity={getOpacityFromIndex(index)}
    >
      {name.slice(0, 1)}
    </UserSquareDiv>
  );
};

UserSquare.defaultProps = {
  onClick: () => {},
  index: 0,
  maxDisplayedItems: 10,
};

export default UserSquare;
