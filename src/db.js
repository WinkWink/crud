const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbName = "crud_mongodb";
// where db is located on local machine 
const url = "mongodb://localhost:27017";
const mongoOptions = {useUnifiedTopology: true, useNewUrlParser : true};

const state  = {
    db: null
};

const connect = (cb) => {
    if(state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOptions, (err,client) => {
            if(err)
                cb(err);
            else{
                state.db = client.db(dbName);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}

const getDB = () => {
    return state.db;
}

// expose functions
module.exports = {getDB, connect, getPrimaryKey};

