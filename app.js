const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const pagesRouter = require('./controller/pages')
const app = express()
port = process.env.PORT || 80

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', pagesRouter)

app.listen(port, () => {
    console.log('server is running....')
})
