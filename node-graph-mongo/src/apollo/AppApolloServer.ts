import gql from "graphql-tag";
import {readFileSync} from "fs";
import {ApolloServer, type BaseContext} from "@apollo/server";
import bookResolvers from "../resolvers/resolvers.js";
import {startStandaloneServer} from "@apollo/server/standalone";


const AppApolloServer = async (): Promise<{ url: string }> => {
    const PORT = process.env.PORT || 4000;
    const schemaName = process.env.SCHEMA || '';

    const typeDefs = gql(readFileSync(schemaName,
        {encoding: "utf-8",}));

    const server: ApolloServer<BaseContext> = new ApolloServer({
        typeDefs,
        resolvers: bookResolvers,
    });

    return await startStandaloneServer(server, {
        listen: {port: +PORT},
    });

}

export default AppApolloServer;