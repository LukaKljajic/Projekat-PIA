import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import employee from './model/employee';

const app = express();
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/projekat')
const conn = mongoose.connection
conn.once('open', () => {
  console.log('Connected to database')
})

const router = express.Router()

router.route('/getAllEmployees').get((req, res) => {
  employee.find({}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));