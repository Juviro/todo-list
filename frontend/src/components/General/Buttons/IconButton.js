import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import { ButtonAnimation } from "./Animations";

const IconButtonComponent = styled(Icon)`
  border-radius: 50%;
  cursor: pointer;
  ${ButtonAnimation}
`;

const IconButton = ({ icon, onClick }) => (
  <IconButtonComponent onClick={onClick} icon={icon} size={32} />
);

export default IconButton;
