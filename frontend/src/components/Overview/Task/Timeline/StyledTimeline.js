import styled, { keyframes } from "styled-components";

export const MAX_DISPLAYED_ITEMS = 8;

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

export const TimelineWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

export const ItemWrapper = styled.div`
  width: ${Math.floor(100 / MAX_DISPLAYED_ITEMS)}%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const UserSquareWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LastDoneWrapper = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const LastDone = styled.div`
  font-size: 12px;
  min-width: 70px;
  font-weight: 600;
  text-align: center;
  animation: ${grow} 0.1s linear;
`;
