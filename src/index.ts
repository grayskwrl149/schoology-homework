import express from "express"
import swaggerUi from "swagger-ui-express"
import openApiDocumentation from "./openApiDocumentation"

const app = express()
const port = 3000

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation))

app.get("/", (req: any, res: any) => {
  console.log(req)
  res.send({
    name: process.env.npm_package_name,
    packageVersion: process.env.npm_package_version,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
