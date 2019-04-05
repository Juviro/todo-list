import React from "react";
import PropTypes from "prop-types";
import ModalWrapper from "./ModalWrapper";
import ModalBackdrop from "./ModalBackdrop";

const ModalSizes = {
  auto: "auto",
  small: "400px",
  medium: "800px",
  large: "1200px",
};

class Modal extends React.Component {
  isOngoingBackdropClick = false;

  stopPropagation = event => {
    event.stopPropagation();
  };

  stopPropagationAndResetBackdropClick = event => {
    this.stopPropagation(event);
    this.isOngoingBackdropClick = false;
  };

  startBackdropClick = event => {
    this.isOngoingBackdropClick = true;
  };

  finishBackdropClick = event => {
    event.preventDefault();
    if (this.isOngoingBackdropClick) {
      this.props.onBackdropClick(event);
      this.isOngoingBackdropClick = false;
    }
  };

  render() {
    return (
      <ModalBackdrop
        zIndex={this.props.zIndex}
        onMouseDown={this.startBackdropClick}
        onMouseUp={this.finishBackdropClick}
        onTouchStart={this.startBackdropClick}
        onTouchEnd={this.finishBackdropClick}
      >
        <ModalWrapper
          width={ModalSizes[this.props.size]}
          onKeyDown={this.props.onKeyDown}
          onClick={this.stopPropagation}
          onMouseDown={this.stopPropagation}
          onMouseUp={this.stopPropagationAndResetBackdropClick}
          onTouchStart={this.stopPropagation}
          onTouchEnd={this.stopPropagationAndResetBackdropClick}
          fullscreen={this.props.fullscreen}
          overflow={this.props.overflow}
          tabIndex={0}
          onAnimationEnd={() => {
            this.props.onReady();
          }}
        >
          {this.props.children}
        </ModalWrapper>
      </ModalBackdrop>
    );
  }
}

Modal.propTypes = {
  size: PropTypes.string,
  zIndex: PropTypes.number,
  onBackdropClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onReady: PropTypes.func,
  fullscreen: PropTypes.bool,
  overflow: PropTypes.string,
};

Modal.defaultProps = {
  fullscreen: false,
  size: "small",
  zIndex: 1000,
  onBackdropClick: () => {},
  onKeyDown: () => {},
  onReady: () => {},
  overflow: "auto",
};

export default Modal;
