import dotenv from 'dotenv';
dotenv.config();

const {
    BCRYPT_SALT_ROUNDS
} = process.env;

export {
    BCRYPT_SALT_ROUNDS
}