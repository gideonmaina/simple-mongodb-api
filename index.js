const connection=require("./model")
const express=require("express")
const bodyparser=require("body-parser")
const handlebars=require("express-handlebars")
const path=require("path")
const app=express();
const CourseController=require("./controllers/courses")
app.set('views',path.join(__dirname,'/views/'))
app.set("view engine", "hbs")
app.engine("hbs",handlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts"
}))

app.use("/course",CourseController)
app.use(express.urlencoded({extended:true}))
// app.use(express.json())
app.get("/",(req,res)=>{
    // res.send("<h1>Hello World</h1>")
    res.render("index",{layout:"mainlayout"})
})
app.listen("3000",()=>console.log("Server started"))
