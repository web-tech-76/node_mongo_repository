import AppApolloServer from "./apollo/AppApolloServer.js";

let url = '';
try {
    AppApolloServer().then(value => {
        url = value.url;
        console.log(`🚀  Server ready at: ${url}`);
        return value;
    });
} catch (error) {
    console.log(error);

}

