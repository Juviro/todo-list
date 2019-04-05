import { mergeResolvers } from "merge-graphql-schemas";

import Task from "./Task/";

const resolvers = [Task];

export default mergeResolvers(resolvers);
