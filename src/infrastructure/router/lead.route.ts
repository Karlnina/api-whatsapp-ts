import express, { Router } from "express";
import multer from "multer";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
const router: Router = Router();
const upload = multer({ dest: 'uploads/' })

/**
 * http://localhost/lead POST
 */
const leadCtrl: LeadCtrl = container.get("notification.ctrl");
router.post("/", leadCtrl.sendCtrl);
router.post("/upload", upload.single('file'), leadCtrl.sendMedia);

export { router };
