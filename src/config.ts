import dotenv from "dotenv"

dotenv.config()

const envVars = {
  exampleVar: process.env.EXAMPLE_VAR,
}

export default envVars
