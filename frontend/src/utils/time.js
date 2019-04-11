import { TIME_UNITS } from "../constants/global";

const HOUR_IN_MILLIES = 60 * 60 * 1000;
const DAY_IN_MILLIES = 24 * HOUR_IN_MILLIES;
const WEEK_IN_MILLIES = 7 * DAY_IN_MILLIES;
const MONTH_IN_MILLIES = 30 * DAY_IN_MILLIES;

const TIME_MAPPING = {
  [TIME_UNITS.DAY]: DAY_IN_MILLIES,
  [TIME_UNITS.WEEK]: WEEK_IN_MILLIES,
  [TIME_UNITS.MONTH]: MONTH_IN_MILLIES,
};

export const getIntervalInMillies = (intervalCount, intervalUnit) => {
  return String((intervalCount * TIME_MAPPING[intervalUnit]) / 100);
  // return String(intervalCount * TIME_MAPPING[intervalUnit]);
};

const intervalMap = {};
for (let intervalCount = 1; intervalCount < 7; intervalCount++) {
  for (let j = 0; j < 3; j++) {
    const intervalUnit = Object.values(TIME_UNITS)[j];
    const interval = getIntervalInMillies(intervalCount, intervalUnit);
    intervalMap[interval] = { intervalUnit, intervalCount };
  }
}

export const getIntervalInUnits = interval => {
  return (
    intervalMap[interval] || { intervalUnit: TIME_UNITS.WEEK, intervalCount: 2 }
  );
};
