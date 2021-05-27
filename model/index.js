const mongoose=require("mongoose")
const host="mongodb://localhost:27017/MyUni"
mongoose.connect(host,{ useNewUrlParser: true,useUnifiedTopology: true},error=>{
    if(!error)console.log("success")
    else console.log("Error connecting to database")
})

const Course=require("./course.model")