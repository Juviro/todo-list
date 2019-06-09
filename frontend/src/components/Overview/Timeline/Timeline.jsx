import React from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";

import UserSquare from "../Timeline/UserSquare.jsx";

const RESELECT_FIRST_ITEM_TIMEOUT = 3000;
const UPDATE_INTERVAL = 10000;
const MAX_DISPLAYED_ITEMS = 8;

const grow = keyframes`
  0% {
    transform:  scale(0.5);
  }
  50% {
    transform:  scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;

const TimelineWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const ItemWrapper = styled.div`
  width: ${Math.floor(100 / MAX_DISPLAYED_ITEMS)}%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserSquareWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LastDoneWrapper = styled.div`
  margin-top: 5px;
  display: flex;
`;

const LastDone = styled.div`
  font-size: 12px;
  min-width: 70px;
  font-weight: 600;
  text-align: center;
  animation: ${grow} 0.1s linear;
`;

// TODO: split up into smaller chunks or move styled components to separate file
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    const sortedItems = this.sortItems(props.completed);
    const firstItem = sortedItems[0] && sortedItems[0].timestamp;

    this.state = {
      timeoutId: null,
      firstItem,
      selectedItem: firstItem,
    };
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), UPDATE_INTERVAL);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.completed.length !== this.props.completed.length) {
      const sortedItems = this.sortItems(this.props.completed);
      const newFirstItem = sortedItems[0] && sortedItems[0].timestamp;

      this.setState({ firstItem: newFirstItem, selectedItem: newFirstItem });
    }
  }

  sortItems(items) {
    return items
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, MAX_DISPLAYED_ITEMS);
  }

  onSelectCompletion(completionTimestamp) {
    clearTimeout(this.state.timeoutId);
    const timeoutId = setTimeout(
      () => this.setState({ selectedItem: this.state.firstItem }),
      RESELECT_FIRST_ITEM_TIMEOUT
    );
    this.setState({ selectedItem: completionTimestamp, timeoutId });
  }

  render() {
    const sortedItems = this.sortItems(this.props.completed);

    return (
      <TimelineWrapper>
        {sortedItems.map(
          ({ timestamp, user: { name, primaryColor } }, index) => {
            const isSelected = this.state.selectedItem === timestamp;
            return (
              <ItemWrapper key={timestamp}>
                <UserSquareWrapper>
                  <UserSquare
                    name={name}
                    index={index}
                    color={primaryColor}
                    isSelected={isSelected}
                    maxDisplayedItems={MAX_DISPLAYED_ITEMS}
                    onClick={() => this.onSelectCompletion(timestamp)}
                  />
                </UserSquareWrapper>
                <LastDoneWrapper>
                  {isSelected ? (
                    <LastDone>{moment(Number(timestamp)).fromNow()}</LastDone>
                  ) : null}
                </LastDoneWrapper>
              </ItemWrapper>
            );
          }
        )}
      </TimelineWrapper>
    );
  }
}

export default Timeline;