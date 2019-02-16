const express = require("express");
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');
const config = require( './DB' );

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect( config.DB, { useNewUrlParser: true } ).then(
    () => { console.log( 'Database is connected' ) },
    err => { console.log( 'Can not connect to the database' + err ) }
);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log(`Server started on port - 4000`);
});