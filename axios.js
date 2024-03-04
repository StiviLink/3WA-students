import axios from "axios"
import fs from "node:fs"

axios({
    method: "get",
    url: "https://www.google.com",
    responseType: "json"
})
    .then(res => {
        fs.writeFileSync('google.html', res.data)
    })