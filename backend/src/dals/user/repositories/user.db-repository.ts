import { UserRepository } from "./user.repository";
import { getDBInstance } from "core/servers/db.server";
import { User } from "../user.model";
import { hashPassword } from "../../../common/helpers/hash-password.helpers";

export const dbRepository: UserRepository = {
  getUserByEmailAndPassword: async (email: string, password: string) => {
    const db = getDBInstance();
    const user = await db.collection<User>("users").findOne({ email: email });
    const hashedPassword = await hashPassword(password, user.salt);

    return user.password === hashedPassword
      ? ({
          _id: user._id,
          email: user.email,
          role: user.role,
        } as User)
      : null;
  },
};
