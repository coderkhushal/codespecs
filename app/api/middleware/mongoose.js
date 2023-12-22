const { default: mongoose } = require("mongoose");



const connectdb= async()=> {
  try{

    await mongoose.connect(process.env.MONGO_URI);
    
  }catch(err){
    console.log("error occurred")
  }
  
  }
export default connectdb
