import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

const DEFAULT_SIZE = 32;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 2px;
  align-items: center;
  display: flex;
  justify-content: center;
  user-select: none;
`;

const IconHeight = styled.div`
  height: 26px;
`;

const IconButton = ({
  icon,
  color,
  onClick,
  className,
  size = DEFAULT_SIZE,
}) => (
  <IconWrapper onClick={onClick} className={className}>
    <IconHeight>
      <MaterialIcon icon={icon} size={size} color={color} />
    </IconHeight>
  </IconWrapper>
);

export default IconButton;
