/*
 * @Author: tianzhi
 * @Date: 2020-03-28 13:16:52
 * @LastEditors: tianzhi
 * @LastEditTime: 2020-03-28 18:18:34
 */
const express = require('express')
const app = express()

app.get('./', (req, res) => {
    console.log(req, res)
})

app.listen(9999, () => {
    console.log("server is listneing at 9999...")
})