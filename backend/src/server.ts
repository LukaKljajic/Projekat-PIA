import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import employee from './model/employee';
import subject from './model/subject';
import news from './model/news';
import newsCategory from './model/newsCategory';
import studentProjects from './model/studentProjects';

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

router.route('/getSubjectsForEmployee').post((req, res) => {
  let username = req.body.username

  subject.find({ $or: [{ 'theoryTeachers': username }, {'practicalTeachers': username} ]}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/getAllNews').get((req, res) => {
  news.find({}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/getNameForCategoryNumber').post((req, res) => {
  let number = req.body.number

  newsCategory.findOne({ 'number': number }, (err, data) => {
    if (err) console.log(err)
    else {
      res.json(data)
    }
  })
})

router.route('/getAllSubjectsForDepartment').post((req, res) => {
  let department = req.body.department

  subject.find({ 'department': department }, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/getSubjectByCode').post((req, res) => {
  let code = req.body.code
  subject.findOne({ 'code': code }, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/getAllStudentProjects').get((req, res) => {
  studentProjects.find({}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));