import { mergeTypes } from "merge-graphql-schemas";

import Task from "./Task/";

const typeDefs = [Task];

export default mergeTypes(typeDefs, { all: true });
