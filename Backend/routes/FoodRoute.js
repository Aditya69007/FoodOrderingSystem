import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/FoodController.js'
import multer from 'multer' // to store the image


const foodRouter = express.Router();

//Image storage Engine
const storage = multer.diskStorage({
    destination:"uploads", //this is the imp part
    filename:(req,file,callback)=>{
        return callback(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)






export default foodRouter;