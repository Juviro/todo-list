import React from "react";
import styled from "styled-components";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { TIME_UNITS } from "../../../constants/global";

const IntervalSelection = styled.div`
  margin-top: 24px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

const ElementWrapper = styled.div`
  width: 33.3%;
  height: 100%;
`;

const intervalCountOptions = [1, 2, 3, 4, 5, 6];
const intervalUnitOptions = Object.values(TIME_UNITS);

export default ({
  onChangeIntervalUnit,
  onChangeIntervalCount,
  intervalCount,
  intervalUnit,
}) => {
  return (
    <IntervalSelection>
      <ElementWrapper>
        <span>Alle</span>
      </ElementWrapper>
      <ElementWrapper>
        <Select
          autoWidth
          onChange={onChangeIntervalCount}
          value={intervalCount}
        >
          {intervalCountOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </ElementWrapper>
      <ElementWrapper>
        <Select autoWidth onChange={onChangeIntervalUnit} value={intervalUnit}>
          {intervalUnitOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </ElementWrapper>
    </IntervalSelection>
  );
};
