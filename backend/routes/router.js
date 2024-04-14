import exprss from "express";
import {
  bookmark,
  follow,
  getUsertwittandUserWhoifollow,
  getallUser,
  login,
  logout,
  ragiser,
  unfollow,
  userProfiel,
} from "../controllers/auth.js";
import { Middlerware } from "../middleware/authentication.js";
import { Twitt, likeTwitt, twittDelete } from "../controllers/twit.js";
const router = exprss.Router();

router.route("/ragister").post(ragiser);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/twitt").post(Middlerware, Twitt);
router.route("/twitt/delete/:id").delete(Middlerware, twittDelete);
router.route("/twitt/like/:id").post(Middlerware, likeTwitt);
router.route("/twitt/bookmark/:id").put(Middlerware, bookmark);
router.route("/user/profile/:id").get(Middlerware, userProfiel);
router.route("/user/all").get(Middlerware, getallUser);
router.route("/user/follow/:id").post(Middlerware, follow);
router.route("/user/unfollow/:id").post(Middlerware, unfollow);
router.route("/user/getalltwitt").get(Middlerware, getUsertwittandUserWhoifollow);


export default router;
