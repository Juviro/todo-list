import { css } from "styled-components";

export const ButtonAnimation = css`
  @media (hover: hover) {
    &:hover {
      background-color: #dedede;
      transition: background-color 0.2s;
    }
  }

  &:active {
    background-color: #ccc;
  }
`;
