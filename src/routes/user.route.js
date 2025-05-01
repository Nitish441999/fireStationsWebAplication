import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getCurrentUser,
  userLogin,
  verifyOTP,
} from "#controllers/user.controller";
import { upload } from "#middleware/multer.middlewares";
import { verifyJWT } from "#middleware/auth.middleware";



const router = Router();

router
  .route("/register")
  .post(upload.fields([{ name: "avatar", maxCount: 1 }]), createUser);

router.route("/sendotp").post(userLogin);
router.route("/verifyotp").post(verifyOTP);

router.use(verifyJWT);

router.route("/current-user").get(getCurrentUser);
router.route("/:id").delete(deleteUser);
router.route("/").get(getAllUsers);

export default router;
