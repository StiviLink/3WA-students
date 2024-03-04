import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
    res.end(`<h1>Hello World</h1>`)
})

server.listen(port, host, () => console.log(`Server is running on http://${host}:${port}`))