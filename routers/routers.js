const express=require("express")
const { route } = require("express/lib/application")
const router=express.Router()
const userController=require("../controller/controller")

router.post("/insert",userController.CreateUser)
router.post("/login",userController.login)
router.get("/user-get",userController.getAllData)
router.put('/user-updata/:id',userController.update_data)
router.delete('/user-delete/:id',userController.delete_data)

module.exports=router



// const express=require("express")
// // const { route } = require("express/lib/application")
// let {generateAccessToken, authenticateToken}=require('../jwt/auth')
// const router=express.Router()
// const userController=require("../controller/controller")

// router.post("/user-post",userController.sing)

// router.get("/user-get",userController.getAllData)
// router.put('/user-updata/:id',userController.update_data)
// router.delete('/user-delete/:id',userController.delete_data)
// router.post('/user-login/',userController.user_login)


// module.exports=router

