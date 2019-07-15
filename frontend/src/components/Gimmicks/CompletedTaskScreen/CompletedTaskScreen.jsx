import React from "react";
import styled, { keyframes, css } from "styled-components";

import DobbyImage from "../../../assets/img/Dobby.png";
import PikachuImage from "../../../assets/img/Pikachu.png";
import PeterImage from "../../../assets/img/Peter.png";
import PropperImage from "../../../assets/img/Propper.png";
import TrumpImage from "../../../assets/img/Trump.png";
import MarioImage from "../../../assets/img/Mario.png";
import OlafImage from "../../../assets/img/Olaf.png";
import BoratImage from "../../../assets/img/Borat.png";
import TaylorImage from "../../../assets/img/Taylor.gif";

import fireworks from "react-fireworks";

const DISPLAY_TIME = 10000;
const UNMOUNT_TIME = 5000;

const SCREEN_WRAPPER_ID = "dobby-wrapper";

const fadeInAnimation = keyframes`
  0% {
    transform:  scale(0);
  }
  50% {
    transform:  scale(0);
  }
  60% {
    transform:  scale(0.8);
  }
  65% {
    transform:  scale(1.1) rotate(5deg);
  }
  70% {
    transform: scale(1) rotate(-5deg);
  }
  75% {
    transform: scale(1) rotate(0);
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeOut = css`
  animation: ${fadeOutAnimation} 5s linear;
`;

const ScreenWrapper = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(64, 64, 64, 0.3);
  opacity: ${({ isUnmounting }) => (isUnmounting ? "0" : "1")};
  ${({ isUnmounting }) => (isUnmounting ? fadeOut : "")};
`;

const StyledImage = styled.img`
  top: 5%;
  height: 70%;
  z-index: 101;
  position: fixed;
  animation: ${fadeInAnimation} 2s linear;
`;

const StyledText = styled.span`
  bottom: 10%
  color: white;
  font-size: 5vw;
  position: fixed;
  font-weight: 600;
  text-shadow: 0px 0px 10px black;
`;

const screenOptions = [
  {
    image: DobbyImage,
    text: "Dobby wäre stolz auf dich. RIP",
  },
  {
    image: PikachuImage,
    text: "Pika-tastisch!",
  },
  {
    image: TaylorImage,
    text: "This is why we DO have nice things!",
  },
  {
    image: PeterImage,
    text: "Yay!",
  },
  {
    image: PropperImage,
    text: "Mr clean is proud!",
  },
  {
    image: TrumpImage,
    text: "The orange clown is delighted!",
  },
  {
    image: MarioImage,
    text: "Yippie!",
  },
  {
    image: BoratImage,
    text: "Nice!",
  },
  {
    image: OlafImage,
    text: "Awesome!",
  },
];

class CompletedTasksScreen extends React.Component {
  unmountTimeoutId = null;
  endTimeoutId = null;

  state = {
    onBeforeUnmount: false,
    ...this.getRandomOption(),
  };

  componentDidMount() {
    fireworks.init(SCREEN_WRAPPER_ID, {});
    fireworks.start();
    this.unmountTimeoutId = setTimeout(this.onBeforeUnmount, DISPLAY_TIME);
    this.endTimeoutId = setTimeout(
      this.endAnimation,
      UNMOUNT_TIME + DISPLAY_TIME
    );
  }

  componentWillUnmount() {
    this.endAnimation();
  }

  onBeforeUnmount = () => {
    fireworks.stop();
    this.setState({ onBeforeUnmount: true });
  };

  getRandomOption() {
    return screenOptions[Math.floor(Math.random() * screenOptions.length)];
  }

  endAnimation = () => {
    fireworks.stop();
    clearTimeout(this.unmountTimeoutId);
    clearTimeout(this.endTimeoutId);
    this.props.onFinishCompletedAnimation();
  };

  render() {
    const { text, image } = this.state;

    return (
      <ScreenWrapper
        isUnmounting={this.state.onBeforeUnmount}
        id={SCREEN_WRAPPER_ID}
        onClick={this.endAnimation}
      >
        <StyledImage src={image} alt="You're amazing!" />
        <StyledText>{text}</StyledText>
      </ScreenWrapper>
    );
  }
}

CompletedTasksScreen.defaultProps = {};

export default CompletedTasksScreen;
