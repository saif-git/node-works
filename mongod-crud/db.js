var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOption = { useNewUrlParser: true };
const state = {
    db: null
};

const connect = (cb) => {
    if (state.db) {

        cb();
    } else {
        MongoClient.connect(url, mongoOption, (err, client) => {

            if (err) {
                cb(err)

            } else {

                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

const getDb = () => {

    return state.db;
}

module.exports = { getDb, connect, getPrimaryKey };