const ip = require('./ip')

const express = require("express");
const app = express()
const port = 6969

const { exec } = require('child_process')

app.get(`/${encodeURIComponent('👋')}`, (req, res) => {
    exec('shutdown -s -t 0', (error, stdout, stderr) => {
        if (error || stderr) {
            res.send(`cannot shutdown: ${error.message || stderr}`)
            return
        }

        res.send(`result: ${stdout}`)
    })
})

app.listen(port, ip, () => {
    console.log(`fuckin shutdown app is running 🚀 on ${ip}:${port}`)
})