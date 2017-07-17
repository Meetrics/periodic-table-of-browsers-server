import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './graphQLSchema/schema';
import cors from 'cors';

const app = express();
const port = 4000;
const resourceName = "/graphql";

//enable cors for development, should be denied in production
app.use(cors());

app.use(resourceName, graphqlHTTP({
  schema: Schema,
  //enables browser interface for performing queries, should be disabled in production
  graphiql: true
}));


module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('graphQLServer is running on port ' + port + ', graphQLInterface can be found under http://localhost:' + port + resourceName);
});
