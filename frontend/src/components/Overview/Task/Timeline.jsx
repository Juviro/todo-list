import React from "react";
import styled from "styled-components";
import moment from "moment";

const RESELECT_FIRST_ITEM_TIMEOUT = 3000;
const UPDATE_INTERVAL = 10000;
const MAX_DISPLAYED_ITEMS = 8;

const getOpacityFromIndex = index => {
  return 1 - ((index + 1) / MAX_DISPLAYED_ITEMS) * 0.6;
};

const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ItemWrapper = styled.div`
  width: ${Math.floor(100 / MAX_DISPLAYED_ITEMS)}%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserSquareWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserSquare = styled.div.attrs(({ color, index }) => ({
  style: {
    backgroundColor: color,
    opacity: getOpacityFromIndex(index),
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

const LastDoneWrapper = styled.div`
  margin-top: 5px;
  display: flex;
`;

const LastDone = styled.span.attrs(({ isVisible }) => ({
  style: {
    opacity: isVisible ? 1 : 0,
  },
}))`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  min-width: 70px;
  transition: all 0.2s ease-in;
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
                    onClick={() => this.onSelectCompletion(timestamp)}
                    color={primaryColor}
                    index={index}
                    isSelected={isSelected}
                  >
                    {name.slice(0, 1)}
                  </UserSquare>
                </UserSquareWrapper>
                <LastDoneWrapper>
                  <LastDone isVisible={isSelected}>
                    {moment(Number(timestamp)).fromNow()}
                  </LastDone>
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
