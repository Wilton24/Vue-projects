import { config } from "dotenv";
import express from "express";
import cors from 'cors';
// import routeTesting from "./routes/heroesRoutes.js"
// import { users } from "./db/userDb.js";
// import {hashAuthSample,registrationController,loginController} from "./controller/authController.js";
// import {authenticateToken} from "./middleware/authMiddleware.js";


const sampleMiddleware = (req: any, res: any, next: () => void)=>{
  console.log("middleware working");
  next()
}

function sayHello(): string{
  console.log('Hello :D')
  return "Hello"
}


sayHello();
const app = express();
config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));   
app.use(cors());


// app.get('/users', sampleMiddleware, (req,res)=>{
//   res.json({users: users})
// })

// app.post('/whatUser', async(req,res)=>{
//   const user = users.filter(user=> user.username == req.user.username);
//   res.json(user);
// })

// app.get('/hashSample',  async(req,res)=>{
//   hashAuthSample(req,res);
// })
// app.post('/registration', async (req,res)=>{
//   registrationController(req,res);
// })


// app.post('/login', async(req, res)=>{
//   loginController(req,res)
// })

// app.use('/heroesRoute', routeTesting)


app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`); 
})