const {
  GraphQLObjectType,
  GraphQLInt,
  GRaphQLString,
  GraphQLBoolean,
  GraphQLList,
} = require("graphql");

const axios = require("axios");

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GRaphQLString },
    launch_year: { type: GRaphQLString },
    launch_date_local: { type: GRaphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
  }),
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GRaphQLString },
    rocket_name: { type: GRaphQLString },
    rocket_type: { type: GRaphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {},
    },
  },
});
