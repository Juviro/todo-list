const IS_DEV = process.env.NODE_ENV === "dev";

const database = IS_DEV ? "tasklist-dev" : "tasklist-prod";

export default {
  uri: `mongodb+srv://Juviro:HD35twuZuQiAm6y@cluster0-lybnc.mongodb.net/${database}?retryWrites=true`,
};
