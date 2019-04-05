import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

const DEFAULT_SIZE = 32;

const ItemWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 2px;
  align-items: center;
  display: flex;
  justify-content: center;
  user-select: none;
`;

const IconButton = ({
  icon,
  onClick,
  size = DEFAULT_SIZE,
  color,
  className,
}) => (
  <ItemWrapper onClick={onClick} className={className}>
    <MaterialIcon icon={icon} size={size} color={color} />
  </ItemWrapper>
);

export default IconButton;
