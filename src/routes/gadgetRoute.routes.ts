/*
    • Importing a Router which is responsible for routing 

    • Imported all the controllers which will run on the basis of API method call and route path

    • Router needs to first configure which is done in line number 17

    • Then each route will be use the same router variable and route path will be specified in the parenthesis of route() method and as the chain continues to add the method name which we are expecting, Here I am making different method call for the same path and each method will have decicated logic function which is written in a gadegetController.ts file

*/



import { Router } from "express"; 
import { deleteGadget, getGadget, patchGadget, postGadget, selfDestruct } from "../controllers/gadget.controller";
import middlewareAuth from "../middleware/authentication";

const router = Router()

router.route("/").get(getGadget)
router.route("/").post(middlewareAuth,postGadget)
router.route("/:id").patch(middlewareAuth,patchGadget)
router.route("/:id").delete(middlewareAuth,deleteGadget)
router.route("/:id/self-destruct").post(selfDestruct)


export default router