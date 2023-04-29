const express = require("express");

const app = express();


app.get('/login', (req, res) => {
    const username = req.query.username
    const password = req.query.password

    // Insanely complicated Backend logic
    console.log(`UserName: ${username} | Password: ${password}`)
    if (username === "tobias" && password === "CCM") {
        console.log("Sent Success")
        res.status(200).send("true")
        return
    }
    console.log("Sent fail")
    res.status(200).send("fail")
    return
})

app.listen(3000, () => {
    console.log("Listening to port %s", 3000)
})