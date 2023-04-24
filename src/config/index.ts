import * as dotenv from "dotenv"

dotenv.config()

export const SERVER_PORT = process.env.SERVER_PORT

export const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
export const POSTGRES_DIRECTION = process.env.POSTGRES_DIRECTION
export const POSTGRES_DB_NAME = process.env.POSTGRES_DB_NAME
export const POSTGRES_PORT = process.env.POSTGRES_PORT || 5432

export const SECRET_KEY = process.env.SECRET_KEY