import { HashPassword } from "../helpers/index.js";
import { UsersModel } from "../models/index.js";

export class UserService {

  static async createUser(data) {
    try {
      const exists = await UserService.getByEmail(data.email);
      if (exists) {
        throw new Error(`User with email ${data.email} already Exists.`);
      }

      data.password = await HashPassword(data.password);

      const user = await UsersModel.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email) {
    const user = UsersModel.findOne({
      email
    });
    return user;
  }

  static async getUserById(id) {
    try {
      const user = await UsersModel.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      const users = await UsersModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, data) {
    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        throw new Error(`${id} User not found.`);
      }
      const updatedUser = await UsersModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        throw new Error(`${id} User not found.`);
      }
      const deletedUser = await UsersModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

