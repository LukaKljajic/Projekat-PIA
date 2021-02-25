import mongoose from 'mongoose'

const Student = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  index: {
    type: String
  },
  type: {
    type: String
  },
  name: {
    type: String
  },
  surname: {
    type: String
  },
  active: {
    type: Boolean
  },
  passwordChanged: {
    type: Boolean
  }
})

export default mongoose.model('Student', Student, 'Student')