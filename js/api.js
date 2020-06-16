const auth = require('basic-auth')
const compare = require('tsscmp')
const { username, password } = require('./.secret')

function postLogin(req, res) {
    const credentials = auth(req)
    console.log(credentials)

    if (credentials && credentials.name === username && compare(credentials.pass, password)) {
        res.end(JSON.stringify({
            status: 'SUCCESS'
        }))
    } else {
        res.end(JSON.stringify({
            status: 'ERROR'
        }))
    }
}

function postArticle(req, res) {
    const credentials = auth(req)

    if (credentials && credentials.name === username && compare(credentials.pass, password)) {
        console.log(req.body)
        res.end(JSON.stringify({
            status: 'SUCCESS'
        }))
    } else {
        res.end(JSON.stringify({
            status: 'ERROR',
            message: 'Invalid Credentials'
        }))
    }
}

exports.postLogin = postLogin
exports.postArticle = postArticle