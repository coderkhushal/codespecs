const { default: mongoose } = require("mongoose");



const connectdb= async()=> {
  try{

    await mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open",()=>{
      console.log("connected to database successfully")

    })
    mongoose.connection.on("error",()=>{
      console.log("connecting to database failed")
    })
  }catch(err){
    console.log("error occurred")
  }
  
  }
export default connectdb
