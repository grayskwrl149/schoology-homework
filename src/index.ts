import express from "express"
import swaggerUi from "swagger-ui-express"
import openApiDocumentation from "./openApiDocumentation"

const app = express()
const port = 3000
const router = express.Router()

router.use("/api_docs", swaggerUi.serve)
router.get("/api_docs", swaggerUi.setup(openApiDocumentation))

router.get("/ping", (req: any, res: any, next: any) => {
  console.log(typeof req) //TODO: this stops breaking error caused by 'req' not being used
  res.send({
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
  })
  next()
})

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
