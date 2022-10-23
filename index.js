const express = require('express')
const app = express()
const port = 3001
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')

app.set('views',__dirname + '/views')

app.get('/', (req, res) => {
   res.render('index')
 })
 app.get('/index', (req, res) => {
  res.render('index')
})

 app.get('/experiencia', (req, res) => {
    res.render('experiencia')
  })

  app.get('/hobbies', (req, res) => {
    res.render('hobbies')
  })
  app.get('/formulario', (req, res) => {
    res.render('formulario')
  })


app.use((req,res,next)=>{
res.status(404).sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})