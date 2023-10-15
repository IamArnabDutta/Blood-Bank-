const express = require("express");

const {
  getDonarsListController, getOrgListController, deleteDonarController, getHospitalListController,

 
} = require("../controllers/adminController");

const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { getHospitalController } = require("../controllers/inventoryController");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  
  getDonarsListController
);

//GET || HOSPITAL LIST
//GET || HOSPITAL LIST
router.get(
    "/hospital-list",
    authMiddleware,
    adminMiddleware,
    getHospitalListController
  );
  //GET || ORG LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);
// 
// DELETE DONAR || GET
router.delete(
    "/delete-donar/:id",
    authMiddleware,
    adminMiddleware,
    deleteDonarController
  );
  
// 
module.exports = router;
