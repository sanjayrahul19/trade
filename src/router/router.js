import { Router } from "express";
export const router = Router();
import { addData } from "../controller/add-data";
import { getData } from "../controller/get-data";

router.post("/add-data", addData);
router.get("/get-data", getData);
