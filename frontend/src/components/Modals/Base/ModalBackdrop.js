import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  user-select: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: ${({ zIndex }) => zIndex};
`;

Backdrop.defaultProps = {
  zIndex: 100,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
};

const fadeInAnimation = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0);
    }
    100% {
        background-color: rgba(0, 0, 0, 0.7);
    }
`;

export default styled(Backdrop)`
  animation: ${fadeInAnimation};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`;
