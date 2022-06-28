import { connectToDBServer } from "core/servers";
import { envConstants } from "core/constants";
import { User } from "../dals/user/user.model";
import { db } from "dals/mock-data";
import { generateSalt, hashPassword } from "common/helpers";
import { getDBInstance } from "../core/servers/db.server";

export const run = async () => {
  await connectToDBServer(envConstants.MONGODB_URI);

  for (let user of db.users) {
    const dbMongo = getDBInstance();
    const salt = await generateSalt();
    const hashedPassword = await hashPassword(user.password, salt);

    await dbMongo.collection<User>("users").insertOne({
      ...user,
      password: hashedPassword,
      salt,
    });
  }
};
