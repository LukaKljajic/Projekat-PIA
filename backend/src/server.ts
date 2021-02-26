import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
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

router.route('/changeProfile').post((req, res) => {
  console.log(req.body)
  let username = req.body.username
  let address = req.body.address
  let phone = req.body.phone
  let biography = req.body.biography
  let cabinetNumber = req.body.cabinetNumber
  employee.collection.updateOne({ 'username': username }, { $set: { 'address': address, 'phone': phone, 'biography': biography, 'cabinetNumber': cabinetNumber } })
  res.json({poruka: 'ok'})
})

router.route('/changeSubject').post((req, res) => {
  console.log(req.body)
  let code = req.body.code
  let type = req.body.type
  let ESPB = req.body.ESPB
  let propositions = req.body.propositions
  let goal = req.body.goal
  subject.collection.updateOne({ 'code': code }, { $set: { 'type': type, 'ESPB': ESPB, 'propositions': propositions, 'goal': goal } })
  res.json({poruka: 'ok'})
})

router.route('/setFiles').post((req, res) => {
  let code = req.body.code
  let files = req.body.files
  let nameOfArray = req.body.nameOfArray
  subject.collection.updateOne({ 'code': code }, { $set: { [nameOfArray]: files }})
  res.json({poruka: 'ok'})
})

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/files');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: storage })

router.post('/postFile', upload.single('file'), (req, res) => {
  let fileUrl = req.file.filename;
  const file = {
    file: fileUrl,
    size: req.file.size / 1024,
    author: req.body.author
  }
  let code = req.body.code
  let name = req.body.name
  subject.collection.updateOne({ 'code': code }, { $push: { [name]: file } })
  res.json(file)
});

router.post('/postNews', upload.single('file'), (req, res) => {
  let fileUrl = null
  if(req.file)
    fileUrl = req.file.filename
  let code = req.body.code
  let title = req.body.title
  let content = req.body.content
  let username = req.body.username
  let _new = {
    author: username,
    title: title,
    content: content,
    date: new Date().toISOString(),
    files: [fileUrl]
  }
  if (!fileUrl)
    _new.files = []
  subject.collection.updateOne({ 'code': code }, { $push: { 'news': _new } })
  res.json(_new)
})

router.post('/changeNews', upload.single('file'), (req, res) => {
  let fileUrl = null
  if (req.file)
    fileUrl = req.file.filename
  let code = req.body.code
  let title = req.body.title
  let content = req.body.content
  if(fileUrl)
    subject.collection.updateOne({ 'code': code, 'news.title': title }, { $set: { 'news.$.content': content }, $push: { 'news.$.files': fileUrl } })
  else
    subject.collection.updateOne({ 'code': code, 'news.title': title }, { $set: { 'news.$.content': content }})
  res.json({poruka:"ok"})
})

router.get('/files/:path', (req, res, next) => {
  res.download('public/files/' + req.params.path)
})

router.route('/deleteFile').post((req, res) => {
  let fileToDelete = req.body.fileToDelete
  console.log(fileToDelete)
  fs.unlinkSync("./public/files/"+fileToDelete)
})

router.route('/enable').post((req, res) => {
  let what = req.body.what
  let code = req.body.code
  let value = req.body.value

  subject.collection.updateOne({ 'code': code }, { $set: { [what + 'Enabled']: value } })
  res.json({poruka: 'ok'})
})

router.route('/changeLabs').post((req, res) => {
  let code = req.body.code
  let how = req.body.how
  let howMany = req.body.howMany
  let what = req.body.what
  subject.collection.updateOne({ 'code': code }, { $set: { 'labs.how': how, 'labs.howMany': howMany, 'labs.what': what } })
  res.json({poruka:'ok'})
})

router.route('/changeProject').post((req, res) => {
  let code = req.body.code
  let how = req.body.how
  subject.collection.updateOne({ 'code': code }, { $set: { 'project.how': how } })
  res.json({poruka:'ok'})
})

router.route('/setNews').post((req, res) => {
  let code = req.body.code
  let news = req.body.news
  subject.collection.updateOne({ 'code': code }, { $set: { 'news': news } })
  res.json({poruka:'ok'})
})

router.route('/upsertEmployee').post((req, res) => {
  console.log('usao u upsert')
  console.log(req.body)
  let username = req.body.username
  let name = req.body.name
  let surname = req.body.surname
  let password = req.body.password
  let address = req.body.address
  let phone = req.body.phone
  let website = req.body.website
  let biography = req.body.biography
  let title = req.body.title
  let cabinetNumber = req.body.cabinetNumber

  employee.collection.updateOne(
    { 'username': username },
    {
      $set: {
        'username':username,
        'password': password,
        'name': name,
        'surname': surname,
        "address": address,
        'phone': phone,
        'website': website,
        'biography': biography,
        'title': title,
        'cabinetNumber': cabinetNumber,
        'active': true,
        'passwordChanged': false
      }
    },
    {
      upsert: true
    }
  )
  res.json({poruka:'ok'})
})

router.route('/upsertStudent').post((req, res) => {
  let username = req.body.username
  let password = req.body.password
  let index = req.body.index
  let type = req.body.type
  let name = req.body.name
  let surname = req.body.surname

  student.collection.updateOne(
    { 'username': username },
    {
      $set: {
        'username': username,
        'password': password,
        'index': index,
        'type': type,
        'name': name,
        'surname': surname,
        'active': true,
        'passwordChanged': false
      }
    },
    {
      upsert: true
    }
  )
  res.json({poruka: 'ok'})
})

router.route('/upsertSubject').post((req, res) => {
  subject.collection.updateOne(
    { 'code': req.body.code },
    {
      $set:
      {
        'name': req.body.name,
        'department': req.body.department,
        'semester': req.body.semester,
        'code': req.body.code,
        'theoryTeachers': req.body.theoryTeachers,
        'practicalTeachers': req.body.practicalTeachers,
        'haveLabs': req.body.haveLabs
      }
    },
    {
      upsert: true
    }
  )
  res.json({poruka: 'ok'})
})

router.route('/getStudentByIndex').post((req, res) => {
  let index = req.body.index
  student.findOne({ 'index': index }, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/deleteStudent').post((req, res) => {
  let index = req.body.index
  student.collection.deleteOne({ 'index': index })
  res.json({poruka: 'ok'})
})

router.route('/deleteEmployee').post((req, res) => {
  let username = req.body.username
  employee.collection.deleteOne({ 'username': username })
  res.json({poruka: 'ok'})
})

router.route('/getAllSubjects').get((req, res) => {
  subject.find({}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/getAllStudents').get((req, res) => {
  student.find({}, (err, data) => {
    if (err) console.log(err)
    else res.json(data)
  })
})

router.route('/savePeriod').post((req, res) => {
  console.log('usao')
  let code = req.body.code
  let periods = req.body.periods
  let numOfClasses = req.body.numOfClasses
  let type = req.body.type

  subject.collection.updateOne(
    { 'code': code },
    {
      $set: {
        [type + 'Periods']: periods,
        'numOfClasses':numOfClasses
      }
    }
  )
  res.json({poruka: 'ok'})
})

router.route('/setStudents').post((req, res) => {
  let code = req.body.code
  let students = req.body.students
  subject.collection.updateOne({ 'code': code }, { $set: { 'students': students } })
  res.json({poruka:'ok'})
})

app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));