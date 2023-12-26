const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/quizDB").then(()=>{
    console.log("Connected to quizDB");
}).catch((e)=>{
    console.log(e);
})

