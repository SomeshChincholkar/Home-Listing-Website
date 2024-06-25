const mongoose = require("mongoose")
const initData = require("./data.js")
const Listing = require("../models/listing.js")     // .. is imp

const MONGO_URL = "mongodb://127.0.0.1:27017/myAirBnb";

async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("connected to DB")
}).catch((err) =>{
    console.log(err)
})

const initDB = async ()=>{
    await Listing.deleteMany({})           
    initData.data = initData.data.map((obj) => ({...obj, owner: "667808a500e42ea23c034209"}))       
    await Listing.insertMany(initData.data)
    console.log("Data was initialized")
}

initDB();

