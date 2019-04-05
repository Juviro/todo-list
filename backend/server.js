import { GraphQLServer, PubSub } from "graphql-yoga";
import mongoose from "mongoose";

import schema from "./graphql";
import { models } from "./graphql/models";

// TODO move to config
const dbPassword = "HD35twuZuQiAm6y";
const db = `mongodb+srv://Juviro:${dbPassword}@cluster0-lybnc.mongodb.net/task?retryWrites=true`;

const options = {
  port: process.env.PORT || "4000",
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

const context = {
  models,
  pubsub: new PubSub(),
};

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const server = new GraphQLServer({
  schema,
  context,
});

server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
