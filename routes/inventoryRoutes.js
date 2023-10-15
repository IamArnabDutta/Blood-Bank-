const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require("../controllers/inventoryController");

const router = express.Router();

router.post('/create-inventory',authMiddleware,createInventoryController)

router.get('/get-inventory',authMiddleware,getInventoryController)
//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
 getRecentInventoryController
);

//GET orgnaisation RECORDS
router.get(
    "/get-orgnaisation-for-hospital",
    authMiddleware,
   getOrgnaisationForHospitalController
  );

  //GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddleware,
    getInventoryHospitalController
  );

module.exports = router;

