import { BCRYPT_SALT_ROUNDS } from '../config/config.js';
import bcrypt from "bcrypt";

export const HashPassword = async (password) => {
    if (!password) throw new Error("Password is required.");

    try {
        return await bcrypt.hashSync(password, Number(BCRYPT_SALT_ROUNDS));
    } catch (err) {
        throw new Error(`Error hashing password: ${err.message}`);
    }
};
