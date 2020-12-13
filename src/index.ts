import express from "express"

const app = express()
const port = 3000

app.get("/", (req: any, res: any) => {
  console.log(req)
  res.send(process.env.npm_package_version)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log(app)

export default app

// export const sum = (a: number, b: number) => {
//   if ("development" === process.env.NODE_ENV) {
//     console.log("boop")
//   }
//   return a + b
// }
