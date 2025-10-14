import env from "dotenv";
import env_var from "env-var";

env.config();

export const envs = {
  PORT: env_var.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: env_var.get("PUBLIC_PATH").default("public"),
  JWT_SECRET: process.env.JWT_SECRET || "default-secret",
  REFRESH_SECRET: process.env.REFRESH_SECRET || "reftresh_secret",
  PRODUCION: process.env.URL_CORSC_PRODUCTION || "",
  DEVELOPEMENT: process.env.URL_CORSC_DEVELOPMENT || "",
  PASSWORD_SUPER_ADMIN: process.env.PASSWORD_SUPER_ADMIN || "",
  NAME_SUPER_ADMIN: process.env.NAME_SUPER_ADMIN || "",
  NUMBER_SUPER_ADMIN: process.env.NUMBER_SUPER_ADMIN || "",
  EMAIL_SUPER_ADMIN: process.env.EMAIL_SUPER_ADMIN || "",
};
