import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    passowrd: String
})

const User = new mongoose.model("User", userSchema)

//routes
app.post("/login", (req, res)=> {
    res.send("My API login")
})


app.post("/register", (req, res)=> {
    const { name, email, Password} = req.body
    const user = new User({
        name,
        email,
        Password
    })
    user.save( err => {
        if(err) {
            res.send(err)
        } else{
            res.send( { message: "Sucesso no Registro"})
        }
    })
}) 


app.listen(9002, () => {
    console.log("BE started at port 9002")
})
