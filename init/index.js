const mongoose=require("mongoose");
const Listing=require("../models/Listing");
const initData=require("./data.js");

main()
.then(() =>{
    console.log("sucessful connected to db");
})
.catch((err) => {
    console.log(err);
});



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


const initDB = async () => {
    await Listing.deleteMany({});
    let initData1=initData.data.map((obj)=>({...obj,owner:"6a5c169e116e080977f82b70"}));
    await Listing.insertMany(initData1);
    console.log("data was initalized");
}

initDB();