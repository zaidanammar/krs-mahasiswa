const express=require("express")
const session = require('express-session')
const app=express()
const PORT= process.env.PORT || 3000

const routes=require("./routes/index")

//css
app.use(express.static(__dirname + '/css'));

//view engine
app.set("view engine","ejs")

//middleware
app.use(express.urlencoded({extended:false}))
app.use(session ({
    secret: 'Krs Mahasiswa',
    resave: false,
    saveUninitialized: true
  }))

//route
app.use("/",routes)

app.listen(PORT, function(){
    console.log("listening at port,",PORT)
})