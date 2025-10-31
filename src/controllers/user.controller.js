import { UserService } from "../services/index.js";

export const create = async (req, res) => {
    try {
        const payload = req.body;
        const user = await UserService.createUser(payload);
        if (!user) {
            throw new Error("User Not Created");
        }
        return res.status(200).json({ success: true, data: user })
    } catch (error) {
        throw error;

    }
}

export const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserService.getUserById(id);
        if (!user) {
            throw new Error("User Not Found");
        }
        return res.status(200).json({ success: true, data: user });
    } catch (error) {
        throw error
    }
}

export const getAll = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        return res.status(200).json({ success: true, data: users ?? [] });
    } catch (error) {
        throw error;
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const user = await UserService.updateUser(id, payload);
        return res.status(200).json({ success: true, data: user });
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await UserService.deleteUser(id);
        return res.status(200).json({ success: true, message: "User Deleted Successfully." })
    } catch (error) {
        throw error;
    }
}