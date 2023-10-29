import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI = `mongodb://vedantikas:miniandmolu31@ac-0radzwe-shard-00-00.l4dkqoh.mongodb.net:27017,ac-0radzwe-shard-00-01.l4dkqoh.mongodb.net:27017,ac-0radzwe-shard-00-02.l4dkqoh.mongodb.net:27017/?ssl=true&replicaSet=atlas-f8f3sj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true});
        console.log('Database Connected Successfully');

    } catch (error) {
        console.error('Error while connecting with the database  ', error.message);
    }
}

export default DBConnection;