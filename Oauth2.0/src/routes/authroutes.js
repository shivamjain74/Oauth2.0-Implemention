import { Router } from "express";
// import { redirectTOGoogle, googleTOServer } from "../controller/authController.js";
import { gitHubTOServer, googleTOServer , redirectTOGitHub, redirectTOGoogle } from "../controller/authController.js";
const route = Router();

// google
route.get('/google',redirectTOGoogle)
route.get('/google/callback',googleTOServer)

// GitHub
route.get('/github',redirectTOGitHub)
route.get('/github/callback',gitHubTOServer)

export default route;