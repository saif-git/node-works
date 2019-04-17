var express = require('express');
var express_graph = require('express-graphql');
var app = express();
var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query{
           message:String
            }
 `)

var root = { message: () => 'helloworld' }
app.get('/', (req, res) => { res.send('hello every bodylotion') })
app.use('/graphql', express_graph({

    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, function() { console.log("4000") })