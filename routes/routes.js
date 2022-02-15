import express from "express";
import {GetEvents, CreateEvent, UpdateEvent,DeleteEvent} from "../controllers/controllers.js";

const router = express.Router();


router.get('/',GetEvents);
router.post('/',CreateEvent);
router.patch('/:id',UpdateEvent);
router.delete('/:id',DeleteEvent);


export default router;