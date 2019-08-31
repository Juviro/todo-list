import styled, { keyframes } from "styled-components";

const grow = keyframes`
0% {
  transform:  scale(0.5);
}
80% {
  transform:  scale(1.2);
}
100% {
  transform: scale(1);
}
`;

export const TaskWrapper = styled.div`
  margin: 10px;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: #fff;
  width: calc(50% - 56px);
  border: 2px solid #e7e7e7;
  box-shadow: 3px 3px 10px -2px #ddd;

  animation: ${grow} 0.3s linear;

  @media (max-width: 700px) {
    width: calc(100% - 56px);
  }
`;

export const TopRowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
