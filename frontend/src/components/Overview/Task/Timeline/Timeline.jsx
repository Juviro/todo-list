import React from "react";

import moment from "moment";

import UserSquare from "./UserSquare.jsx";

import {
  TimelineWrapper,
  ItemWrapper,
  UserSquareWrapper,
  LastDoneWrapper,
  LastDone,
  MAX_DISPLAYED_ITEMS,
} from "./StyledTimeline";

const RESELECT_FIRST_ITEM_TIMEOUT = 3000;
const UPDATE_INTERVAL = 10000;

class Timeline extends React.Component {
  timeoutId;

  constructor(props) {
    super(props);
    const sortedItems = this.sortAndSliceItems(props.completed);
    const firstItem = sortedItems[0] && sortedItems[0].timestamp;

    this.state = {
      firstItem,
      selectedItem: firstItem,
    };
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), UPDATE_INTERVAL);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.completed.length !== this.props.completed.length) {
      const sortedItems = this.sortAndSliceItems(this.props.completed);
      const newFirstItem = sortedItems[0] && sortedItems[0].timestamp;

      this.setState({ firstItem: newFirstItem, selectedItem: newFirstItem });
    }
  }

  sortAndSliceItems(items) {
    return items
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, MAX_DISPLAYED_ITEMS);
  }

  onSelectItem(completionTimestamp) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(
      () => this.setState({ selectedItem: this.state.firstItem }),
      RESELECT_FIRST_ITEM_TIMEOUT
    );
    this.setState({ selectedItem: completionTimestamp });
  }

  render() {
    const sortedItems = this.sortAndSliceItems(this.props.completed);

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
                    onClick={() => this.onSelectItem(timestamp)}
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
