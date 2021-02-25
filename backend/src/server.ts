import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import employee from './model/employee';
import subject from './model/subject';
import news from './model/news';
import newsCategory from './model/newsCategory';
import studentProjects from './model/studentProjects';
import projects from './model/projects';
import student from './model/student';
import admin from './model/admin';

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

router.route('/getAllProjects').get((req, res) => {
  projects.find({}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/getEmployeeByUsername').post((req, res) => {
  let username = req.body.username
  employee.findOne({ 'username': username }, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/insertStudent').post((req, res) => {
  let index = req.body.index

  student.findOne({ 'index': index }, (err, data) => {
    if (err) console.log(err)
    else{
      if (data) {
        res.status(200).json({poruka: "Index exists"})
      }
      else {
        const _student = new student(req.body)
        _student.save().then(() => {
          res.status(200).json({poruka: "OK"})
        }).catch(() => {
          res.status(400).json({poruka: "Error"})
        })
      }
    }
  })

})

router.route('/login').post((req, res) => {
  let username = req.body.username
  let password = req.body.password

  admin.findOne({ 'username': username, 'password': password }, (err, data) => {
    if (err) console.log(err)
    else {
      if (data) {
        res.json({user: data, userType:'admin'})
      }
      else {
        employee.findOne({ 'username': username, 'password': password }, (err, data) => {
          if (err) console.log(err)
          else {
            if (data) {
              res.json({user: data, userType:'employee'})
            }
            else {
              student.findOne({ 'username': username, 'password': password }, (err, data) => {
                if (err) console.log(err)
                else {
                  if(data)
                    res.json({ user: data, userType: 'student' })
                  else res.json({userType: ''})
                }
              })
            }
          }
        })
      }
    }
  })
})

router.route('/changePassword').post((req, res) => {
  let newPassword = req.body.newPassword
  let username = req.body.username

  student.collection.updateOne({ 'username': username }, { $set: { 'password': newPassword, 'passwordChanged': true } })
  employee.collection.updateOne({ 'username': username }, { $set: { 'password': newPassword, 'passwordChanged': true } })
  admin.collection.updateOne({ 'username': username }, { $set: { 'password': newPassword, 'passwordChanged': true } })
  res.json(newPassword)
})

app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));