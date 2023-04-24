import {
  POSTGRES_DB_NAME,
  POSTGRES_DIRECTION,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
} from "@@/config"
import { Sequelize } from "sequelize"
import SampleModel from "./SampleModel";

// export const sequelize = new Sequelize(
//   `postgres://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_DIRECTION}:${POSTGRES_PORT}/${POSTGRES_DB_NAME}`
// )
//@ts-ignore
export const sequelize = new Sequelize(POSTGRES_DB_NAME,POSTGRES_USERNAME,POSTGRES_PASSWORD,{
  host:POSTGRES_DIRECTION,
  dialect:"postgres"
})

export const connectionPromise = (async () => {
  try {
    await sequelize.authenticate()
    
    console.log("||||||||||  Postgres Sequelize connected  ||||||||||")

    sequelize.sync()
    
  } catch (error) {
    console.error("Unable to connect to Postgres with Sequelize:", error)
    return false
  }

  return true
})()
