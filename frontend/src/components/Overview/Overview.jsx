import React from "react";
import styled from "styled-components";

import Item from "./Item/Item";
import { colors } from "../../constants/styles";

const OverviewWrapper = styled.div`
  width: 100%;
  min-height: 100%
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  align-content: stretch;
  background-color: ${colors.lightGray};
`;

class Overview extends React.Component {
  state = {
    items: [
      {
        title: "Geschirrspüler",
        progress: 0,
        dueDate: 1553854069317,
      },
      {
        title: "Katzen Füttern",
        progress: 50,
        dueDate: 1553814478319,
      },
      {
        title: "Altglas wegbringen",
        progress: 10,
        dueDate: 1553810825791,
      },
      {
        title: "Bier trinken",
        progress: 130,
        dueDate: 1553810825791,
      },
      {
        title: "Altglas wegbringen",
        progress: 30,
        dueDate: 1553810825791,
      },
      {
        title: "Altglas wegbringen",
        progress: 40,
        dueDate: 1553810825791,
      },
      // {
      //   title: "Obst kaufen",
      //   progress: 50,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 60,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 70,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Staubsaugen",
      //   progress: 80,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 90,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 100,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 110,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 120,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 130,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 140,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 150,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 160,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 170,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 180,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 190,
      //   dueDate: 1553810825791,
      // },
      // {
      //   title: "Altglas wegbringen",
      //   progress: 200,
      //   dueDate: 1553810825791,
      // },
    ],
  };

  render() {
    const displayItemsFullscreen = this.state.items.length < 4;
    const items = this.state.items.sort((a, b) => a.progress - b.progress);

    return (
      <OverviewWrapper>
        {items.map((item, index) => (
          <Item
            {...item}
            index={index}
            key={item.title}
            onFinishTask={this.props.onFinishTask}
            displayItemsFullscreen={displayItemsFullscreen}
          />
        ))}
      </OverviewWrapper>
    );
  }
}

export default Overview;
