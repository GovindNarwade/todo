const express = require("express")
const {CreatetodoDetails,ViewtodoDetails,updatetodoDetails,deletetodoDetails} = require("../controller/todo_controller")
const router = express.Router()
router.route("/ViewtodoDetails").get(ViewtodoDetails)
// get the All task use following API
// http://localhost:5000/api/v1/ViewtodoDetails
 router.route("/CreatetodoDetails").post(CreatetodoDetails)
 // Create a new  task use following API
// http://localhost:5000/api/v1/CreatetodoDetails
  router.route("/updatetodoDetails").put(updatetodoDetails)
   // update a   task deatils using todoId in req.body use following API
// http://localhost:5000/api/v1/updatetodoDetails
 router.route("/deletetodoDetails/:todoId").delete(deletetodoDetails)
  // delete a   task deatils using todoId in req.params use following API
// http://localhost:5000/api/v1//deletetodoDetails/:todoId

module.exports = router

