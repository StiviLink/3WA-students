import path from "node:path"
import express from "express"
import bodyParser from "body-parser"
import avatarRoute from "./routes/avatar.route.js"

const app = express()
const parent = process.cwd()
console.log(parent)

// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(parent, `${!parent.endsWith('api') ? 'api/' : ''}views`))

const host = 'localhost'
const port = 8000

avatarRoute(app)

app.listen(port, () => console.log(`Server is running on http://${host}:${port}`))