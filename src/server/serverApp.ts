import express from "express"
import { loadTemplate } from "./loadTemplate";

const app = express()
const port = 3000

app.get("/", (req, res) => {
  const html = loadTemplate()

  res.status(200)
    .header("Cache-Control", "300")
    .send(html);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
