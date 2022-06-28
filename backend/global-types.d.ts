declare namespace Express {
  export type Role = "admin" | "standard-user" | "standard-user-notAut";
  export interface UserSession {
    id: string;
    role: Role;
  }

  export interface Request {
    userSession?: UserSession;
  }
}
