import mongoose from 'mongoose';

let connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/nft').then((e)=>{
        console.log("connected");
        console.log(e.connection.port);
    }).catch(e=>{
        console.log(e);
    })
}
export default connectDB;