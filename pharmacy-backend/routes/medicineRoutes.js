import express from "express";
import {
  addMedicine,
  getAllMedicines,
  updateMedicine,
  deleteMedicine,
} from "../controllers/medicineController.js";

const router = express.Router();

// Add new medicine (accept both POST / and POST /add for compatibility)
router.post("/", addMedicine);
router.post("/add", addMedicine);

// Get all medicines
router.get("/", getAllMedicines);

// Update medicine by id
router.put("/:id", updateMedicine);

// Delete medicine by id
router.delete("/:id", deleteMedicine);

export default router;
