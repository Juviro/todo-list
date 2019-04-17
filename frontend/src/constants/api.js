const IS_DEV = process.env.NODE_ENV === "dev";

export const SERVER_URL = IS_DEV ? "localhost" : "192.168.178.158";
