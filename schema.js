const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const axios = require("axios");

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
    links: { type: LinkType },
  }),
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    description: { type: GraphQLString },
    first_flight: { type: GraphQLString },
  }),
});

//Link Type
const LinkType = new GraphQLObjectType({
  name: "Links",
  fields: () => ({
    mission_patch: { type: GraphQLString },
    mission_patch_small: { type: GraphQLString },
    wikipedia: { type: GraphQLString },
    youtube_id: { type: GraphQLString },
    article_link: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      async resolve(parent, args) {
        const res = await axios.get("https://api.spacexdata.com/v3/launches");
        const formattedRes = res.data.sort((a, b) =>
          a.launch_date_unix > b.launch_date_unix ? -1 : 1
        );
        return formattedRes.filter(
          (currentRes) =>
            new Date(currentRes.launch_date_utc) <
            new Date(new Date().toUTCString())
        );
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const res = await axios.get(
          `https://api.spacexdata.com/v3/launches/${args.flight_number}`
        );
        return res.data;
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      async resolve(parent, args) {
        const res = await axios.get("https://api.spacexdata.com/v3/rockets");
        return res.data;
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const res = await axios.get(
          `https://api.spacexdata.com/v3/rockets/${args.id}`
        );
        return res.data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
