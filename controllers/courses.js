const express=require("express")
const mongoose=require("mongoose")

const router=express.Router();
const CourseModel=mongoose.model("Course")
router.get("/list",(req,res)=>{
    CourseModel.find((err,docs)=>{
        if(!err){
            // res.send("course controller")
            
            // console.log(docs)
            res.render("list",{data:docs[0]})
        }
        else{
            res.send("Error loading course list")
        }
    })
})

router.get("/add",(req,res)=>{
    res.render("addcourse")
 
})
router.post("/add",(req,res)=>{
    console.log("Body request: ",req.body)
    // res.json(req.body)
    let course= new CourseModel()
    course.courseName="Backend dev";
    course.courseDuration="128min"
    course.courseFee="$25";
    // course.courseName=req.body.courseName;
    // course.courseDescription=req.body.courseDescription
    // course.courseFee=req.body.courseFee;
    course.courseId=Math.ceil(Math.random()*1000000)
    course.save((error,docs)=>{
        if(!error)res.redirect("/course/list")
        else res.send("Error adding course")
    })
  
    
}
)



module.exports=router;