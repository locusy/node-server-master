/*
 * @Author: tzz
 * @Date: 2020-03-28 13:16:52
 * @LastEditors: tzz
 * @LastEditTime: 2020-03-28 19:19:45
 */
// const express = require('express')
const express = require('./express')
const app = express()

app.get('/', (req, res) => {
    res.end('WO')
})

app.get('/users', (req, res) => {
    res.end(JSON.stringify([{name: 'xiaoming'}]))
})

app.get({tian:12})

app.listen(9999, () => {
    console.log("server is listneing at 9999...")
})