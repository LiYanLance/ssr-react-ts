import express from "express"
import { loadTemplate } from "./loadTemplate";
import path from "path";

const app = express()
const port = 3000

app.use('/public', express.static(path.join(__dirname, '../../public')))

app.get("/", (req, res) => {
  const html = loadTemplate()

  res.status(200)
    .send(html);
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
