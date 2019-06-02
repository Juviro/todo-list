const IS_DEV = process.env.NODE_ENV === "development";

export const SERVER_URL = IS_DEV
  ? "http://192.168.178.76:4000/graphql"
  : "https://hauke.uber.space/api/graphql";
