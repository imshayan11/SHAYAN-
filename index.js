const express = require('express')
const app = express()
const port = 3000
const path = require('path')
            
//app.get('/', (req, res) => {
  //res.send('Hi I am Shayan Ul Haq. Welcome to my channel')
//})

//app.get('/image', (req, res) =>{
    //let imagePath = path.join(__dirname, 'download.jpg');
  
    //res.sendFile(imagePath)
//})
//app.get('/image', (req, res) => {
  console.log(req.query.id)
   // let image01 = path.join(__dirname, 'dwnload.jpg')
    //let image02 = path.join(__dirname, 'free.jpg')
    //let querry = console.log(req.querry)
    //if (querry= free)
      //res.sendfile('image01')  
    //else
      //res.sendfile('image02')
//})
app.use(express.static)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
