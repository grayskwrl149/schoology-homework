import express from "express"
import swaggerUi from "swagger-ui-express"
import openApiDocumentation from "./openApiDocumentation"

// example of how to use environment variables
import envs from "./config"
console.log(envs.exampleVar)

const app = express()
const port = 3000

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation))

app.get("/", (req: any, res: any) => {
  console.log(typeof req) //TODO: this stops breaking error caused by 'req' not being used
  res.send({
    name: process.env.npm_package_name,
    packageVersion: process.env.npm_package_version,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
