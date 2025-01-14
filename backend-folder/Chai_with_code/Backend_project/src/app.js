import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//.use is used for middlewares and configiration
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//middleware for accepting json
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




export {app}