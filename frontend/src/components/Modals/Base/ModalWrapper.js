import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const fadeInAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  user-select: text;
  border-radius: 12px;
  background: white;
  padding: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: ${({ width }) => width};
  max-width: 85%;
  animation: ${fadeInAnimation};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  outline: none;
`;

ModalWrapper.propTypes = {
  width: PropTypes.string,
};

ModalWrapper.defaultProps = {
  width: "auto",
};

export default ModalWrapper;
