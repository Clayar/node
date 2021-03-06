const express = require('express')
const path = require('path')
const hbs = require('hbs')


const port = process.env.PORT || 3000
const app = express()

const publicDir = path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(express.static(publicDir))
const partialPath = path.join(__dirname, '../partials')
hbs.registerPartials(partialPath)

var model = {
    title: 'My title',
    name : 'Ny name'
}

app.get('', (req, res)=>{
    res.render('index', {model
    })
})

app.listen(port, ()=>{
    console.log('Server is Up')
})