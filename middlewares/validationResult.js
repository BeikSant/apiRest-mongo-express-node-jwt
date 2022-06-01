import { validationResult } from "express-validator";
import { body } from "express-validator";

export const validarRegister = [
    body('email', 'No es un Email').trim().isEmail().normalizeEmail(),
    body('password', 'Se requiere como minimo 6 caracteres').isLength({ min: 6 }),
    body('password', 'Se requiere como maximo 12 caracteres').isLength({ max: 12 }),
    body('password').custom((value, { req }) => {
        if (value !== req.body.repassword) {
            throw new Error("No coinciden las contraseñas");
        }
        return value;
    })
];

export const validarLogin = [
    body('email', 'No es un Email').trim().isEmail().normalizeEmail(),
    body('password', 'Se requiere como minimo 6 caracteres').isLength({ min: 6 }),
    body('password', 'Se requiere como maximo 12 caracteres').isLength({ max: 12 }),
];

export const validarErrores = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    next();
}