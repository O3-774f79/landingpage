
const express = require('express')
const app = express()
const Manageweb = require('./controllers/Manageweb')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/api/manageweb', Manageweb.getImage)
app.put('/manageweb', Manageweb.editImage)
app.post('/manageweb', Manageweb.addImage)
app.delete('/manageweb', Manageweb.deleteImage)

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})