import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validarErrores, validarLogin, validarRegister} from "../middlewares/validationResult.js";

const router = express.Router();

router.post('/register', validarRegister, validarErrores, register);
router.post('/login', validarLogin, validarErrores, login);

export default router;