const express = require("express")
const axios = require("axios")

const app = express();

const backend_url = process.env.BACKEND_URL
const backend_port = process.env.BACKEND_PORT

app.get('/login', async (req, frontRes) => {
    const res = await axios.get(`http://${backend_url}:${backend_port}/login?username=${req.query.username}&password=${req.query.password}`)
    console.log(`Backend returned code: ${res.status}`)
    console.log(`Body: ${res.data}`)

    if (res.data !== true) {
        frontRes.status(200).send("Wrong credentials!!111elf")
        return
    } else {
        frontRes.status(200).send("You're in!")
        return
    }
})

// Register middlewares
app.use(express.static('static'))

app.listen(3000, () => {
    console.log("Listening to port %s", 3000)
})