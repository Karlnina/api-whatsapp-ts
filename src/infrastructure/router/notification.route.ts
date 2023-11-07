import express, { Router } from "express";
import multer from "multer";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
import { auth } from "../middleware/auth.middleware";

const router: Router = Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

/**
 * http://localhost/notification POST
 */
const leadCtrl: LeadCtrl = container.get("notification.ctrl");
router.post("/", auth, leadCtrl.sendCtrl);
router.post("/upload", auth, upload.single('file'), leadCtrl.sendMedia);

export { router };
