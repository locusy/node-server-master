/*
 * @Author: tzz
 * @Date: 2020-03-28 13:22:15
 * @LastEditors: tzz
 * @LastEditTime: 2020-03-28 19:25:11
 * @Description: 基于node的http模块封装express router
 */
const http = require('http')
const url = require('url')

let router = []
class Application {
    get(path, handle) {
        if(typeof path == 'string') {
            router.push({
                path,
                method: 'GET',
                handle
            })
        } else {
            router.push({
                path: '*',
                method: 'GET',
                handle: path
            })
        }
    }

    listen(port, callback) {
        const server = http.createServer((req, res) => {
            const pathname = url.parse(req.url).pathname
            for(let route of router) {
                const { path, method, handle } = route
                if(path == pathname && method == req.method) {
                    handle(req, res)
                } 
                if(path == "*") {
                    return handle(req, res)
                }
            }
            process.on("uncaughtException", err => {
                console.log('err:', err)
            })
        })
        /**
         * arguments: port callback
         */
        server.listen(...arguments)
    }
    
}

module.exports = function getApplication() {
    return new Application()
}